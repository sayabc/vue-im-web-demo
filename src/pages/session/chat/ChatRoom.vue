<template>
  <div class="chat-room-container">
    <!-- 参与语音通话成员的列表展示 -->
    <ul class="list">
      <li class="item" v-for="item in curChannelAllMember" :key="item.account">
        <div :class='["item-avatar-bg-default",{"item-avatar-bg-light": item.hasEnter}]'>
          <img v-if="item.hasEnter" class="item-avatar" :src="item.avatar" alt>
          <div v-else class="item-wait-icon">
            <span class="wait1"></span>
            <span class="wait2"></span>
            <span class="wait3"></span>
          </div>
        </div>
        <!-- <div :class="['item-name',{'item-name-light': item.hasEnter}]"> -->
        <div :class="['item-name',{'item-name-light': item.hasEnter}]">{{ item.account }}</div>
      </li>
    </ul>

    <!-- 操作 board -->
    <div class="action-board">
      <div class="fl control">
        <div
          class="shape control-micro fl"
          @mouseenter="handleBGlight('micro')"
          @mouseleave="handleBGgray('micro')"
        >
          <!-- 麦克风: 设置己方音频播放音量 发送到对方的音频 UI缺少禁用功能 暂不做-->
          <div class="slider">
            <span class="show-range-value micro-value">{{microValue}}</span>
            <input type="range" min="0" max="10" step="1" v-model="microValue">
          </div>
          <span :class='["note","micro-icon",{"micro-light": microLight}]'></span>
        </div>
        <div
          class="shape control-volume fl"
          @mouseenter="handleBGlight('voice')"
          @mouseleave="handleBGgray('voice')"
        >
          <!-- 声音: 设置己方音频采集音量 播放音量的大小 UI缺少禁用功能 暂不做-->
          <div class="slider">
            <span class="show-range-value voice-value">{{voiceValue}}</span>
            <input type="range" min="0" max="10" step="1" v-model="voiceValue">
          </div>
          <span :class='["note","voice-icon",{"voice-light": voiceLight}]'></span>
        </div>
      </div>
      <div class="fr show">
        <span class="show-time">{{showTime}}</span>
        <button class="show-handup" @click="handleLeaveChannel">Hand up</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { clearInterval, setInterval } from 'timers'
import utilMusic from '@/utils/music'

export default {
  data () {
    return {
      microValue: 5,
      voiceValue: 5,
      microLight: false,
      voiceLight: false,
      timer: null, // 通话时长，以房间创建者开始计时，所有人都退出房间为结束
      timeCount: 0,
      showTime: 0
    }
  },
  computed: mapState({
    onCallUserInfos: state => state.onCallUserInfos,  // 当前加入语音通道的用户 当前在线人数
    curChannelAllMember: state => state.curChannelAllMember // 当前应该在channel的所有用户
  }),
  watch: {
    timeCount: function(cur) {
      return this.showTime = this.getNetcallDurationText(cur)
    },
    microValue: function(cur) {
      // 设置本地音量采集大小, 该API可以在通话过程中动态调用调整自己的音量采集大小  范围 0-255
      return netcall.setCaptureVolume(cur * 25.5)
    },
    voiceValue: function(cur) {
      // 设置本地音量播放大小, 该API可以在通话过程中动态调用调整自己的音量播放大小(即自己听对端的音量) 范围 0-255
      return netcall.setPlayVolume(cur * 25.5)
    },
    onCallUserInfos: function(cur) {
      if(cur.length>1) { // 当在线人数大于1 则把主叫铃声关闭
        utilMusic.clearRingPlay()
      }
    }
  },
  mounted () {
    this.timer = null
    this.timer = setInterval(() => {
      this.timeCount += 1
    }, 1000)
    let allUser = this.curChannelAllMember
    console.log('all', allUser)
    let curAccountId = netcall.getAccount()
    let mountMusic = {}
    for(let i=0;i<allUser.length;i++) {
      if(allUser[i].account === curAccountId) {
        mountMusic = allUser[i]
      }
    }
    console.log('all 2', mountMusic)
    // owner normal
    if (mountMusic.type === "normal") {  // 被叫进来就关闭声音
      utilMusic.clearRingPlay()
    }
    //  主叫直到有两个以及两个以上的人就关闭
    // utilMusic.clearRingPlay()
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
    // 当前播放的声音也关掉
    utilMusic.clearRingPlay()
  },
  methods: {
    getNetcallDurationText(allSeconds) { // 方法放到util里面 TODO
      let result = "";
      let hours, minutes, seconds;
      if (allSeconds >= 3600) {
          hours = parseInt(allSeconds / 3600);
          result += ("00" + hours).slice(-2) + ":";
      }
      if (allSeconds >= 60) {
          minutes = parseInt(allSeconds % 3600 / 60);
          result += ("00" + minutes).slice(-2) + ":";
      } else {
          result += "00:";
      }
      seconds = parseInt(allSeconds % 3600 % 60);
      result += ("00" + seconds).slice(-2);
      return result;
    },
    handleLeaveChannel () {

      netcall.leaveChannel().then(obj => {
        this.$store.commit('updateCallState', false) // 关闭主叫页面
        this.$store.commit('updateBeCallState', false)  // 关闭被叫页面
      })
    },
    handleBGlight (str) {
      this[str+'Light'] = true
    },
    handleBGgray (str) {
      this[str+'Light'] = false
    }
  }
}
</script>


