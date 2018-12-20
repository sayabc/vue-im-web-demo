<template>
  <div class='session-list' id='session-list' >
    <!-- <Search /> -->
    <ul>
      <li
        v-for='session in sessionlist'
        :key="session.id"
        :id='session.id'
        class='session-item'
        @click="enterChat(session)"
        :class='{"active-item":sessionId === session.id}'
        v-if='session.scene === "team"'
      >
        <div class='follow' v-show='followList[session.id]===1'>
          <img src="../../../assets/images/follow.png" alt="">
        </div>
        <div class='msg'>
          <p class='session-name' :class='{"active":session.id === sessionId}'>
            {{session.name}}
          </p>
          <p class='last-msg' :class='{"at":session.unread !== 0 && session.isAtMe}'>{{session.unread !== 0 && session.isAtMe ? '有人@我' : session.lastMsgShow}}</p>
        </div>
        <div class='msg-tip'>
          <div class='unread'>
            <span  v-show='session.unread' :class='{"more":session.unread > 99}'>{{session.unread > 99 ? '99+' : session.unread}}</span>
          </div>
          <div class='last-msg-time'>{{session.updateTimeShow}}</div>
        </div>

      </li>
    </ul>
  </div>
</template>
<script>
import util from "@/utils"
import {mapState, mapGetters} from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'myInfo',
      'msgs',
      'userInfos',
      'teamMsgReadsDetail',
      'curChatTeamId',
      'followList'
    ]),
    ...mapGetters(['sessionId']),
    myPhoneId() {
      return `${this.$store.state.userUID}`;
    },
    sessionlist() {
      console.log(this.$store.state.sessionlist,'this.$store.state.sessionlist')
      let sessionlist = this.$store.state.sessionlist.filter(item => {
        item.name = "";
        if (item.scene === "p2p") {
          let userInfo = null;
          if (item.to !== this.myPhoneId) {
            userInfo = this.userInfos[item.to];
          } else {
            return false;
          }
          if (userInfo) {
            item.name = util.getFriendAlias(userInfo);
          }
        } else if (item.scene === "team") {
          let teamInfo = null;
          teamInfo = this.$store.state.teamlist.find(team => {
            return team.teamId === item.to;
          });
          if (teamInfo) {
            item.name = teamInfo.owner;
          } else {
            item.name = `群${item.to}`;
          }
        }
        let lastMsg = item.lastMsg || {};
        if (lastMsg.type === "text") {
          item.lastMsgShow = lastMsg.text || "";
        } else if (lastMsg.type === "custom") {
          item.lastMsgShow = util.parseCustomMsg(lastMsg);
        } else if (
          lastMsg.scene === "team" &&
          lastMsg.type === "notification"
        ) {
          item.lastMsgShow = util.generateTeamSysmMsg(lastMsg);
        } else if (util.mapMsgType(lastMsg)) {
          item.lastMsgShow = `[${util.mapMsgType(lastMsg)}]`;
        } else {
          item.lastMsgShow = "";
        }
        if (item.updateTime) {
          item.updateTimeShow = util.formatDate(item.updateTime, true);
        }
        //如果有未读消息，查找未读中是否有@我的消息，如果有，需要标识出来用作展示
        if(item.unread !== 0) {
          let {id,unread} = item;
          let msgList = this.msgs[id];
          let unreadMsg = msgList.slice(msgList.length-unread)
          unreadMsg.forEach((msg) => {
            if(msg.custom && JSON.parse(msg.custom).includes(this.myInfo.account)) {
              item.isAtMe = true;
            }
          })
        }
        return item;
      });
      return sessionlist;
    }
  },
  methods: {
    enterChat(session) {
      if (session && session.id)
        this.$store.dispatch("setCurrSession", session.id);
        this.$store.commit("isCheckMember", false);
    }
  }
};
</script>
<style lang='less' scoped>
.session-list {
  height:100%;
  overflow: auto;
  ul {
    .session-item {
      height: 80px;
      border-bottom: 1px solid #EEEEEE;
      padding:16px 70px 10px 28px;
      position: relative;
      box-sizing: border-box;
      &.active-item {
        background:#F6F6F6;
      }
      .msg {
        .session-name {
          font-size:16px;
          font-weight: 500;
          height:30px;
          line-height:30px;
        }
        .session-name.active{
          color:#03A9F4;
        }
        .last-msg {
          font-size:14px;
          color:#999;
          height:16px;
          line-height: 16px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .last-msg.at {
          color:#f00;
        }
      }
      .follow {
        position: absolute;
        left:0;
        top:0;
        height:100%;
        box-sizing: border-box;
        padding-left:5px;
        padding-top:30px;
        img{
          width:20px;
        }
      }
      .msg-tip{
        position: absolute;
        right:0;
        top:0;
        height:100%;
        padding-top:16px;
        padding-right:10px;
        box-sizing: border-box;
        font-size:14px;
        .unread {
          height:30px;
          line-height:30px;
          span{
            display: inline-block;
            padding:3px 6px;
            border-radius: 50%;
            background:#f00;
            text-align: center;
            line-height: 15px;
            color:#fff;
          }
          span.more{
            padding:3px 5px;
            border-radius: 10px;
          }
        }
      }

    }
  }
}
</style>


