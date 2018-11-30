<template>
  <div class="m-chat-editor" @click="hideRobotList">
    <chat-emoji
      v-bind:type="type"
      v-bind:scene="scene"
      v-bind:to="to"
      v-show="isEmojiShown"
      v-on:add-emoji="addEmoji"
      v-on:hide-emoji="hideEmoji"
    ></chat-emoji>
    <group v-show="isRobotListShown" class="m-chat-emoji m-chat-robot">
      <cell v-for="robot in robotslist" :title="robot.nick" :key="robot.account" @click.native="chooseRobot(robot)">
        <img class="icon u-circle" slot="icon" width="20" height="20" :src="robot.avatar">
      </cell>
    </group>
    <div class="m-chat-editor-main" :class="{robot:isRobot}">
      <span class="u-editor-input">
        <textarea v-model="msgToSent" @focus='onInputFocus'></textarea>
      </span>
      <span class="u-editor-icons">
        <span v-if="!isRobot" class="u-editor-icon" @click.stop="showEmoji">
          <i class="u-icon-img"><img :src="icon1"></i>
        </span>
        <span v-if="!isRobot" class="u-editor-icon" @change="sendFileMsg">
          <i class="u-icon-img"><img :src="icon2"></i>
          <input type="file" ref="fileToSent">
        </span>
        <!-- <span v-if="!isRobot && !advancedTeam" class="u-editor-icon" @click.stop="sendPlayMsg">
          <i class="u-icon-img"><img :src="icon3"></i>
        </span> -->
        <!-- <span v-if="!isRobot && !advancedTeam" class="u-editor-icon" id="showNetcallVideoLink" @click.stop="sendPlayMsg"> -->
        <span v-if="!isRobot && !advancedTeam" class="u-editor-icon" id="showNetcallVideoLink" @click.stop="netcallVideoLink">
          <i class="u-icon-img"><img :src="icon3"></i>
        </span>
        <span v-if='advancedTeam' class="u-editor-send u-editor-receipt" @click="turnToMsgReceipt">回执</span>
        <span class="u-editor-send" @click="sendTextMsg">发 送</span>
        <span class="u-editor-send u-editor-receipt" @click="leaveRoom">离开房间</span>

      </span>
    </div>
  </div>
</template>

<script>
import ChatEmoji from './ChatEmoji'
import util from '@/utils'
import config from '@/configs'
import pageUtil from '@/utils/page'

