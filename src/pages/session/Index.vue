<template>
  <div class='sayabc-session'>
    <div class='content'>
       <div class='session'>
          <div class="session-list">
            <session-list />
          </div>
          <div class='chat'>
            <!-- 要显示聊天界面要有sessionId  通过store传递 -->
            <chat v-if='sessionId'/>
          </div>
          <div class='team-info'>
            <!-- 显示群成员信息 -->
            <team-info />
          </div>
       </div>
    </div>
    <!-- 一些全局蒙层模块 begin -->
    <!-- 需要将各个部分拆分成组件 全屏需要更新 showMask 字段 -->
    <div class="sayabc-mask" v-if="showMask">
      <!-- TODO这部分将会放在 SelectMemers.vue -->
    </div>
    <!-- 一些全局蒙层模块 end -->
  </div>
</template>

<script>
import SessionList from "./sessionList/Index.vue"
import Chat from "./chat/Index.vue"
import TeamInfo from "./teamInfo/Index.vue"

import cookie from "@/utils/cookie"
import md5 from "@/utils/md5"

export default {
  components: {
    SessionList,
    Chat,
    TeamInfo
  },
  computed: {
    sessionId() {
      return this.$store.state.currSessionId;
    }
  },
};
</script>

<style lang='less' scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
.sayabc-session{
    width:100%;
    height:100%;
    overflow: hidden;
    .content {
      width:100%;
      height:100%;
      position: relative;
      .header{
        height:40px;
      }
      .session {
        position: absolute;
        top: 0;
        bottom:0;
        left:0;
        right:0;
        display: -webkit-flex; /* Safari */
        display: flex;
        // align-content: stretch;
        .session-list, .chat, .team-info {
          box-sizing: border-box
        }
        .session-list {
          width:350px;
          flex-basis:350px;
          flex-grow: 0;
          flex-shrink: 1;
          border-right:1px solid #ccc;
        }
        .team-info {
          border-left:1px solid #ccc;
          width:250px;
          flex-basis:250px;
          flex-grow: 0;
          flex-shrink: 1;
        }
        .chat {
          width:300px;
          flex-basis: 300px;
          flex-grow: 1;
          flex-shrink: 0;
        }
      }
    }
    .login {
      position: absolute;
      top: 0;
      width: 100%;
      height: 80px;
      line-height: 80px;
      z-index: 999;
      border: 1px solid yellow;
      text-align: center;
      background: rgba(0, 0, 0, 1)
    }
    .sayabc-mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, .4);
      // .mask-item { // 通用mask子元素
      //   width: 700px;
      //   height: 500px;
      //   background: #fff;
      //   border: 1px solid gray;
      //   border-radius: 6px;
      //   position: absolute;
      //   left: 50%;
      //   top: 50%;
      //   transform: translate(-50%, -50%);
      //   padding: 10px;
      //   .item-header {
      //     height: 30px;
      //     line-height: 30px;
      //     padding: 10px;
      //     border-bottom: 1px solid red;
      //   }
      //   .invite-list-main {
      //     border-bottom: 1px solid red;
      //     overflow: hidden;
      //     span {
      //       display: inline-block;
      //       padding: 4px 6px;
      //       border: 1px solid red;
      //       margin-right: 20px;
      //       margin-top: 10px;
      //     }
      //     .members-list {
      //       width: 70%;
      //       height: 400px;
      //       border-right: 1px solid red;
      //       box-sizing: border-box;
      //     }
      //   }
      //   .item-btns {
      //     text-align: center;
      //     height: 30px;
      //     line-height: 30px;
      //     padding-top: 10px;
      //     span {
      //       display: inline-block;
      //       margin-right: 20px;
      //       border: 1px solid gray;
      //       border-radius: 6px;
      //       padding: 4px 18px;
      //       cursor: pointer;
      //     }
      //   }
      // }
    }
}
</style>