<template>
  <div class="members_container">
    <div class="mask-item invite-members">
      <div class='line'></div>
      <div class="item-header">
        <span class="fl">选择邀请成员</span>
        <span class="fr" @click="handleCloseInviteDialog">X</span>
      </div>
      <div class="item-main invite-list-main">
        <ul class="fl members-list">
          <li v-for="(item) in currentMembers"
            :key="item.account"
            v-if="myInfo.account !== item.account"> <!--自己默认就加入，不邀请-->
            <span>
              <label>
                <input type="checkbox" @click="handleSelectMember(item)"/>
                <span>
                  <img class='member-avatar' :src="item.avatar" alt="群成员头像">
                  <span class='member-name'>{{item.alias}}</span>
                </span>
              </label>
            </span>
          </li>
        </ul>
        <ul class="fl invite-list">
          <li v-for="(item, index) in hasSelectMembers" :key="index">
            <span
            class="select-item-show">
              <img class='member-avatar' :src="item.avatar" alt="">
              <span class='member-name'>{{item.alias}}</span>
            </span>
          </li>
        </ul>
      </div>
      <div class="item-btns">
        <span class='cancel-btn' @click="handleCloseInviteDialog">Cancel</span>
        <span @click="handleMembersInvite">Determine</span>
      </div>
    </div>
  </div>
</template>

<script>
import utilWebrtc from '@/utils/utilWebrtc'
import utilMusic from '@/utils/music'

export default {
  props: ["members", "myInfo", "invalid", "invalidHint"],
  data() {
    return {
      currentMembers: [],
      hasSelectMembers: [],
      confirmSelectMembers: [], // hasSelectMembers不能使用的原因 TODO;
      allChannelNumbers: [], // 含是否进入房间的标识  hasEnter
    };
  },
  computed: {
    sessionId() {
      return this.$store.state.currSessionId;
    },
    teamMembers() {
      return this.$store.state.teamMembers;
    }
  },
  mounted() {
    this.currentMembers = this.members
  },
  methods: {
    handleCloseInviteDialog() {
      // 关闭邀请成员语音弹窗
      // 清除上一次弹窗列表和选择成员列表
      this.currentMembers = [];
      this.hasSelectMembers = [];
      this.$store.commit('updateMaskState', false)
      this.$store.commit("updateSelectMemberDiaState", false);
      // 关闭播放音乐
      utilMusic.clearRingPlay()
    },
    handleSelectMember(item) {
      // 对 hasSelectMembers 数组进行添加和删除处理
      let temIndex = this.hasSelectMembers.indexOf(item);
      temIndex > -1
        ? this.hasSelectMembers.splice(temIndex, 1)
        : this.hasSelectMembers.push(item);
      this.confirmSelectMembers = this.hasSelectMembers

      console.log("选择成员列表", this.hasSelectMembers);
    },
    handleMembersInvite() {
      let _this = this
      // 对选择的人员发起语音通话
      if (this.hasSelectMembers.length < 1) {
        console.log("请选择要语音的人员!");
        return;
      }
      // 开始呼叫前 更新所有人 hasEnter = false
      this.confirmSelectMembers = this.confirmSelectMembers.map(v=>{
        v.hasEnter = false
        return v
      })
      // 关闭选择弹窗、理论应该在创建房间、加入房间后，发起通话后弹出 showcallpage
      this.handleCloseInviteDialog()
      this.netcallVoice()

      // 呼叫声音开启
      let afterPlayRingA = function () {
        utilMusic.playRing("E", 30);
      }
      utilMusic.playRing("A", 1, function () {
        afterPlayRingA && afterPlayRingA();
        afterPlayRingA = null;
      })

    },
    // 通话相关函数封装 begin
    handleCreateChannel() {
      // 创建房间
      return netcall.createChannel({
        //必填 TODO 退出时候记得销毁 实际使用的时候 这个按照群组id进行创建房间 sessionId+account+timestamp
        channelName: this.sessionId+'-'+this.myInfo.account+'-'+new Date().getTime(),
        custom: "", //可选
        webrtcEnable: true // 是否支持WebRTC方式接入，可选，默认为不开启
      });
    },
    handleJoinChannel(obj) {
      // 加入房间
      console.log('创建房间的channelName', obj.channelName)
      return netcall.joinChannel({
        // 这里需要注意从这里https://yunxin.163.com/im-demo下载的SDK仅仅是参考，官方文档更正确一些。比如type 而不是 mode在5.9.0的webrtc中
        channelName: obj.channelName, //必填，请确保此房间已被创建
        type: 1, // 模式，0音视频，1纯音频，2纯视频，3静默
        role: 0 // 角色，0-主播 1-观众
      });
    },
    handleCallOnePeople(item, curAccount, curChatTeamId, channelName) {
      // 发起单个通话请求
      // 不给自己发通话
      if(item.account === this.myInfo.account) return; // 从this.confirmSelectMembers去掉本人会更好 DONE
      // 呼叫别人前 要告诉对方自己已经进入教室
      // TODO
      let option = this.confirmSelectMembers
      this.myInfo.hasEnter = true
      let allPeople = option.concat([this.myInfo])
      console.log('ooopeing', allPeople)
      nim.sendCustomSysMsg({
        scene: 'p2p',
        to: item.account,
        enablePushNick: false,
        content: JSON.stringify({
          id: 3,
          // members: option, // 所有的人
          members: allPeople,
          teamId: option.teamId,
          curChannelName: channelName,
          type: 1,
          curChatTeamId: this.sessionId
        }),
        isPushable: true,
        sendToOnlineUsersOnly: false,
        apnsText: item.nickInTeam||item.account + '正在呼叫您',
        done: function(error, msg) {
          console.log(msg);
        }
      });

    },
    handleCallMulPeople(channelName) {
      // 批量发起通话请求
      // await Promise.all(this.hasSelectMembers.map(v=>this.handleCallOnePeople(v.account).then(()=>{console.log('成功')}))).catch(err=>console.log('批量call发生异常',err))
      let HSM = this.confirmSelectMembers
      for(let i=0;i<HSM.length;i++) {
         this.handleCallOnePeople(HSM[i], HSM[i].account, HSM[i].teamId, channelName)
      }
    },
    netcallVoice() {
      // 点击开始语音
      if (this.invalid) {
        this.$toast.center(this.invalidHint);
        return;
      }
      console.log("音频通话开始");

      this.handleCreateChannel().then(obj => {
        // 更新当前已创建的房间的信息 在webrtc里通信
        // this.$store.commit('updateCurrChannelInfo', obj)
          // 预定房间成功后的上层逻辑操作
          // eg: 初始化房间UI显示
          // eg: 加入房间
          console.log("正在加入房间")

        this.handleJoinChannel(obj).then(() => {
          console.log("本人加入房间成功", obj, obj.channelName);
          // 更新在房间人数
          this.$store.commit('updateOnCallUserInfos', {
            flag: true,
            obj: obj
          })

          // 主叫进入房间后需要 hasEnter 设置为 true 用于标识在线状态
          this.myInfo.hasEnter = true
          // 更新store中的该频道的所有成员列表；在用户加入channel后同步到该用户的store中或者接受到sendCustomSysMsg时候从members中读取
          this.allChannelNumbers = this.confirmSelectMembers.concat([this.myInfo])
          // 所有在channel的成员包含自己,邀请语音通话的人也存储起来,各个端需要看到：]
          this.$store.commit('updateCurChannelAllMembers', this.allChannelNumbers) // 默认把自己加入到通话成员列表中

          // 这里弹出 ShowCallPage页面 DELETE 所有人共用一个聊天室 ChatRoom.vue 主叫自动进入
          this.$store.commit('updateCallState', true)

              // 加入房间成功后的上层逻辑操作
              // eg: 开启麦克风
              // eg: 开启本地流
              // eg: 设置音量采集、播放

            console.log('开始发送sendCustomSysMsg到选中的成员: ',this.confirmSelectMembers,  this.confirmSelectMembers.length)
          // 存储现在呼叫的teamID
          this.$store.commit("updateCurCallTeamId", this.confirmSelectMembers[0].teamId)
          this.$store.commit("updateCurChannelName", obj.channelName)

          // 加一层call控制器
          this.confirmSelectMembers.length < 2
            ? this.handleCallOnePeople(this.confirmSelectMembers[0], this.confirmSelectMembers[0].account, this.confirmSelectMembers[0].teamId, obj.channelName)
            : this.handleCallMulPeople(obj.channelName)
          // 开启设备
          utilWebrtc.startWebrtc()
        })
      }).catch((err)=>{
        this.$toast.center(err.event.message || err.message)
        utilMusic.clearRingPlay()
      })
    }
  }
};
</script>