<style lang="less" scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
p {
  display: block;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
.chat-room-container {
  // max-height: 438px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  color: #fff;
  .list {
    overflow: auto;
    padding: 2px;
    max-height: 366px;
    box-sizing: border-box;
    background-color: #000;
    .item {
      width: 140px;
      height: 180px;
      // border: 1px solid blue;
      box-sizing: border-box;
      display: block;
      float: left;
      margin-right: 4px;
      margin-bottom: 4px;
      .item-avatar-bg-default {
        height: 140px;
        text-align: center;
        padding-top: 45px;
        padding-right: 45px;
        padding-left: 45px;
        box-sizing: border-box;
        // background-color: #000;
        .item-avatar {
          width: 50px;
          height: 50px;
        }
        .item-wait-icon {
          height: 12px;
          line-height: 12px;
          margin-top: 24px;
          span {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }
          .wait1 {
            background: rgba(85, 85, 85, 1);
          }
          .wait2 {
            background: rgba(153, 153, 153, 1);
          }
          .wait3 {
            background: rgba(216, 216, 216, 1);
          }
        }
      }
      .item-avatar-bg-light {
        background: rgba(203, 235, 255, 1);
      }
      .item-name {
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: rgba(64, 64, 64, 1);
        font-size: 16px;
      }
      .item-name-light {
        background: rgba(3, 169, 244, 1);
      }
    }
  }
  .action-board {
    height: 70px;
    line-height: 70px;
    padding-left: 20px;
    padding-right: 20px;
    background: rgba(0, 0, 0, 1);
    .control {
      .shape {
        .slider {
          display: none;
          width: 40px;
          height: 146px;
          position: absolute;
          bottom: 15px;
          background: rgba(255, 255, 255, 1);
          border-radius: 20px;
          .show-range-value {
            margin-left: 10px;
            margin-top: 10px;
            width: 20px;
            height: 18px;
            line-height: 18px;
            display: block;
            color: #000;
            text-align: center;
          }
          input[type="range"] {
            -webkit-appearance: none;
            background: rgba(238, 238, 238, 1);
            width: 68px;
            height: 2px;
            outline: 0;
            margin-left: 19px;
            margin-top: 66px;
            transform-origin: left;
            transform: rotate(-90deg);
          }
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            cursor: pointer;
            width: 14px;
            height: 14px;
            margin-left: -6px;
            border-radius: 50%;
            background: rgba(3, 169, 244, 1);
            box-shadow: 0px 1px 5px 0px rgba(3, 169, 244, 0.4);
          }
        }
        .note {
          display: block;
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 12px;
          position: absolute;
          bottom: 15px;
          border-radius: 50%;
          cursor: pointer;
        }
        .micro-icon {
          background: url("../../../assets/images/micro-gray.png") center center
            no-repeat;
          background-size: cover;
        }
        .micro-light {
          background: url("../../../assets/images/micro-light.png") center
            center no-repeat;
          background-size: cover;
        }
        .voice-icon {
          background: url("../../../assets/images/voice-gray.png") center center
            no-repeat;
          background-size: cover;
        }
        .voice-light {
          background: url("../../../assets/images/voice-light.png") center
            center no-repeat;
          background-size: cover;
        }
      }
      .control-micro {
        margin-right: 20px;
      }
      .control-micro:hover {
        .slider {
          display: block;
        }
      }
      .control-volume {
        margin-left: 60px;
      }
      .control-volume:hover {
        .slider {
          display: block;
        }
      }
    }
    .show {
      .show-time {
        height: 16px;
        line-height: 16px;
        font-size: 14px;
        color: rgba(176, 176, 176, 1);
      }
      .show-handup {
        height: 36px;
        line-height: 36px;
        border-radius: 21px;
        background: rgba(3, 169, 244, 1);
        width: 100px;
        margin-left: 10px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
