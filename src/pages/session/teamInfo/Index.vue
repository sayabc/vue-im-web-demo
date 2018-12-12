<template>
  <div class='team-info-content'>
    <div v-if='sessionId'>
      <team-members v-show='isCheckMember' />
      <teacher-info v-show='!isCheckMember' />
    </div>
  </div>
</template>
<script>
import TeacherInfo from "./TeacherInfo.vue";
import TeamMembers from "./TeamMembers.vue";
import util from "@/utils";
import {mapGetters, mapState} from 'vuex';
export default {
  components: {
    TeacherInfo,
    TeamMembers
  },
  computed: {
    ...mapGetters([
      'teamInfo',
      'sessionId'
    ]),
    ...mapState([
      'showSelectMember',
      'isCheckMember'
    ]),
    scene() {
      return this.sessionId ? util.parseSession(this.sessionId).scene : "";
    } 
  }
};
</script>
<style lang='less' scoped>
.team-info-content {
  width: 100%;
  height: 100%;
}
</style>


