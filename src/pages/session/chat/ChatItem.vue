<template>
  <li
    class="u-msg"
    :class="{
      'item-me': msg.flow==='out',
      'item-you': msg.flow==='in',
      'item-time': msg.type==='timeTag',
      'item-tip': msg.type==='tip'
    }"
  >
   <div class='msg-item'>
     <div class='msg-time' v-if='msg.type==="timeTag"'>
       <span>{{msg.text}}</span>
     </div>
     <!-- 消息为文本为系统通知类的消息  在 @utils/index.js进行粗糙处理: 系统下群相关操作设置为空  Utils.generateTeamSysmMsg -->
     <div v-else-if="msg.type==='text' && msg.showText!==''">
       <!-- 头像 -->
      <div v-if='msg.avatar' class='msg-avatar'>
          <img :src="msg.avatar" alt="用户头像">
      </div>
      <!-- 信息 -->
      <div class='msg-content'>
          <!--用户名  -->
          <div class='user-name'>{{msg.formNick||msg.from}}</div>
          <!-- 消息 -->
          <div class='msg-box'>
            <div class='arrow'></div>
            <span v-if="msg.type==='text'" class="msg-text" v-html="msg.showText"></span>
            <span v-else-if="msg.type==='image'" class="msg-text" ref="mediaMsg" @click.stop="showFullImg(msg.originLink)"></span>
            <span v-else-if="msg.type==='video'" class="msg-text" ref="mediaMsg"></span>
            <span
              v-else-if="msg.type==='audio'"
              class="msg-text"
              @click="playAudio(msg.audioSrc)"
            >{{msg.showText}}</span>
            <span
              v-else-if="msg.type==='file'"
              class="msg-text"
            ><a
                :href="msg.fileLink"
                target="_blank"
              ><i class="u-icon icon-file"></i>{{msg.showText}}</a></span>
            <span
              v-else-if="msg.type==='robot'"
              class="msg-text"
              :class="{'msg-robot': msg.robotFlow!=='out' && !isRobot}"
            >
              <div v-if="msg.robotFlow==='out'">{{msg.showText}}</div>
              <div v-else-if="msg.subType==='bot'">
                <!-- 多次下发的机器人消息 -->
                <div v-for="tmsgs in msg.message">
                  <!-- 多个机器人模板 -->
                  <div v-for="tmsg in tmsgs">
                    <div v-if="tmsg.type==='text'">
                      <p>{{tmsg.text}}</p>
                    </div>
                    <div v-else-if="tmsg.type==='image'">
                      <p>
                        <img :src="tmsg.url">
                      </p>
                    </div>
                    <div v-else-if="tmsg.type==='url'">
                      <a
                        :class="tmsg.style"
                        :href="tmsg.target"
                        target="_blank"
                      >
                        <div v-if="tmsg.image">
                          <p v-for="tmsg2 in tmsg.image">
                            <img :src="tmsg2.url">
                          </p>
                        </div>
                        <div v-if="tmsg.text">
                          <p v-for="tmsg2 in tmsg.text">{{tmsg2.text}}</p>
                        </div>
                      </a>
                    </div>
                    <div v-else-if="tmsg.type==='block'">
                      <a
                        :class="tmsg.style"
                        :params="tmsg.params"
                        :target="tmsg.target"
                        @click="sendRobotBlockMsg(tmsg, msg)"
                      >
                        <div v-if="tmsg.image">
                          <p v-for="tmsg2 in tmsg.image">
                            <img :src="tmsg2.url">
                          </p>
                        </div>
                        <div v-if="tmsg.text">
                          <p v-for="tmsg2 in tmsg.text">{{tmsg2.text}}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else-if="msg.subType==='faq'">
                <!--p>{{msg.message.question}}</p-->
                <p>{{msg.message.answer}}</p>
              </div>
              <span
                v-if="msg.robotFlow!=='out' && !isRobot"
                class="msg-link"
              >
                <a
                  class="link-right"
                  @click="continueRobotMsg(msg.content.robotAccid)"
                >继续对话</a>
              </span>
            </span>
            <span
              v-else-if="msg.type==='notification'"
              class="msg-text notify"
            >{{msg.showText}}</span>
            <span
              v-else
              class="msg-text"
              v-html="msg.showText"
            ></span>
            <span
              v-if="msg.status==='fail'"
              class="msg-failed"
            ><i class="weui-icon-warn"></i></span>
            <!-- <div class='msg' v-if='msg.type==="text"'>
              {{msg.text}}
            </div>
            <div class='msg' v-else-if='msg.type="image"'>
              <a :href="msg.originLink" target="_blank">
                <img :src="msg.originLink || msg.imgUrl" alt="图片">
              </a>
            </div> -->
          </div>
      </div>
     </div>
   </div>
  </li>
