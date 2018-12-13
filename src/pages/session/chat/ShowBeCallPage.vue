<template>
  <div class="netcall-becalling-box becall">
    <!-- <div class='becall-box' v-if="(!becallHasRecept && !becallHasReject)"> -->
    <div class='becall-box'>
      <div class='call-info'>
        <p class='avatar'>
          <img :src="from.avatar" alt="">
        </p>
        <p class='name'>{{isTeacher?teamInfo.name:teamInfo.owner}}</p>
        <p class='from'>{{from.alias||from.account}} Inviting voice calls…</p>
      </div>
      <div class="btns">
        <span class="btn btn_no" @click="handleNo">Refuse</span>
        <span class="btn btn_yes" @click="handleYes">Answer</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import utilWebrtc from '@/utils/utilWebrtc'
import utilMusic from '@/utils/music'

export default {
  data() {
    return{
      isTeacher:false
    }
  },
  mounted () {
    let _this = this
    // 呼叫声音开启
    utilMusic.playRing("E", 15, function () { // E 每个2s持续时间
      utilMusic.clearRingPlay()
      // 如果响铃结束后还没有接 视为handleNo 自动挂断
      _this.$toast.center('会话超时')
      _this.handleNo()
    })

  },
  computed:{
    ...mapState([
      'becallHasRecept',
      'becallHasReject',
      'myInfo',
      'curChannelName',
      'onCallUserInfos', // 当前加入语音通道的用户
      'curChannelAllMember', // 当前应该在channel的所有用户
      'customSysMsgs'
    ]),
    ...mapGetters(['teamInfo']),
    from () {
      let from = {};
      let fromAccount = this.$store.state.customSysMsgs[0].from;
      let content = JSON.parse(this.$store.state.customSysMsgs[0].content);
      if(content.type === 1) {
        content.members.forEach(item => {
          if(item.account === fromAccount) {
            from.avatar = item.avatar;
            from.account = item.account;
            from.alias = item.alias;
          }
        });
      }
      return from;
    },
  },
  methods: {
    handleYes () {
      let _this = this
      netcall.joinChannel({
        channelName: this.curChannelName, //必填，请确保此房间已被创建
        type: 1, // 模式，0音视频，1纯音频，2纯视频，3静默
        role: 0 // 角色，0-主播 1-观众
      }).then(obj => {
        // 设置被叫进入房间状态 是否需要同步到store=> 暂不需要
        this.curChannelAllMember = this.curChannelAllMember.map(v=>{
          if(v.account === this.myInfo.account) {
            v.hasEnter = true
          }
          return v
        })

        // 被叫进入房间  更新在线人数
        this.$store.commit('updateOnCallUserInfos', {
          flag: true,
          obj: obj
        })

        // 开启设备
       utilWebrtc.startWebrtc()

      // 这里弹出 ShowCallPage页面 DELETE 所有人共用一个聊天室 ChatRoom.vue 主叫自动进入
      this.$store.commit('updateCallState', true)

      utilMusic.clearRingPlay()

      }).catch(err=>{
        console.log('被叫进入频道发生错误了: ', this.curChannelName, err)
        _this.$toast.center(err.event.message || err.message)
        _this.$store.commit('updateBeCallState', false)  // 关闭被叫页面
        utilMusic.clearRingPlay()
      })
    },
    handleNo () {
      let _this = this
      // 关闭弹窗
      this.$store.commit('updateBeCallState', false)  // 关闭被叫页面
      // this.$store.commit('updateCallState', false)
      utilMusic.clearRingPlay()
      // 取消
      netcall.leaveChannel().then(obj => {
        // this.$store.commit('updateCallState', false) // 关闭主叫页面
        _this.$store.commit('updateBeCallState', false)  // 关闭被叫页面
      })

    },
    handleLeaveChannel () {
      // 结束语音聊天
      netcall.leaveChannel().then(obj => {
        console.log('被叫方挂断电话了')
        // this.$store.commit('updateBeCallState', false) // 关闭被叫页面
        this.$store.commit('updateCallState', false)
      })
    }
  },
}
</script>


<style lang='less' scoped>
.netcall-becalling-box {
    height:310px;
    position: relative;
    .becall-box {
      height:100%;
    }
    .call-info {
      height:100%;
      padding-bottom:60px;
      box-sizing: border-box;
      .avatar{
        padding-top:40px;
        img {
          width:60px;
          height:60px;
          border-radius: 50%;
          overflow: hidden;
        }
      }
      .name {
        font-size:16px;
        color:#fff;
        font-weight: 500;
        padding-top:15px;
      }
      .from {
        color:#B0B0B0;
        font-size:14px;
        padding-top:15px;
      }
    }
    .btns {
      position: absolute;
      width:100%;
      bottom:0;
      height:60px;
      text-align: center;
      .btn{
        display: inline-block;
        width:100px;
        height:36px;
        line-height:36px;
        text-align: center;
        background:#03A9F4;
        border-radius: 20px;
        color:#fff;
        cursor: pointer;
        &.btn_no {
          background:transparent;
          border:1px solid #03A9F4;
          color:#03A9F4;
          margin-right:20px;
        }
      }
    }
}
.becall {
  top: 0;
  text-align: center;
}
</style>