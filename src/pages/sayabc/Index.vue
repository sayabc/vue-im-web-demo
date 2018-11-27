<template>
  <div id="sayabc-im">
    <div id="im-list">
      <search />
      <session />
    </div>
    <div id="im-chat-box">
      <chat-header />
      <!-- 要显示聊天界面要有sessionId  通过store传递 -->
      <chat v-if="sessionId"/>
    </div>
    <div id="im-info-box">
      <!-- 显示群成员信息 -->
      <info />
    </div>
  </div>
</template>

<script>
import Session from './Session'
import Chat from './Chat'
import Search from './search'
import ChatHeader from './ChatHeader'
import Info from './Info'

export default {
  components: {
    Session,
    Chat,
    Search,
    ChatHeader,
    Info
  },
  computed: {
    sessionId () {
      let sessionId = this.$route.params.sessionId || this.$store.state.currSessionId
      console.warn('INDEX sessionId ', sessionId)
      return sessionId
    },
  }
}
</script>

<style type="text/css">
#sayabc-im {
  width: 100%;
  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid gray;
}
#im-list {
  /* padding: 0 0.133333rem; */
  /* color: #cfcfcf; */
  /* margin: 0.08rem; */
  width: 30%;
  min-width: 200px;
  height:100%;
  box-sizing: border-box;
  float: left;
  border-right: 1px solid gray;
}
#im-chat-box {
  width: 50%;
  box-sizing: border-box;
  float: left;
}
#im-info-box {
  float: right;
  width:20%;
  box-sizing: border-box;
  height:100%;
  border-left: 1px solid gray;
}
.component {
  padding: 0 0.133333rem;
  /* background-color: #ebebeb; */
  color: #cfcfcf;
  height: 100%;
  overflow: auto;
  border: 1px solid gray;
}
</style>