<template>
  <div class="header">
    <span class="session-name">{{sessionName}}</span>
    <span
      class="check-member"
      @click="checkInfo"
    >{{isCheckMember?'关闭查看':'查看成员'}}</span>
    <span>
     <button @click='followUp(1)' class="follow-up-btn" v-show='!followList[sessionId]'>跟进</button>
     <button @click='followUp(0)' :disabled='followStaff != myInfo.account' :class='[{"disabled":followStaff != myInfo.account},"follow-up-btn"]' v-show='followList[sessionId] === 1'>完成</button>
    </span>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import util from '@/utils';
import { setTimeout } from 'timers';
import {follow} from  '@/api/index.js';

export default {
  computed: {
    ...mapGetters(["sessionId", "teamInfo"]),
    ...mapState(["isCheckMember","userInfos","followList","followStaff",'myInfo']),
    sessionName() {
      let sessionId = this.sessionId;
      let user = null;
      if (/^p2p-/.test(sessionId)) {
        user = sessionId.replace(/^p2p-/, "");
        if (user === this.$store.state.userUID) {
          return "我的手机";
        } else if (this.isRobot) {
          return this.robotInfos[user].nick;
        } else {
          let userInfo = this.userInfos[user] || {};
          return util.getFriendAlias(userInfo);
        }
      } else if (/^team-/.test(sessionId)) {
        return this.teamInfo && this.teamInfo.owner || "";
      }
    }
  },
  methods: {
    checkInfo() {
      this.$store.commit("isCheckMember", !this.isCheckMember);
    },
    followUp(status) {
      let data = {};
      data.followStatus = status;
      data.groupId = this.teamInfo.teamId;
      follow(data)
      .then((res) => {
        if(res.code === '200') {
          //修改成功了
          this.followList[this.sessionId] = status;
          this.$store.commit('followStatus', this.followList);
        }else {
          console.log(e.message,'跟进失败')
        }
      }).catch((e) => {
        console.log(e.message||e,'跟进报错')
      })
    }
  },
  mounted(){
    console.log(this.myInfo,'myInfo is :')
  }
};
</script>
<style lang='less' scoped>
.header {
    padding:0 5px;
    user-select: none;
    .follow-up-btn,.check-member{
       float:right;
    }
    .session-name {
        color:#fff;
        font-weight: 500;
    }
    .follow-up-btn {
        width:60px;
        height:30px;
        border-radius: 5px;
        margin-top:5px;
        margin-right:10px;
        &.disabled {
          color:#ccc;
        }
    }
    .check-member {
        color:#fff;
        font-size:14px;
    }
}
</style>


