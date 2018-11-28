<template>
  <div class='info'>
    <div
      class='teacher-info'
      v-show='!isCheckMember'
    >
      <div class='info-header'>
        老师信息
      </div>
    </div>
    <div
      class='team-member'
      v-show='isCheckMember'
    >
      <div class='info-header'>
        组内成员
      </div>
      <div>
        <ul>
           <li v-for='member in members'>{{member.nickInTeam||member.account}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import util from "@/utils";
export default {
  methods: {
    getMembers() {
      if(!this.teamInfo){return false} 
      var teamMembers = this.$store.state.teamMembers[this.teamInfo.teamId];
      console.log(teamMembers, "teamMembers");
      if (teamMembers === undefined) {
        this.$store.dispatch("getTeamMembers", this.teamInfo.teamId);
      }
    }
  },
  computed: {
    isCheckMember() {
      let isCheckMember = this.$store.state.isCheckMember;
      console.log(isCheckMember, "isCheckMember is :");
      if (isCheckMember) {
        //获取群成员
        this.getMembers();
      } else {
        //获取老师信息
      }
      return isCheckMember;
    },
    sessionId() {
      let sessionId =
        this.$route.params.sessionId || this.$store.state.currSessionId;
      return sessionId;
    },
    scene() {
      return this.sessionId ? util.parseSession(this.sessionId).scene : "";
    },
    teamInfo() {
      if (this.scene === "team") {
        var teamId = this.sessionId.replace("team-", "");
        return this.$store.state.teamlist.find(team => {
          return team.teamId === teamId;
        });
      }
      return undefined;
    },
    members() {
      if (this.teamInfo) {
        // return this.$store.state.teamMembers[this.teamInfo.teamId]
        var members = this.$store.state.teamMembers[this.teamInfo.teamId];
      //   var userInfos = this.$store.state.userInfos;
      //   var needSearchAccounts = [];
      //   if (members) {
      //     members = members.map(item => {
      //       var member = Object.assign({}, item); //重新创建一个对象，用于存储展示数据，避免对vuex数据源的修改
      //       member.valid = true; //被管理员移除后，标记为false
      //       if (member.account === this.$store.state.userUID) {
      //         member.alias = "我";
      //         member.avatar = this.$store.state.myInfo.avatar;
      //         this.isOwner = member.type === "owner";
      //         this.hasManagePermission = member.type !== "normal";
      //       } else if (userInfos[member.account] === undefined) {
      //         needSearchAccounts.push(member.account);
      //         member.avatar = member.avatar || this.avatar;
      //         member.alias = member.nickInTeam || member.account;
      //       } else {
      //         member.avatar = userInfos[member.account].avatar;
      //         member.alias =
      //           member.nickInTeam || userInfos[member.account].nick;
      //       }
      //       return member;
      //     });
      //     if (needSearchAccounts.length > 0 && !this.hasSearched) {
      //       this.hasSearched = true;
      //       while (needSearchAccounts.length > 0) {
      //         this.searchUsers(needSearchAccounts.splice(0, 150));
      //       }
      //     }
          return members;
        }
        return [];
      }
    }
  }
</script>
<style lang='less' scoped>
.info {
  .info-header {
    box-sizing: border-box;
    height: 40px;
    line-height:40px;
    font-size:14px;
    border-bottom: 1px solid #ccc;
  }
}
</style>


