<template>
  <div class="netcall-becalling-box">
    <p>被叫界面</p>
    <img alt="用户头像" class="avatar" :src="icon_default">
    <!-- <img alt="用户头像" class="avatar" > -->
    <div class="nick">3个a讨论组</div>
    <p id="becallingText" class="tip">a80 邀请视频通话...</p>
    <div class="op">
      <div class="normal">
        <!-- <div class="checking-tip hide">检查插件中...
          <span class="netcall-icon-checking"></span>
        </div> -->
        <button class="netcall-button blue beCallingAcceptButton" id="beCallingAcceptButton">
          <span class="txt">接听</span>
          <span class="netcall-icon-checking"></span>
        </button>
        <button class="netcall-button red beCallingRejectButton" id="beCallingRejectButton">
          拒绝
        </button>
      </div>
      <div class="exception">
        <!-- <button class="netcall-button blue" id="downloadAgentButton">下载音视频插件</button> -->
        <!-- <br> -->
        <!-- <button class="netcall-button red beCallingRejectButton">拒绝</button> -->
        <!-- <div class="exception-tip">拒绝调用插件申请会导致无法唤起插件,需重启浏览器</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icon_default: '../images/default-icon.png'
    }
  },
  props: ['sysMsgs'],
  mounted() {
    console.log('sysMsgs:==>', this.sysMsgs)
  },
}
</script>


<style type="text/css">
.netcall-becalling-box {
  background-color: rgba(0, 0, 0, 0.8)
}
</style>