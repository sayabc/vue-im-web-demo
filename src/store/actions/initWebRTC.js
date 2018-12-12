/*
 * SDK连接相关
 */

import CONFIG from '@/configs/index'
import store from '..';
import utilMusic from '@/utils/music'

const config = CONFIG
const WebRTC = require('@/sdk/' + config.webrtcSDK)

// 重新初始化 web rtc SDK
export function initWebRTC({
  state,
  commit,
  dispatch
}) {
  // export function initWebRTC() {

  const netcall = WebRTC.getInstance({
    nim: window.nim,
    container: document.getElementById('container'),
    remoteContainer: document.getElementById('remoteContainer'),
    // 是否开启日志打印
    debug: true
  });

  let rtcSupport = window.rtcSupport

  let Netcall = netcall // 哈哈 这个地方
  // 是否被叫中
  let beCalling = false;
  // 呼叫类型
  let type = null;
  // 被叫信息
  let beCalledInfo = null;
  // 是否正忙
  let busy = false;
  // 呼叫超时检查定时器
  let callTimer = null;
  // 被呼叫超时检查定时器
  let beCallTimer = null;

  // 音频流配置
  let sessionConfig = {
    recordAudio: false,
    highAudio: false
  }

  // 定义一些语音通话相关的函数 begin
  let clearCallTimer = function () {
    if (callTimer) {
      clearTimeout(callTimer);
      callTimer = null;
    }
  };

  let clearBeCallTimer = function () {
    if (beCallTimer) {
      clearTimeout(beCallTimer);
      beCallTimer = null;
    }
  };
  let clearRingPlay = function () {
    if (this.playRingInstance) {
      this.playRingInstance.cancel && this.playRingInstance.cancel();
      this.playRingInstance = null;
    }
};

  // 定义一些语音通话相关的函数 end

  // 开启监听
  netcall.on('beCalling', function (obj) {
    console.warn('接收到了 on beCalling', obj);
  });

  // 被叫接受的通知  点对点音频
  netcall.on('callAccepted', function (obj) {
    console.warn('on callAccepted', obj);

    // 只有在没有通话并且没有被叫的时候才记录被叫信息, 否则通知对方忙并拒绝通话
    if (!netcall.calling && !beCalling) {
      type = obj.type;
      beCalling = true;
      beCalledInfo = obj;
      // // 可选择是否接听逻辑放在弹出的界面里面 see ShowBeCallPage.vue
      // commit('updateBeCallState', true)
    } else {
      if (netcall.calling) {
        busy = netcall.notCurrentChannelId(obj);
      } else if (beCalling) {
        busy = beCalledInfo.channelId !== channelId;
      }
      if (busy) {
        netcall.control({
          channelId: channelId,
          command: netcall.NETCALL_CONTROL_COMMAND_BUSY
        });
        // 拒绝通话
        netcall.response({
          accepted: false,
          beCalledInfo: obj
        });
      }
    }
    // 异步
    commit('updateBeCallHasRecept', true)
    // 如果呼叫之前，启动了超时倒计时，这里可以取消呼叫倒计时
    // clearCallTimer(); TODO
    // 可以开启音视频连接操作。。。
    console.log('同意通话，开始设备检测...')

    // 有个开始webrtc的方法需要提前调用
    if (!rtcSupport.support) {
      console.warn('当前浏览器不支持webrtc技术!')
      // this.$toast.center('当前浏览器不支持webrtc技术!')
      vueToast.center('当前浏览器不支持webrtc技术!')
      return;
    } else {
      console.log("开始webrtc连接")
      netcall.startRtc()
        .then(() => {
          console.log("webrtc连接成功")
          console.log("开启麦克风")
          netcall.startDevice({
            // 开启麦克风输入
            type: WebRTC.DEVICE_TYPE_AUDIO_IN
          }).then(() => {
            console.log("开启麦克风成功，通知对方我方开启了麦克风");
            netcall.control({
              command: WebRTC.NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_ON
            })
            netcall.setCaptureVolume(255)
          }).catch((e) => {
            console.log("开启麦克风失败")
            console.error("开启麦克风失败", e)
            // this.$toast.center('开启麦克风失败')
            vueToast.center('开启麦克风失败')
            // 通知对方，我方麦克风不可用
            netcall.control({
              command: WebRTC.NETCALL_CONTROL_COMMAND_SELF_AUDIO_INVALID
            });
          })
        }).catch((e) => {
          console.error(e);
          console.log("连接出错");
          if (/webrtc兼容开关/i.test(e)) {
            vueToast.center('无法接通!请让呼叫方打开"WebRTC兼容开关"，方可正常通话')
          }
        })
    }



  });

  // 被叫拒绝的通知
  netcall.on('callRejected', function (obj) {
    console.log('on callRejected', obj);
    commit('updateBeCallHasReject', true)
    console.log('拒绝链接，开始做挂断和清理工作')
    // 如果呼叫之前，启动了超时倒计时，这里可以取消呼叫倒计时
    // clearCallTimer(); TODO
    // 挂断
    netcall.hangup()
    // 做清理工作
    netcall.resetWhenHangup();
  });

  netcall.on('control', function (obj) {
    console.log("on control:", obj);
    // 如果不是当前通话的指令, 直接丢掉
    console.log('on control notCurrentChannelId ', netcall.notCurrentChannelId(obj), obj)
    if (netcall.notCurrentChannelId(obj)) {
      console.warn("非当前通话的控制信息");
      return;
    }

    let type = obj.type;

    switch (type) { // 这里可以添加更多的关于视频的处理
      // NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_ON 通知对方自己打开了音频
      case WebRTC.NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_ON:
        console.warn("对方打开了麦克风");
        break;
        // NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_OFF 通知对方自己关闭了音频
      case WebRTC.NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_OFF:
        console.warn("对方关闭了麦克风");
        break;
        // NETCALL_CONTROL_COMMAND_BUSY 占线
      case WebRTC.NETCALL_CONTROL_COMMAND_BUSY:
        vueToast.center("对方正在通话中");
        console.warn("取消通话");
        netcall.hangup();
        clearCallTimer();
        busy = true;
        // this.sendLocalMessage("对方正在通话中");

        function doEnd() {
          // this.cancelCalling();
        }
        let afterPlayRingA = function () { };

        doEnd = doEnd.bind(this);
        if (afterPlayRingA) {
          afterPlayRingA = function () {
            utilMusic.playRing("C", 3, function () {
              vueToast.center("对方正在通话中", 2000, doEnd);
            });
          };
        } else {
          clearRingPlay();
          utilMusic.playRing("C", 3, function () {
            vueToast.center("对方正在通话中", 2000, doEnd);
          });
        }
        break;
    }
  });

  netcall.on('hangup', function (obj) {
    console.warn('on hangup', obj);
    commit('netcallHandleUp')
    // 判断需要挂断的通话是否是当前正在进行中的通话
    if (!beCalledInfo || beCalledInfo.channelId === obj.channelId) {
      // 清理工作
      netcall.resetWhenHangup();
    }
  });

  netcall.on('callerAckSync', function (obj) {
    console.warn('其他端已经做了处理', obj);
  });

  netcall.on('error', function (obj) {
    console.warn('sdk反馈错误信息', obj);
    if (obj.code) {
      if (obj.code == 509) {
        console.warn('你被踢出房间了');
      } else if (obj.code == 500) {
        console.warn('你的web不支持H264视频编码，无法进行呼叫，请检测浏览器的H264插件是否正常');
      }
    }
  });


  netcall.on('joinChannel', function (obj) {
    console.log('user join', obj);
    // 告诉群通话发起人 a 加入了房间 再加一些信息比如 谁加入房间的操作
    commit('updateBeCallHasRecept', true)
    // 更新语音会话列表
    obj.hasEnter = true
    console.log('user join curChannelAllMember ', store.state.curChannelAllMember)
    commit('updateCurChannelAllMembersOnlineStatus', obj)

    // 更新在线人数
    commit('updateOnCallUserInfos', {
      obj: obj,
      flag: true
    })

    // 当有人加入频道 分发到各个端存放到各自store中，在UI界面显示
    // 通知上层有其他用户加入了房间，上层做相应逻辑和UI处理
    // eg: 开启摄像头
    // eg: 开启麦克风
    // eg: 开启本地流
    // eg: 设置音量采集、播放
    // eg: 设置视频画面尺寸等等，具体请参照p2p呼叫模式


  });


  netcall.on('leaveChannel', function (obj) {
    // 通知上层有其他用户离开了会议，上层做相应逻辑和UI处理
    console.log('有人离开教室了:', obj.account)
    // 更新语音会话列表
    obj.hasEnter = false
    commit('updateCurChannelAllMembersOnlineStatus', obj)

    // 更新在线人数
    commit('updateOnCallUserInfos', {
      obj: obj,
      flag: false
    })
  });

  // 在回调里监听对方加入通话，并显示对方的视频画面
  netcall.on('remoteTrack', function (obj) {
    console.log('收到远程轨道信息', obj);
    console.log('remote user join', obj)
    // 音频：播放对方的音频
    if (obj.track.kind === 'audio') {
      // 播放对方声音
      netcall
        .startDevice({
          type: Netcall.DEVICE_TYPE_AUDIO_OUT_CHAT
        })
        .catch(function () {
          console.log('播放对方的声音失败');
        });
    }

    // 视频：展示对方的画面
    if (obj.track.kind === 'video') {
      // 预览加入的同学的视频流
      netcall.startRemoteStream({
        account: obj.account,
        node: document.getElementById('remoteContainer')
      });

      // 设置对方预览画面大小
      netcall.setVideoViewRemoteSize({
        account: 'testUid',
        with: 500,
        height: 500,
        cut: true
      });
    }
  });

  netcall.on('deviceAdd', function (devices) {
    console.log('新增设备列表', devices);
  })

  netcall.on('deviceRemove', function (devices) {
    console.log('移除设备列表', devices);
  })

  netcall.on('deviceStatus', function (obj) {
    console.log('设备状态发生变化', obj);

    // 检查摄像头
    netcall.getDevicesOfType(WebRTC.DEVICE_TYPE_VIDEO).then(function (devices) {
      console.log('摄像头', devices);
    });

    // 检查麦克风
    netcall.getDevicesOfType(WebRTC.DEVICE_TYPE_AUDIO_IN).then(function (devices) {
      console.log('麦克风', devices);
    });

    // 检查扬声器
    netcall
      .getDevicesOfType(WebRTC.DEVICE_TYPE_AUDIO_OUT_CHAT)
      .then(function (devices) {
        console.log('扬声器', devices);
      });
  });

  // // 清除上层逻辑自己维护的各种状态
  // clear();

  // // 停止本地视频预览
  // netcall.stopLocalStream();

  // // 停止对端视频预览
  // netcall.stopRemoteStream();

  // // 停止设备麦克风
  // netcall.stopDevice(Netcall.DEVICE_TYPE_AUDIO_IN);

  // // 停止设备摄像头
  // netcall.stopDevice(Netcall.DEVICE_TYPE_VIDEO);

  // // 停止播放本地音频
  // netcall.stopDevice(Netcall.DEVICE_TYPE_AUDIO_OUT_LOCAL);

  // // 停止播放对端音频
  // netcall.stopDevice(Netcall.DEVICE_TYPE_AUDIO_OUT_CHAT);


  // 变量挂在在netcall上面
  window.netcall = netcall

}