<style lang='less' scoped>
.members_container {
  height:100%;
}
.fl {
  float: left;
}
.fr {
  float: right;
  color:#03A9F4;
  cursor: pointer;
}
.mask-item {
  // 通用mask子元素
  width: 620px;
  height: 520px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  .line {
    height:3px;
    background:#03A9F4;
  }
  .item-header {
    height: 30px;
    line-height: 30px;
    padding: 10px;
    background:rgba(246,246,246,1);
    font-weight: 500;
  }
  .invite-list-main {
    border-bottom: 1px solid #EEEEEE;
    height: 400px;
    overflow: auto;
    .members-list {
      width: 50%;
      padding:10px;
      border-right: 1px solid #EEEEEE;
      box-sizing: border-box;
      li{
        padding:10px;
      }
    }
    .invite-list {
      padding:10px;
      box-sizing: border-box;
      li{
        padding:10px;
      }
    }
  }
  .member-avatar {
    width:30px;
    height:30px;
    border-radius: 50%;
    overflow: hidden;
    vertical-align: middle;
    margin-left:10px;
  }
  .member-name {
    vertical-align: middle;
    font-weight:500;
    color:rgba(68,77,88,1);
    font-size:14px;
    margin-left:10px;
  }
  .item-btns {
    text-align: center;
    height: 53px;
    line-height: 53px;
    padding-top: 6px;
    span {
      display: inline-block;
      margin-right: 20px;
      border: 1px solid #03A9F4;
      border-radius: 20px;
      height:36px;
      line-height:36px;
      width:150px;
      cursor: pointer;
      background: #03A9F4;
      color:#fff;
      font-weight: 500;
      &.cancel-btn{
        background: #fff;
        color:#03A9F4;
      }
    }
  }
}
</style>