</template>
<script>
import util from "@/utils";
import emojiObj from "@/configs/emoji";
import config from "@/configs";
import {mapState} from 'vuex';
export default {
  props: {
    rawMsg: {
      type: Object,
      default() {
        return {};
      }
    },
    myInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    isRobot: {
      type: Boolean,
      default() {
        return false;
      }
    },
    userInfos: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    ...mapState(['robotInfos'])
  },
  data() {
    return {
      isFullImgShow: false,
      currentAudio: null
    };
  },
  beforeMount() {
    let item = Object.assign({}, this.rawMsg);
    // 标记用户，区分聊天室、普通消息
    if (item.flow === "in") {
      if (item.type === "robot" && item.content && item.content.msgOut) {
        // 机器人下行消息
        let robotAccid = item.content.robotAccid;
        item.avatar = this.robotInfos[robotAccid].avatar;
        item.isRobot = true;
        item.link = `#/namecard/${robotAccid}`;
      } else if (item.from !== this.$store.state.userUID) {
        item.avatar =
          (this.userInfos[item.from] && this.userInfos[item.from].avatar) ||
          config.defaultUserIcon;
        item.link = `#/namecard/${item.from}`;
        //todo  如果是未加好友的人发了消息，是否能看到名片
      } else {
        item.avatar = this.myInfo.avatar;
      }
    } else if (item.flow === "out") {
      item.avatar = this.myInfo.avatar;
    }

    if (item.type === "timeTag") {
      // 标记发送的时间
      item.showText = item.text;
    } else if (item.type === "text") {
      // 文本消息
      item.showText = util.escape(item.text);
      if (/\[[^\]]+\]/.test(item.showText)) {
        let emojiItems = item.showText.match(/\[[^\]]+\]/g);
        emojiItems.forEach(text => {
          let emojiCnt = emojiObj.emojiList.emoji;
          if (emojiCnt[text]) {
            item.showText = item.showText.replace(
              text,
              `<img class="emoji-small" src="${emojiCnt[text].img}">`
            );
          }
        });
      }
    } else if (item.type === "custom") {
      let content = JSON.parse(item.content);
      // type 1 为猜拳消息
      if (content.type === 1) {
        let data = content.data;
        let resourceUrl = config.resourceUrl;
        // item.showText = `<img class="emoji-middle" src="${resourceUrl}/im/play-${data.value}.png">`
        item.type = "custom-type1";
        item.imgUrl = `${resourceUrl}/im/play-${data.value}.png`;
        // type 3 为贴图表情
      } else if (content.type === 3) {
        let data = content.data;
        let emojiCnt = "";
        if (emojiObj.pinupList[data.catalog]) {
          emojiCnt = emojiObj.pinupList[data.catalog][data.chartlet];
          // item.showText = `<img class="emoji-big" src="${emojiCnt.img}">`
          item.type = "custom-type3";
          item.imgUrl = `${emojiCnt.img}`;
        }
        // content.type === 6 为群组语音消息通知
      } else {
        item.showText = util.parseCustomMsg(item);
        if (item.showText !== "[自定义消息]") {
          item.showText += ",请到手机或电脑客户端查看";
        }
      }
    } else if (item.type === "image") {
      // 原始图片全屏显示
      item.originLink = item.file.url;
    } else if (item.type === "video") {
      // ...
    } else if (item.type === "audio") {
      item.audioSrc = item.file.mp3Url;
      item.showText = Math.round(item.file.dur / 1000) + '" 点击播放';
    } else if (item.type === "file") {
      item.fileLink = item.file.url;
      item.showText = item.file.name;
    } else if (item.type === "notification") {
      if (item.scene === "team") {
        item.showText = util.generateTeamSysmMsg(item);
      } else {
        //对于系统通知，更新下用户信息的状态
        item.showText = util.generateChatroomSysMsg(item);
      }
    } else if (item.type === "tip") {
      //对于系统通知，更新下用户信息的状态
      item.showText = item.tip;
    } else if (item.type === "robot") {
      let content = item.content || {};
      let message = content.message || [];
      if (!content.msgOut) {
        // 机器人上行消息
        item.robotFlow = "out";
        item.showText = item.text;
      } else if (content.flag === "bot") {
        item.subType = "bot";
        message = message.map(item => {
          if (item.type === "template") {
            // 在vuex(store/actions/msgs.js)中已调用sdk方法做了转换
            return item.content.json;
          } else if (item.type === "text" || item.type === "answer") {
            // 保持跟template结构一致
            return [
              {
                type: "text",
                text: item.content
              }
            ];
          } else if (item.type === "image") {
            // 保持跟template结构一致
            return [
              {
                type: "image",
                url: item.content
              }
            ];
          }
        });
        item.message = message;
      } else if (item.content.flag === "faq") {
        item.subType = "faq";
        item.query = message.query;
        let match = message.match.sort((a, b) => {
          // 返回最匹配的答案
          return b.score - a.score;
        });
        item.message = match[0];
      }
    } else {
      item.showText = `[${util.mapMsgType(item)}],请到手机或电脑客户端查看`;
    }
    this.msg = item;
  },
  mounted() {
    let item = this.msg;
    // 有时序问题的操作
    this.$nextTick(() => {
      let media = null;
      if (item.type === "image") {
        // 图片消息缩略图
        media = new Image();
        media.src = item.file.url + "?imageView&thumbnail=180x0&quality=85";
      } else if (item.type === "custom-type1") {
        // 猜拳消息
        media = new Image();
        media.className = "emoji-middle";
        media.src = item.imgUrl;
      } else if (item.type === "custom-type3") {
        // 贴图表情
        media = new Image();
        media.className = "emoji-big";
        media.src = item.imgUrl;
      } else if (item.type === "video") {
        if (/(mov|mp4|ogg|webm)/i.test(item.file.ext)) {
          media = document.createElement("video");
          media.src = item.file.url;
          media.width = 640;
          media.height = 480;
          media.autoStart = false;
          media.preload = "metadata";
          media.controls = "controls";
        } else {
          let aLink = document.createElement("a");
          aLink.href = item.file.url;
          aLink.target = "_blank";
          aLink.innerHTML = `<i class="u-icon icon-file"></i>${video.name}`;
          this.$refs.mediaMsg.appendChild(aLink);
        }
      }
      if (media) {
        media.style.maxWidth = '100%';
        if (this.$refs.mediaMsg) {
          this.$refs.mediaMsg.appendChild(media);
        }
        media.onload = () => {
          this.$emit("msg-loaded");
        };
        media.onerror = () => {
          this.$emit("msg-loaded");
        };
      } else {
        this.$emit("msg-loaded");
      }
    }); // end this.nextTick
  },
  methods: {
    sendRobotBlockMsg(msg, originMsg) {
      if (this.isHistory) {
        // 在历史消息中，不进行机器人交互
        return;
      }
      let body = "[复杂按钮模板触发消息]";
      if (msg.text && msg.text.length === 1) {
        body = msg.text[0].text;
      }
      let robotAccid = originMsg.content.robotAccid;
      if (!this.isRobot) {
        body = `@${this.robotInfos[robotAccid].nick} ${body}`;
      }
      this.$store.dispatch("sendRobotMsg", {
        type: "link",
        scene: originMsg.scene,
        to: originMsg.to,
        robotAccid,
        // 机器人后台消息
        params: msg.params,
        target: msg.target,
        // 显示的文本消息
        body
      });
    },
    continueRobotMsg(robotAccid) {
      this.$store.dispatch("continueRobotMsg", robotAccid);
    },
    //放大图片
    showFullImg(src) {
      window.open(src);
    },
    playAudio(src) {
      if (!this.currentAudio) {
        this.currentAudio = new Audio(src);
        this.currentAudio.play();
        this.currentAudio.onended = () => {
          this.currentAudio = null;
        };
      }
    }
  }
};
</script>
<style lang='less' scoped>
  .u-msg {
    .msg-item {
      overflow:hidden;
      padding:10px;
      .msg-time {
        text-align: center;
        span{
          padding:0 8px;
          font-size:12px;
          background:#ECECEC;
          border-radius:20px;
          color:#444D58;
        }
      }
      .msg-avatar {
        width:40px;
        height:40px;
        img{
          width:40px;
          height:40px;
          border-radius: 50%;
          overflow: hidden;
        }
      }
      .msg-content {
        margin-left:10px;
        .user-name {
          color:#C1C1C1;
          font-size:12px;
          padding-top:5px;
        }
        .msg-box {
          margin-top:10px;
          position: relative;
          .msg-text {
            display: inline-block;
            max-width: 350px;
            padding:5px 20px;
            background:#fff;
            border-radius: 20px;
            color: #444D58;
            font-weight: 600;
            font-size:16px;
            box-shadow:0px 2px 8px 0px rgba(0,0,0,0.08);
            line-height:20px;
            word-wrap: break-word; word-break: normal;
            text-align:left;
          }
          .arrow {
            width:0;
            height:0;
            border:8px solid #fff;
            border-left-color:transparent;
            border-right-color:transparent;
            border-bottom-color:transparent;
            position:absolute;
          }
        }
      }
    }
  }
 .item-me {
    .msg-avatar,.msg-content {
      float:right;
    }
    .msg-content {
      text-align: right;
      margin-right:10px;
    }
    .arrow {
      right:0;
      top:0;
    }
  }
  .item-you {
    .msg-avatar,.msg-content {
      float:left;
    }
    .arrow {
      left:0;
      top:0;
    }
  }
</style>


