/**
 * 语音通信部分的方法
 *
*/

import CONFIG from '@/configs/index'
const config = CONFIG
const WebRTC = require('@/sdk/' + config.webrtcSDK)


let utilWebrtc = Object.create(null)

utilWebrtc = {
  startWebrtc: function() {  // 加入channel后 同意开启音视频链接 有时候用户加入频道但是initwebrtc监听不到
    // eg: 开启摄像头
    // eg: 开启麦克风
    // eg: 开启本地流
    // eg: 设置音量采集、播放
    // eg: 设置视频画面尺寸等等，具体请参照p2p呼叫模式

    console.log('加入channel后开始音视频链接')
    // 判断是否支持webrtc技术
    if (!rtcSupport.support) {
      console.warn('当前浏览器不支持webrtc技术!')
      alert('rtcSupport不支持')
      return;
    } else {
      console.log("开始webrtc连接")
      netcall.startRtc()
        .then(()=>{
          console.log("webrtc连接成功")
          console.log("开启麦克风")

          // 开启麦克风
          netcall.startDevice({
            // 开启麦克风输入
            type: WebRTC.DEVICE_TYPE_AUDIO_IN
          }).then(()=>{
            console.log("开启麦克风成功，通知对方我方开启了麦克风");
            netcall.control({
              command: WebRTC.NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_ON
            })

            // 设置采集音量
            netcall.setCaptureVolume(255)

          }).catch((e)=>{
            console.log("开启麦克风失败")
            console.error("开启麦克风失败", e)
            // 通知对方，我方麦克风不可用
            netcall.control({
              command: WebRTC.NETCALL_CONTROL_COMMAND_SELF_AUDIO_INVALID
            });
          })
        }).catch((e)=>{
          console.error(e);
          console.log("连接出错");
          if (/webrtc兼容开关/i.test(e)) {
            alert('无法接通!请让呼叫方打开"WebRTC兼容开关"，方可正常通话')
          }
        });
    }

  }
}

export default utilWebrtc