export default {
  components: {
    ChatEmoji
  },
  updated () {
    window.document.body.addEventListener('click', () => {
      this.isEmojiShown = false
    })
  },
  props: {
    type: String,
    scene: String,
    to: String,
    isRobot: {
      type: Boolean,
      default () {
        return false
      }
    },
    invalid: {
      type: Boolean,
      default: false
    },
    invalidHint: {
      type: String,
      default: '您无权限发送消息'
    },
    advancedTeam: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    continueRobotAccid (curVal, oldVal) {
      if (curVal && this.robotInfos[curVal]) {
        this.msgToSent = `@${this.robotInfos[curVal].nick} `
      }
      // 重置
      this.$store.dispatch('continueRobotMsg', '')
    },
    msgToSent (curVal, oldVal) {
      if (this.isRobot) {
        return
      }
      let indexAt = this.msgToSent.indexOf('@')
      if (indexAt >= 0 && (indexAt === this.msgToSent.length - 1)) {
        if (this.robotslist && this.robotslist.length > 0) {
          this.isRobotListShown = true
        }
      } else if (this.isRobotListShown === true) {
        this.isRobotListShown = false
      }
    }
  },
  data () {
    return {
      isEmojiShown: false,
      isRobotListShown: false,
      msgToSent: '',
      icon1: `${config.resourceUrl}/im/chat-editor-1.png`,
      icon2: `${config.resourceUrl}/im/chat-editor-2.png`,
      icon3: `${config.resourceUrl}/im/chat-editor-3.png`,
    }
  },
  computed: {
    continueRobotAccid () {
      return this.$store.state.continueRobotAccid
    },
    robotslist () {
      return this.$store.state.robotslist
    },
    robotInfos () {
      return this.$store.state.robotInfos
    },
    robotInfosByNick () {
      return this.$store.state.robotInfosByNick
    }
  },
  methods: {
    sendTextMsg () {
      if (this.invalid) {
        this.$toast(this.invalidHint)
        return
      }
      if (/^\s*$/.test(this.msgToSent)) {
        this.$vux.alert.show({
          title: '请不要发送空消息'
        })
        return
      } else if (this.msgToSent.length > 800) {
        this.$vux.alert.show({
          title: '请不要超过800个字'
        })
        return
      }
      this.msgToSent = this.msgToSent.trim()
      if (this.type === 'session') {
        // 如果是机器人
        if (this.isRobot) {
          this.$store.dispatch('sendRobotMsg', {
            type: 'text',
            scene: this.scene,
            to: this.to,
            robotAccid: this.to,
            // 机器人后台消息
            content: this.msgToSent,
            // 显示的文本消息
            body: this.msgToSent
          })
        } else {
          let robotAccid = ''
          let robotText = ''

          let atUsers = this.msgToSent.match(/@[^\s@$]+/g)
          if (atUsers) {
            for (let i = 0; i < atUsers.length; i++) {
              let item = atUsers[i].replace('@', '')
              if (this.robotInfosByNick[item]) {
                robotAccid = this.robotInfosByNick[item].account
                robotText = (this.msgToSent + '').replace(atUsers[i], '').trim()
                break
              }
            }
          }
          if (robotAccid) {
            if (robotText) {
              this.$store.dispatch('sendRobotMsg', {
                type: 'text',
                scene: this.scene,
                to: this.to,
                robotAccid,
                // 机器人后台消息
                content: robotText,
                // 显示的文本消息
                body: this.msgToSent
              })
            } else {
              this.$store.dispatch('sendRobotMsg', {
                type: 'welcome',
                scene: this.scene,
                to: this.to,
                robotAccid,
                // 显示的文本消息
                body: this.msgToSent
              })
            }
          } else {
            this.$store.dispatch('sendMsg', {
              type: 'text',
              scene: this.scene,
              to: this.to,
              text: this.msgToSent
            })
          }
        }
      } else if (this.type === 'chatroom') {
        let robotAccid = ''
        let robotText = ''

        let atUsers = this.msgToSent.match(/@[^\s@$]+/g)
        if (atUsers) {
          for (let i = 0; i < atUsers.length; i++) {
            let item = atUsers[i].replace('@', '')
            if (this.robotInfosByNick[item]) {
              robotAccid = this.robotInfosByNick[item].account
              robotText = (this.msgToSent + '').replace(atUsers[i], '').trim()
              break
            }
          }
        }
        if (robotAccid) {
          if (robotText) {
            this.$store.dispatch('sendChatroomRobotMsg', {
              type: 'text',
              robotAccid,
              // 机器人后台消息
              content: robotText,
              // 显示的文本消息
              body: this.msgToSent
            })
          } else {
            this.$store.dispatch('sendChatroomRobotMsg', {
              type: 'welcome',
              robotAccid,
              // 显示的文本消息
              body: this.msgToSent
            })
          }
        } else {
          this.$store.dispatch('sendChatroomMsg', {
            type: 'text',
            text: this.msgToSent
          })
        }
      }
      this.msgToSent = ''
    },
    sendPlayMsg () {
      if (this.invalid) {
        this.$toast(this.invalidHint)
        return
      }
      // 发送猜拳消息
      if (this.type === 'session') {
        this.$store.dispatch('sendMsg', {
          type: 'custom',
          scene: this.scene,
          to: this.to,
          pushContent: '[猜拳]',
          content: {
            type: 1,
            data: {
              value: Math.ceil(Math.random()*3)
            }
          }
        })
      } else if (this.type === 'chatroom') {
        this.$store.dispatch('sendChatroomMsg', {
          type: 'custom',
          pushContent: '[猜拳]',
          content: {
            type: 1,
            data: {
              value: Math.ceil(Math.random()*3)
            }
          }
        })
      }
    },
    sendFileMsg () {
      if (this.invalid) {
        this.$toast(this.invalidHint)
        return
      }
      let ipt = this.$refs.fileToSent
      if (ipt.value) {
        if (this.type === 'session') {
          this.$store.dispatch('sendFileMsg', {
            scene: this.scene,
            to: this.to,
            fileInput: ipt
          })
        } else if (this.type === 'chatroom') {
          this.$store.dispatch('sendChatroomFileMsg', {
            fileInput: ipt
          })
        }
      }
    },
    leaveRoom () {
      netcall.leaveChannel().then(() => {
        // 清除上层UI逻辑
        console.log('离开房间成功')
      });
    },
    netcallVideoLink () { // 点击开始视频
      if (this.invalid) {
        this.$toast(this.invalidHint)
        return
      }
      console.warn('开始视频通话 begin')
      console.log('音频通话开始', netcall)

      // 创建房间
      netcall.createChannel({
        channelName: new Date().getTime().toString(), //必填 TODO 退出时候记得销毁
        custom: '测试自定义数据', //可选
        webrtcEnable: true // 是否支持WebRTC方式接入，可选，默认为不开启
      }).then(function(obj) {
        // 预定房间成功后的上层逻辑操作
        // eg: 初始化房间UI显示
        // eg: 加入房间
        console.log('初始化成功',obj) // obj 返回发送的数据
        console.log('正在加入房间')
        netcall.joinChannel({
          // 这里需要注意从这里https://yunxin.163.com/im-demo下载的SDK仅仅是参考，官方文档更正确一些。比如type 而不是 mode在5.9.0的webrtc中
            channelName: obj.channelName, //必填，请确保此房间已被创建
            // mode: 0, // 模式，0音视频，1纯音频，2纯视频，3静默
            type: 1, // 模式，0音视频，1纯音频，2纯视频，3静默
            role: 0 // 角色，0-主播 1-观众
          })
          .then(function(obj) {
            // obj结构 => {account,cid,uid}
            console.error('加入房间成功', obj)
            // 加入房间成功后的上层逻辑操作
              // eg: 开启摄像头
              // eg: 开启麦克风
              // eg: 开启本地流
              // eg: 设置音量采集、播放
              // eg: 设置视频画面尺寸等等，具体请参照p2p呼叫模式
              // 开始呼叫?
                // 发起通话请求
                netcall.call({
                  // type: netcall.NETCALL_TYPE_VIDEO,
                  type: 1,
                  account: 'a81', // 账号 TODO 多点的时候封装后分批处理
                  webrtcEnable: true,
                  pushConfig: {},
                  sessionConfig:{
                    recordVideo: true,
                    recordAudio: true
                  }
                }).then(function(obj){
                  console.log('call', obj)
                })
              // const netcall = this.netcall;
              // 开启麦克风
              // netcall
              //   .startDevice({
              //     type: netcall.DEVICE_TYPE_AUDIO_IN
              //   })
              //   .then(function() {
              //     // 通知对方自己开启了麦克风
              //     console.log('通知对方自己开启了麦克风')
              //     netcall.control({
              //       command: netcall.NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_ON
              //     });
              //   })
              //   .catch(function(err) {
              //     console.log('启动麦克风失败');
              //     console.log(err);
              //   });
          })
          .catch(function(err){
            console.log('加入房间失败', err)
          })
      }).catch(function(err){
        console.log('初始化失败', err)
      })

    },
    showEmoji () {
      this.isEmojiShown = true
    },
    hideEmoji () {
      this.isEmojiShown = false
    },
    addEmoji (emojiName) {
      this.msgToSent += emojiName
      this.hideEmoji()
    },
    chooseRobot (robot) {
      if (robot && robot.account) {
        let len = this.msgToSent.length
        if (len === 0 || this.msgToSent[len-1] !== '@') {
          this.msgToSent += '@' + robot.nick + ' '
        } {
          this.msgToSent += robot.nick + ' '
        }
      }
    },
    hideRobotList () {
      this.isRobotListShown = false
    },
    onInputFocus(e) {
      setTimeout(() => {
        // todo fixme 解决iOS输入框被遮挡问题，但会存在空白缝隙
        e.target.scrollIntoView()
        pageUtil.scrollChatListDown()
      }, 200)
    },
    turnToMsgReceipt() {
      if (this.invalid) {
        this.$toast(this.invalidHint)
        return
      }
      location = `#/teamSendMsgReceipt/${this.to}`
    }
  }
}
</script>

<style scoped>
  .robot.m-chat-editor-main {
    /*.u-editor-input {
      padding-right: 4.5rem;
    }
    .u-editor-icons {
      width: 4rem;
    }*/
  }
  .m-chat-robot {
    overflow-y: scroll;
    .weui-cells {
      .weui-cell__hd {
        margin-right: 0.5rem;
      }
    }
  }

  .u-editor-send.u-editor-receipt {
    background-color: #fefefe;
    border: #ccc solid 1px;
    color: black;
    padding: 0.1rem;
    margin-left: .1rem;
  }
</style>