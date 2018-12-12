<template>
  <div class="chat-item">
    <div class="chat-box">
      <div class="chat-list" id="chat-list">
        <chat-list
          :msglist="msglist"
          :myInfo="myInfo"
          :isRobot="isRobot"
          :userInfos="userInfos"
          :sessionId="sessionId"
        />
      </div>
      <div class="chat-edit">
        <!-- 父组件有很多可以props传递给子组件不要一遍一遍的写 TODO 比如scene teamInfo等!!! -->
        <chat-editor
          :scene="scene"
          :to="to"
          :invalid="teamInvalid || muteInTeam"
          :invalidHint="sendInvalidHint"
        />
      </div>
    </div>
    <!-- 邀请成员弹窗 -->
    <div class="inviteTeamVoice" v-if="scene==='team' && showSelectMember">
      <select-members
        :members="members"
        :invalid="teamInvalid || muteInTeam"
        :invalidHint="sendInvalidHint"
        :myInfo="myInfo"
      />
    </div>
  </div>
</template>
<script>
import util from "@/utils";
import ChatList from "./ChatList";
import ChatEditor from "./ChatEditor";
import SelectMembers from './SelectMemers'
import {mapState, mapMutations, mapGetters} from 'vuex';

export default {
  components: {
    ChatList,
    ChatEditor,
    SelectMembers
  },
  computed: {
    ...mapState([
      'showSelectMember',
      'isCheckMember',
      'userInfos',
      'robotInfos',
      'myInfo'
    ]),
    ...mapGetters([
      'sessionId',
      'teamInfo',
    ]),
    scene(state) {
      if(!this.sessionId) return false;
      return util.parseSession(this.sessionId).scene;
    },
    to() {
      return util.parseSession(this.sessionId).to;
    },
    members() {
      if (this.teamInfo) {
        var members = this.$store.state.teamMembers[this.teamInfo.teamId];
        var userInfos = this.$store.state.userInfos;
        var needSearchAccounts = [];
        if (members) {
          members = members.map(item => {
            var member = Object.assign({}, item); //重新创建一个对象，用于存储展示数据，避免对vuex数据源的修改
            if (member.account === this.$store.state.userUID) {
              member.alias = "我";
              member.avatar = this.$store.state.myInfo.avatar;
            } else {
              member.avatar = userInfos[member.account].avatar;
              member.alias =
                member.nickInTeam || userInfos[member.account].nick;
            }
            return member;
          });
          return members;
        }
        return [];
      }
    },
    msglist() {
      return this.$store.state.currSessionMsgs;
    },
    isRobot() {
      let sessionId = this.sessionId;
      let user = null;
      if (/^p2p-/.test(sessionId)) {
        user = sessionId.replace(/^p2p-/, "");
        if (this.robotInfos[user]) {
          return true;
        }
      }
      return false;
    },
    teamInvalid() {
      if (this.scene === "team") {
        return !(this.teamInfo && this.teamInfo.validToCurrentUser);
      }
      return false;
    },
    muteInTeam() {
      if (this.scene !== "team") return false;
      var teamMembers = this.$store.state.teamMembers;
      var Members = teamMembers && teamMembers[this.teamInfo.teamId];
      var selfInTeam =
        Members &&
        Members.find(item => {
          return item.account === this.$store.state.userUID;
        });
      return (selfInTeam && selfInTeam.mute) || false;
    },
    sendInvalidHint() {
      if (this.scene === "team" && this.teamInvalid) {
        return `您已不在该${
          this.teamInfo && this.teamInfo.type === "normal" ? "讨论组" : "群"
        }，不能发送消息`;
      } else if (this.muteInTeam) {
        return "您已被禁言";
      }
      return "无权限发送消息";
    },
  }
};
</script>
<style lang='less' scoped>
.chat-item {
  width: 100%;
  height: 100%;
  background: #F6F6F6;
  position: relative;
  .chat-box {
    height: 100%;
    width:100%;
    .chat-edit {
      // position: absolute;
      width: 100%;
      height: 20%;
      // left: 25%; // 群组列表的宽度
      // width: 55%; // 当前列表的宽度
      box-sizing: border-box;
    }
    .chat-list {
      width:100%;
      height:80%;
      box-sizing: border-box;
      // left: 25%; // 群组列表的宽度
      // width: 55%; // 当前列表的宽度
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
  .inviteTeamVoice {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
  }
}
</style>
