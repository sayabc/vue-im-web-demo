<template>
  <div class="call">
    <div v-if="!becallHasRecept && !becallHasReject">
      <p>正在等待对方接听...</p>
      <chat-room />
    </div>
    <div v-if="becallHasRecept">
      <p>对方已接受您的语音通话请求</p>
      <p @click="handleLeaveChannel">请求方挂断</p>
      <div>
        <h2>参与通话有</h2>
        <p v-for="(people) in onCallUserInfos" :key="people.account">
          {{people.account}}
        </p>
      </div>
    </div>
    <div v-if="becallHasReject">
      <p>对方已拒接您的语音通话请求</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import state from '../../../store/state'
import ChatRoom from './ChatRoom'

export default {
  components: {
    ChatRoom
  },
  computed: mapState({
    becallHasRecept: state => state.becallHasRecept,
    becallHasReject: state => state.becallHasReject,
    myInfo: state => state.myInfo,
    onCallUserInfos: state => state.onCallUserInfos  // 当前加入语音通道的用户
  }),
  methods: {
    handleLeaveChannel () {
      netcall.leaveChannel().then(obj => {
        console.log('主叫方挂断电话了')
        this.$store.commit('updateCallState', false) // 关闭主叫页面
      })
    }
  }
}
</script>


<style scoped>
.call {
  top: 0;
  height:310px;
  text-align: center;
}
</style>
