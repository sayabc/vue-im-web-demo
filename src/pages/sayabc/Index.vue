<template>
  <div id="sayabc-im">
    <div id="im-list">
      <div class="component">
        <session />
      </div>
    </div>
    <div id="im-chat-box">
      <div class="component">
        <!-- 要显示聊天界面要有sessionId  通过store传递 -->
        <chat v-if="sessionId"/>
      </div>
    </div>
  </div>
</template>

<script>
import Session from './Session'
import Chat from './Chat'

export default {
  components: {
    Session,
    Chat
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
#im-list {
  padding: 0 0.133333rem;
  color: #cfcfcf;
  /* margin: 0.08rem; */
  width: 30%;
  box-sizing: border-box;
  float: left;
}
#im-chat-box {
  width: 70%;
  box-sizing: border-box;
  float: left;
}
.component {
  padding: 0 0.133333rem;
  background-color: #ebebeb;
  color: #cfcfcf;
  height: 90%;
  border: 1px solid gray;
}
</style>