<template>
  <div class='management-header'>
    <div class='session-header'>
        <session-header />
    </div>
    <div class='chat-header'>
        <chat-header />
    </div>
    <div class='members-header'>
        <management-header />
    </div>
  </div>
</template>
<script>
import ChatHeader from './ChatHeader.vue';
import SessionHeader from './SessionHeader.vue';
import ManagementHeader from './ManagementHeader.vue'
export default {
  components:{
    ChatHeader,
    SessionHeader,
    ManagementHeader
  }
};
</script>
<style lang='less' scoped>
.management-header {
  height: 40px;
  line-height: 40px;
  background: #39b5ff;
  display: -webkit-flex; /* Safari */
  display: flex;
  // align-content: stretch;
  .session-header,.chat-header,.members-header{
    box-sizing: border-box;
  }
  .session-header {
    flex-grow: 0;
    flex-shrink: 1;
    width:350px;
    flex-basis: 350px;
    border-right: 1px solid #ccc;
  }
  .members-header {
    border-left: 1px solid #ccc;
    width:250px;
    flex-basis: 250px;
    flex-grow: 0;
    flex-shrink: 1;
  }
  .chat-header {
    width:300px;
    flex-basis: 300px;
    flex-grow: 1;
    flex-shrink: 0;
  }
}
</style>


