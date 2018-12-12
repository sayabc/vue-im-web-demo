<template>
  <div class='team-info-header'>
    <span>{{isCheckMember?'组内成员':'老师信息'}}</span>
    <!-- <button @click='toggleMembers("addTeamMembers")'>加人</button> -->
    <!-- <button @click='toggleMembers("removeTeamMembers")'>删人</button> -->
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      teamMemberList: {
        add: ['libbyfei','18811111111'],
        remove: ['18811111111']
      }
    }
  },
  computed: {
    ...mapState(["isCheckMember"]),
    ...mapGetters(["teamInfo"])
  },
  // methods: {
  //   reviseTeamMembers() {
  //     if (this.teamMemberList.add.length) {
  //       this.toggleMembers("addTeamMembers");
  //     }
  //     if (this.teamMemberList.remove.length) {
  //       this.toggleMembers("removeTeamMembers");
  //     }
  //   },
  //   toggleMembers(funName) {
  //     var accounts = this.teamMemberList.remove;
  //     this.$store.dispatch("delegateTeamFunction", {
  //       functionName: funName,
  //       options: {
  //         teamId: this.teamInfo.teamId,
  //         accounts: accounts,
  //         done: (error, obj) => {
  //           if (error) {
  //             console.log(error, "移除报错");
  //             return;
  //           }
  //           console.log("移除成功", obj);
  //         }
  //       }
  //     });
  //   }
  // }
};
</script>
<style>
</style>


