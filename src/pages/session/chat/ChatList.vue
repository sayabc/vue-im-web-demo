<template>
  <div class='class-list-box'>
    <!-- 两个container需要判断是否在当前的会话窗口中 -->
    <!-- 2018.12.8 更新: 所有的聊天人员使用公共的聊天窗口  ChatRoom.vue -->
    <div id="container">
      <!-- 当所有人都不在channel的时候 关掉这个弹窗 TODO  -->
        <!-- v-if="curChatTeamId === sessionId.replace('team-', '') && chatVoiceShowCall" -->
        <!-- 使用 v-show 而不是 v-if -->
      <chat-room
        v-show="curChatTeamId === sessionId.replace('team-', '') && chatVoiceShowCall"
      />
    </div>
    <div id="remoteContainer">
        <!-- 需要一个 chatroom的代理，TODO -->
      <show-be-call-page
        v-if="curChatTeamId === sessionId.replace('team-', '') && chatVoiceShowBeCall && !chatVoiceShowCall"
      />
    </div>
    <ul>
      <chat-item
        v-for="msg in msglist"
        :rawMsg="msg"
        :isRobot="isRobot"
        :myInfo="myInfo"
        :key="msg.idClient"
        :userInfos='userInfos'
      ></chat-item>
    </ul>
  </div>
</template>
<script>
import ChatItem from "./ChatItem";
import ShowCallPage from './ShowCallPage'
import ShowBeCallPage from './ShowBeCallPage'
import ChatRoom from './ChatRoom'
import {mapState} from 'vuex';
export default {
  components: {
    ChatItem,
    ShowCallPage,
    ShowBeCallPage,
    ChatRoom
  },
  props: {
    msglist: {
      type: Array,
      default() {
        return [];
      }
    },
    isRobot: {
      type: Boolean,
      default() {
        return false;
      }
    },
    myInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    teamInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    userInfos: {
      type: Object,
      default() {
        return {};
      }
    },
    sessionId: String
  },
  computed: {
    ...mapState([
      'chatVoiceShowCall',
      'chatVoiceShowBeCall',
      'isHandUp',
      'sessionlist',
      'curChatTeamId'
    ])
  }
};
</script>
<style lang='less' scoped>
#container, #remoteContainer {
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
  background:linear-gradient(180deg,rgba(95,86,86,1) 0%,rgba(44,44,45,1) 100%);
}
</style>


