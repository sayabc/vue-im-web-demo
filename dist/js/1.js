webpackJsonp([1],{

/***/ 335:
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./src/pages/RoomChat.vue ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-1b9f39a8","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./RoomChat.vue */ 533)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./RoomChat.vue */ 464),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-1b9f39a8"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./RoomChat.vue */ 508),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/RoomChat.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RoomChat.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b9f39a8", Component.options)
  } else {
    hotAPI.reload("data-v-1b9f39a8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 369:
/* no static exports found */
/* exports used: default */
/*!******************************!*\
  !*** ./src/configs/emoji.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _index = __webpack_require__(/*! ./index */ 3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emojiBaseUrl = "http://yx-web.nosdn.127.net/webdoc/h5/emoji"; /* 表情原图配置文件 */


var emojiList = {
  "emoji": {
    "[大笑]": { file: "emoji_0.png" }, "[可爱]": { file: "emoji_01.png" }, "[色]": { file: "emoji_02.png" }, "[嘘]": { file: "emoji_03.png" }, "[亲]": { file: "emoji_04.png" }, "[呆]": { file: "emoji_05.png" }, "[口水]": { file: "emoji_06.png" }, "[汗]": { file: "emoji_145.png" }, "[呲牙]": { file: "emoji_07.png" }, "[鬼脸]": { file: "emoji_08.png" }, "[害羞]": { file: "emoji_09.png" }, "[偷笑]": { file: "emoji_10.png" }, "[调皮]": { file: "emoji_11.png" }, "[可怜]": { file: "emoji_12.png" }, "[敲]": { file: "emoji_13.png" }, "[惊讶]": { file: "emoji_14.png" }, "[流感]": { file: "emoji_15.png" }, "[委屈]": { file: "emoji_16.png" }, "[流泪]": { file: "emoji_17.png" }, "[嚎哭]": { file: "emoji_18.png" }, "[惊恐]": { file: "emoji_19.png" }, "[怒]": { file: "emoji_20.png" }, "[酷]": { file: "emoji_21.png" }, "[不说]": { file: "emoji_22.png" }, "[鄙视]": { file: "emoji_23.png" }, "[阿弥陀佛]": { file: "emoji_24.png" }, "[奸笑]": { file: "emoji_25.png" }, "[睡着]": { file: "emoji_26.png" }, "[口罩]": { file: "emoji_27.png" }, "[努力]": { file: "emoji_28.png" }, "[抠鼻孔]": { file: "emoji_29.png" }, "[疑问]": { file: "emoji_30.png" }, "[怒骂]": { file: "emoji_31.png" }, "[晕]": { file: "emoji_32.png" }, "[呕吐]": { file: "emoji_33.png" }, "[拜一拜]": { file: "emoji_160.png" }, "[惊喜]": { file: "emoji_161.png" }, "[流汗]": { file: "emoji_162.png" }, "[卖萌]": { file: "emoji_163.png" }, "[默契眨眼]": { file: "emoji_164.png" }, "[烧香拜佛]": { file: "emoji_165.png" }, "[晚安]": { file: "emoji_166.png" }, "[强]": { file: "emoji_34.png" }, "[弱]": { file: "emoji_35.png" }, "[OK]": { file: "emoji_36.png" }, "[拳头]": { file: "emoji_37.png" }, "[胜利]": { file: "emoji_38.png" }, "[鼓掌]": { file: "emoji_39.png" }, "[握手]": { file: "emoji_200.png" }, "[发怒]": { file: "emoji_40.png" }, "[骷髅]": { file: "emoji_41.png" }, "[便便]": { file: "emoji_42.png" }, "[火]": { file: "emoji_43.png" }, "[溜]": { file: "emoji_44.png" }, "[爱心]": { file: "emoji_45.png" }, "[心碎]": { file: "emoji_46.png" }, "[钟情]": { file: "emoji_47.png" }, "[唇]": { file: "emoji_48.png" }, "[戒指]": { file: "emoji_49.png" }, "[钻石]": { file: "emoji_50.png" }, "[太阳]": { file: "emoji_51.png" }, "[有时晴]": { file: "emoji_52.png" }, "[多云]": { file: "emoji_53.png" }, "[雷]": { file: "emoji_54.png" }, "[雨]": { file: "emoji_55.png" }, "[雪花]": { file: "emoji_56.png" }, "[爱人]": { file: "emoji_57.png" }, "[帽子]": { file: "emoji_58.png" }, "[皇冠]": { file: "emoji_59.png" }, "[篮球]": { file: "emoji_60.png" }, "[足球]": { file: "emoji_61.png" }, "[垒球]": { file: "emoji_62.png" }, "[网球]": { file: "emoji_63.png" }, "[台球]": { file: "emoji_64.png" }, "[咖啡]": { file: "emoji_65.png" }, "[啤酒]": { file: "emoji_66.png" }, "[干杯]": { file: "emoji_67.png" }, "[柠檬汁]": { file: "emoji_68.png" }, "[餐具]": { file: "emoji_69.png" }, "[汉堡]": { file: "emoji_70.png" }, "[鸡腿]": { file: "emoji_71.png" }, "[面条]": { file: "emoji_72.png" }, "[冰淇淋]": { file: "emoji_73.png" }, "[沙冰]": { file: "emoji_74.png" }, "[生日蛋糕]": { file: "emoji_75.png" }, "[蛋糕]": { file: "emoji_76.png" }, "[糖果]": { file: "emoji_77.png" }, "[葡萄]": { file: "emoji_78.png" }, "[西瓜]": { file: "emoji_79.png" }, "[光碟]": { file: "emoji_80.png" }, "[手机]": { file: "emoji_81.png" }, "[电话]": { file: "emoji_82.png" }, "[电视]": { file: "emoji_83.png" }, "[声音开启]": { file: "emoji_84.png" }, "[声音关闭]": { file: "emoji_85.png" }, "[铃铛]": { file: "emoji_86.png" }, "[锁头]": { file: "emoji_87.png" }, "[放大镜]": { file: "emoji_88.png" }, "[灯泡]": { file: "emoji_89.png" }, "[锤头]": { file: "emoji_90.png" }, "[烟]": { file: "emoji_91.png" }, "[炸弹]": { file: "emoji_92.png" }, "[枪]": { file: "emoji_93.png" }, "[刀]": { file: "emoji_94.png" }, "[药]": { file: "emoji_95.png" }, "[打针]": { file: "emoji_96.png" }, "[钱袋]": { file: "emoji_97.png" }, "[钞票]": { file: "emoji_98.png" }, "[银行卡]": { file: "emoji_99.png" }, "[手柄]": { file: "emoji_100.png" }, "[麻将]": { file: "emoji_101.png" }, "[调色板]": { file: "emoji_102.png" }, "[电影]": { file: "emoji_103.png" }, "[麦克风]": { file: "emoji_104.png" }, "[耳机]": { file: "emoji_105.png" }, "[音乐]": { file: "emoji_106.png" }, "[吉他]": { file: "emoji_107.png" }, "[火箭]": { file: "emoji_108.png" }, "[飞机]": { file: "emoji_109.png" }, "[火车]": { file: "emoji_110.png" }, "[公交]": { file: "emoji_111.png" }, "[轿车]": { file: "emoji_112.png" }, "[出租车]": { file: "emoji_113.png" }, "[警车]": { file: "emoji_114.png" }, "[自行车]": { file: "emoji_115.png" }
  }
};

for (var emoji in emojiList) {
  var emojiItem = emojiList[emoji];
  for (var key in emojiItem) {
    var item = emojiItem[key];
    item.img = emojiBaseUrl + "/" + emoji + "/" + item.file;
  }
}

var pinupList = {
  'ajmd': {},
  'xxy': {},
  'lt': {}
};

for (var i = 1; i <= 48; i++) {
  var _key = 'ajmd0' + (i >= 10 ? i : '0' + i);
  pinupList['ajmd'][_key] = { file: _key + '.png' };
}
for (var _i = 1; _i <= 40; _i++) {
  var _key2 = 'xxy0' + (_i >= 10 ? _i : '0' + _i);
  pinupList['xxy'][_key2] = { file: _key2 + '.png' };
}
for (var _i2 = 1; _i2 <= 20; _i2++) {
  var _key3 = 'lt0' + (_i2 >= 10 ? _i2 : '0' + _i2);
  pinupList['lt'][_key3] = { file: _key3 + '.png' };
}

for (var _emoji in pinupList) {
  var _emojiItem = pinupList[_emoji];
  for (var _key4 in _emojiItem) {
    var _item = _emojiItem[_key4];
    _item.img = emojiBaseUrl + "/" + _emoji + "/" + _item.file;
  }
}

exports.default = {
  emojiList: emojiList,
  pinupList: pinupList
};
module.exports = exports["default"];

/***/ }),

/***/ 371:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/ChatItem.vue ***!
  \*******************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(/*! ../../utils */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs__ = __webpack_require__(/*! ../../configs */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__configs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_emoji__ = __webpack_require__(/*! ../../configs/emoji */ 369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_emoji___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__configs_emoji__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    type: String, // 类型，chatroom, session
    rawMsg: {
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
    isHistory: {
      type: Boolean,
      default() {
        return false;
      }
    }
    // robotInfos: {
    //   type: Object,
    //   default () {
    //     return {}
    //   }
    // }
  },
  data() {
    return {
      msg: '',
      isFullImgShow: false,
      currentAudio: null
    };
  },
  computed: {
    robotInfos() {
      return this.$store.state.robotInfos;
    },
    teamMsgUnRead() {
      var obj = !this.isHistory && this.msg.needMsgReceipt && this.msg.flow === 'out' && this.$store.state.teamMsgReads.find(item => item.idServer === this.msg.idServer);

      return obj ? parseInt(obj.unread) : -1;
    }
  },
  beforeMount() {
    let item = Object.assign({}, this.rawMsg);
    // 标记用户，区分聊天室、普通消息
    if (this.type === 'session') {

      if (item.flow === 'in') {
        if (item.type === 'robot' && item.content && item.content.msgOut) {
          // 机器人下行消息
          let robotAccid = item.content.robotAccid;
          item.avatar = this.robotInfos[robotAccid].avatar;
          item.isRobot = true;
          item.link = `#/namecard/${robotAccid}`;
        } else if (item.from !== this.$store.state.userUID) {
          item.avatar = this.userInfos[item.from] && this.userInfos[item.from].avatar || __WEBPACK_IMPORTED_MODULE_1__configs___default.a.defaultUserIcon;
          item.link = `#/namecard/${item.from}`;
          //todo  如果是未加好友的人发了消息，是否能看到名片
        } else {
          item.avatar = this.myInfo.avatar;
        }
      } else if (item.flow === 'out') {
        item.avatar = this.myInfo.avatar;
      }
    } else {
      // 标记时间，聊天室中
      item.showTime = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.formatDate(item.time);
    }
    if (item.type === 'timeTag') {
      // 标记发送的时间
      item.showText = item.text;
    } else if (item.type === 'text') {
      // 文本消息
      item.showText = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.escape(item.text);
      if (/\[[^\]]+\]/.test(item.showText)) {
        let emojiItems = item.showText.match(/\[[^\]]+\]/g);
        emojiItems.forEach(text => {
          let emojiCnt = __WEBPACK_IMPORTED_MODULE_2__configs_emoji___default.a.emojiList.emoji;
          if (emojiCnt[text]) {
            item.showText = item.showText.replace(text, `<img class="emoji-small" src="${emojiCnt[text].img}">`);
          }
        });
      }
    } else if (item.type === 'custom') {
      let content = JSON.parse(item.content);
      // type 1 为猜拳消息
      if (content.type === 1) {
        let data = content.data;
        let resourceUrl = __WEBPACK_IMPORTED_MODULE_1__configs___default.a.resourceUrl;
        // item.showText = `<img class="emoji-middle" src="${resourceUrl}/im/play-${data.value}.png">`
        item.type = 'custom-type1';
        item.imgUrl = `${resourceUrl}/im/play-${data.value}.png`;
        // type 3 为贴图表情
      } else if (content.type === 3) {
        let data = content.data;
        let emojiCnt = '';
        if (__WEBPACK_IMPORTED_MODULE_2__configs_emoji___default.a.pinupList[data.catalog]) {
          emojiCnt = __WEBPACK_IMPORTED_MODULE_2__configs_emoji___default.a.pinupList[data.catalog][data.chartlet];
          // item.showText = `<img class="emoji-big" src="${emojiCnt.img}">`
          item.type = 'custom-type3';
          item.imgUrl = `${emojiCnt.img}`;
        }
      } else {
        item.showText = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.parseCustomMsg(item);
        if (item.showText !== '[自定义消息]') {
          item.showText += ',请到手机或电脑客户端查看';
        }
      }
    } else if (item.type === 'image') {
      // 原始图片全屏显示
      item.originLink = item.file.url;
    } else if (item.type === 'video') {
      // ...
    } else if (item.type === 'audio') {
      item.audioSrc = item.file.mp3Url;
      item.showText = Math.round(item.file.dur / 1000) + '" 点击播放';
    } else if (item.type === 'file') {
      item.fileLink = item.file.url;
      item.showText = item.file.name;
    } else if (item.type === 'notification') {
      if (item.scene === 'team') {
        item.showText = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.generateTeamSysmMsg(item);
      } else {
        //对于系统通知，更新下用户信息的状态
        item.showText = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.generateChatroomSysMsg(item);
      }
    } else if (item.type === 'tip') {
      //对于系统通知，更新下用户信息的状态
      item.showText = item.tip;
    } else if (item.type === 'robot') {
      let content = item.content || {};
      let message = content.message || [];
      if (!content.msgOut) {
        // 机器人上行消息
        item.robotFlow = 'out';
        item.showText = item.text;
      } else if (content.flag === 'bot') {
        item.subType = 'bot';
        message = message.map(item => {
          if (item.type === 'template') {
            // 在vuex(store/actions/msgs.js)中已调用sdk方法做了转换
            return item.content.json;
          } else if (item.type === 'text' || item.type === 'answer') {
            // 保持跟template结构一致
            return [{
              type: 'text',
              text: item.content
            }];
          } else if (item.type === 'image') {
            // 保持跟template结构一致
            return [{
              type: 'image',
              url: item.content
            }];
          }
        });
        item.message = message;
      } else if (item.content.flag === 'faq') {
        item.subType = 'faq';
        item.query = message.query;
        let match = message.match.sort((a, b) => {
          // 返回最匹配的答案
          return b.score - a.score;
        });
        item.message = match[0];
      }
    } else {
      item.showText = `[${__WEBPACK_IMPORTED_MODULE_0__utils___default.a.mapMsgType(item)}],请到手机或电脑客户端查看`;
    }
    this.msg = item;
  },
  mounted() {
    let item = this.msg;
    // 有时序问题的操作
    this.$nextTick(() => {
      let media = null;
      if (item.type === 'image') {
        // 图片消息缩略图
        media = new Image();
        media.src = item.file.url + '?imageView&thumbnail=180x0&quality=85';
      } else if (item.type === 'custom-type1') {
        // 猜拳消息
        media = new Image();
        media.className = 'emoji-middle';
        media.src = item.imgUrl;
      } else if (item.type === 'custom-type3') {
        // 贴图表情
        media = new Image();
        media.className = 'emoji-big';
        media.src = item.imgUrl;
      } else if (item.type === 'video') {
        if (/(mov|mp4|ogg|webm)/i.test(item.file.ext)) {
          media = document.createElement('video');
          media.src = item.file.url;
          media.width = 640;
          media.height = 480;
          media.autoStart = false;
          media.preload = 'metadata';
          media.controls = 'controls';
        } else {
          let aLink = document.createElement('a');
          aLink.href = item.file.url;
          aLink.target = '_blank';
          aLink.innerHTML = `<i class="u-icon icon-file"></i>${video.name}`;
          this.$refs.mediaMsg.appendChild(aLink);
        }
      }
      if (media) {
        if (this.$refs.mediaMsg) {
          this.$refs.mediaMsg.appendChild(media);
        }
        media.onload = () => {
          this.$emit('msg-loaded');
        };
        media.onerror = () => {
          this.$emit('msg-loaded');
        };
      } else {
        this.$emit('msg-loaded');
      }
    }); // end this.nextTick
  },
  methods: {
    revocateMsg(vNode) {
      // 在会话聊天页
      if (this.$store.state.currSessionId) {
        if (vNode && vNode.data && vNode.data.attrs) {
          let attrs = vNode.data.attrs;
          if (attrs.type === 'robot') {
            return;
          }
          // 自己发的消息
          if (attrs.flow === 'out') {
            let that = this;
            this.$vux.confirm.show({
              title: '确定需要撤回消息',
              onCancel() {},
              onConfirm() {
                that.$store.dispatch('revocateMsg', {
                  idClient: attrs.idClient
                });
              }
            });
          }
        }
      }
    },
    sendRobotBlockMsg(msg, originMsg) {
      if (this.isHistory) {
        // 在历史消息中，不进行机器人交互
        return;
      }
      let body = '[复杂按钮模板触发消息]';
      if (msg.text && msg.text.length === 1) {
        body = msg.text[0].text;
      }
      let robotAccid = originMsg.content.robotAccid;
      if (!this.isRobot) {
        body = `@${this.robotInfos[robotAccid].nick} ${body}`;
      }
      if (this.type === 'session') {
        this.$store.dispatch('sendRobotMsg', {
          type: 'link',
          scene: originMsg.scene,
          to: originMsg.to,
          robotAccid,
          // 机器人后台消息
          params: msg.params,
          target: msg.target,
          // 显示的文本消息
          body
        });
      } else if (this.type === 'chatroom') {
        this.$store.dispatch('sendChatroomRobotMsg', {
          type: 'link',
          robotAccid,
          // 机器人后台消息
          params: msg.params,
          target: msg.target,
          // 显示的文本消息
          body
        });
      }
    },
    continueRobotMsg(robotAccid) {
      this.$store.dispatch('continueRobotMsg', robotAccid);
    },
    showFullImg(src) {
      this.$store.dispatch('showFullscreenImg', {
        src
      });
    },
    playAudio(src) {
      if (!this.currentAudio) {
        this.currentAudio = new Audio(src);
        this.currentAudio.play();
        this.currentAudio.onended = () => {
          this.currentAudio = null;
        };
      }
    },
    toMsgUnReadDetail() {
      this.href = '#/msgReceiptDetail/' + this.msg.idServer;
    }
  }
});

/***/ }),

/***/ 372:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/ChatList.vue ***!
  \*******************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(/*! ../../utils */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs__ = __webpack_require__(/*! ../../configs */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__configs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_emoji__ = __webpack_require__(/*! ../../configs/emoji */ 369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_emoji___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__configs_emoji__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ChatItem__ = __webpack_require__(/*! ./ChatItem */ 383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ChatItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ChatItem__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChatItem: __WEBPACK_IMPORTED_MODULE_3__ChatItem___default.a
  },
  props: {
    type: String, // 类型，chatroom, session
    canLoadMore: [String, Boolean],
    isRobot: {
      type: Boolean,
      default() {
        return false;
      }
    },
    msglist: {
      type: Array,
      default() {
        return [];
      }
    },
    userInfos: {
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
    isHistory: {
      type: Boolean,
      default() {
        return false;
      }
    }
    // robotInfos: {
    //   type: Object,
    //   default () {
    //     return {}
    //   }
    // }
  },
  data() {
    return {
      isFullImgShow: false,
      msgLoadedTimer: null
    };
  },
  methods: {
    showFullImg(src) {
      this.$store.dispatch('showFullscreenImg', {
        src
      });
    },
    msgLoaded() {
      clearTimeout(this.msgLoadedTimer);
      this.msgLoadedTimer = setTimeout(() => {
        this.$emit('msgs-loaded');
      }, 20);
    }
  }
});

/***/ }),

/***/ 374:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-03085c5f","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatItem.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.p-chat-history .u-msg .msg-link[data-v-03085c5f] {\n  display: none;\n}\n.p-room-chat-list .u-msg .msg-text[data-v-03085c5f] {\n  max-width: 80%;\n}\n.p-room-chat-list .u-msg .msg-link[data-v-03085c5f] {\n  bottom: 0;\n  right: -4rem;\n  font-size: 0.9rem;\n}\n.msg-unread[data-v-03085c5f] {\n  position: relative;\n  float: right;\n  top: 0.3rem;\n  right: 0.5rem;\n  font-size: 0.9rem;\n  color: #0091e4;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/components/ChatItem.vue"],"names":[],"mappings":";AAyaI;EACE,cAAc;CACf;AAKD;EACE,eAAe;CAChB;AACD;EACE,UAAU;EACV,aAAa;EACb,kBAAkB;CACnB;AAIL;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,eAAe;CAChB","file":"ChatItem.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-chat-history {\n  .u-msg {\n    .msg-link {\n      display: none;\n    }\n  }\n}\n.p-room-chat-list {\n  .u-msg {\n    .msg-text {\n      max-width: 80%;\n    }\n    .msg-link {\n      bottom: 0;\n      right: -4rem;\n      font-size: 0.9rem;\n    }\n  }\n}\n\n.msg-unread {\n  position: relative;\n  float: right;\n  top: 0.3rem;\n  right: 0.5rem;\n  font-size: 0.9rem;\n  color: #0091e4;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 376:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-0d0dd46a","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatList.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.p-chat-list .u-icon {\n    width: 1.4rem;\n    height: 1.6rem;\n    margin-right: 0.2rem;\n    vertical-align: bottom;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/components/ChatList.vue"],"names":[],"mappings":";AA+FE;IACE,cAAc;IACd,eAAe;IACf,qBAAqB;IACrB,uBAAuB;CACxB","file":"ChatList.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-chat-list {\n  .u-icon {\n    width: 1.4rem;\n    height: 1.6rem;\n    margin-right: 0.2rem;\n    vertical-align: bottom;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 377:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-03085c5f"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/ChatItem.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "u-msg",
    class: {
      'item-me': _vm.msg.flow === 'out',
        'item-you': _vm.msg.flow === 'in',
        'item-time': _vm.msg.type === 'timeTag',
        'item-tip': _vm.msg.type === 'tip',
        'session-chat': _vm.type === 'session'
    }
  }, [(_vm.msg.type === 'timeTag') ? _c('div', [_vm._v("---- " + _vm._s(_vm.msg.showText) + " ----")]) : (_vm.msg.type === 'tip') ? _c('div', {
    staticClass: "tip"
  }, [_vm._v(_vm._s(_vm.msg.showText))]) : (_vm.msg.type === 'notification' && _vm.msg.scene === 'team') ? _c('div', {
    staticClass: "notification"
  }, [_vm._v(_vm._s(_vm.msg.showText))]) : (_vm.msg.flow === 'in' || _vm.msg.flow === 'out') ? _c('div', {
    directives: [{
      name: "touch",
      rawName: "v-touch:hold",
      value: (_vm.revocateMsg),
      expression: "revocateMsg",
      arg: "hold"
    }],
    attrs: {
      "idClient": _vm.msg.idClient,
      "time": _vm.msg.time,
      "flow": _vm.msg.flow,
      "type": _vm.msg.type
    }
  }, [(_vm.msg.avatar) ? _c('a', {
    staticClass: "msg-head",
    attrs: {
      "href": _vm.msg.link
    }
  }, [_c('img', {
    staticClass: "icon u-circle",
    attrs: {
      "src": _vm.msg.avatar
    }
  })]) : (_vm.msg.type !== 'notification') ? _c('p', {
    staticClass: "msg-user"
  }, [_c('em', [_vm._v(_vm._s(_vm.msg.showTime))]), _vm._v(_vm._s(_vm.msg.from))]) : _vm._e(), _vm._v(" "), (_vm.msg.type === 'text') ? _c('span', {
    staticClass: "msg-text",
    domProps: {
      "innerHTML": _vm._s(_vm.msg.showText)
    }
  }) : (_vm.msg.type === 'custom-type1') ? _c('span', {
    ref: "mediaMsg",
    staticClass: "msg-text"
  }) : (_vm.msg.type === 'custom-type3') ? _c('span', {
    ref: "mediaMsg",
    staticClass: "msg-text"
  }) : (_vm.msg.type === 'image') ? _c('span', {
    ref: "mediaMsg",
    staticClass: "msg-text",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.showFullImg(_vm.msg.originLink)
      }
    }
  }) : (_vm.msg.type === 'video') ? _c('span', {
    ref: "mediaMsg",
    staticClass: "msg-text"
  }) : (_vm.msg.type === 'audio') ? _c('span', {
    staticClass: "msg-text",
    on: {
      "click": function($event) {
        _vm.playAudio(_vm.msg.audioSrc)
      }
    }
  }, [_vm._v(_vm._s(_vm.msg.showText))]) : (_vm.msg.type === 'file') ? _c('span', {
    staticClass: "msg-text"
  }, [_c('a', {
    attrs: {
      "href": _vm.msg.fileLink,
      "target": "_blank"
    }
  }, [_c('i', {
    staticClass: "u-icon icon-file"
  }), _vm._v(_vm._s(_vm.msg.showText))])]) : (_vm.msg.type === 'robot') ? _c('span', {
    staticClass: "msg-text",
    class: {
      'msg-robot': _vm.msg.robotFlow !== 'out' && !_vm.isRobot
    }
  }, [(_vm.msg.robotFlow === 'out') ? _c('div', [_vm._v(_vm._s(_vm.msg.showText))]) : (_vm.msg.subType === 'bot') ? _c('div', _vm._l((_vm.msg.message), function(tmsgs) {
    return _c('div', _vm._l((tmsgs), function(tmsg) {
      return _c('div', [(tmsg.type === 'text') ? _c('div', [_c('p', [_vm._v(_vm._s(tmsg.text))])]) : (tmsg.type === 'image') ? _c('div', [_c('p', [_c('img', {
        attrs: {
          "src": tmsg.url
        }
      })])]) : (tmsg.type === 'url') ? _c('div', [_c('a', {
        class: tmsg.style,
        attrs: {
          "href": tmsg.target,
          "target": "_blank"
        }
      }, [(tmsg.image) ? _c('div', _vm._l((tmsg.image), function(tmsg2) {
        return _c('p', [_c('img', {
          attrs: {
            "src": tmsg2.url
          }
        })])
      })) : _vm._e(), _vm._v(" "), (tmsg.text) ? _c('div', _vm._l((tmsg.text), function(tmsg2) {
        return _c('p', [_vm._v(_vm._s(tmsg2.text))])
      })) : _vm._e()])]) : (tmsg.type === 'block') ? _c('div', [_c('a', {
        class: tmsg.style,
        attrs: {
          "params": tmsg.params,
          "target": tmsg.target
        },
        on: {
          "click": function($event) {
            _vm.sendRobotBlockMsg(tmsg, _vm.msg)
          }
        }
      }, [(tmsg.image) ? _c('div', _vm._l((tmsg.image), function(tmsg2) {
        return _c('p', [_c('img', {
          attrs: {
            "src": tmsg2.url
          }
        })])
      })) : _vm._e(), _vm._v(" "), (tmsg.text) ? _c('div', _vm._l((tmsg.text), function(tmsg2) {
        return _c('p', [_vm._v(_vm._s(tmsg2.text))])
      })) : _vm._e()])]) : _vm._e()])
    }))
  })) : (_vm.msg.subType === 'faq') ? _c('div', [_c('p', [_vm._v(_vm._s(_vm.msg.message.answer))])]) : _vm._e(), _vm._v(" "), (_vm.msg.robotFlow !== 'out' && !_vm.isRobot) ? _c('span', {
    staticClass: "msg-link"
  }, [_c('a', {
    staticClass: "link-right",
    on: {
      "click": function($event) {
        _vm.continueRobotMsg(_vm.msg.content.robotAccid)
      }
    }
  }, [_vm._v("继续对话")])]) : _vm._e()]) : (_vm.msg.type === 'notification') ? _c('span', {
    staticClass: "msg-text notify"
  }, [_vm._v(_vm._s(_vm.msg.showText))]) : _c('span', {
    staticClass: "msg-text",
    domProps: {
      "innerHTML": _vm._s(_vm.msg.showText)
    }
  }), _vm._v(" "), (_vm.msg.status === 'fail') ? _c('span', {
    staticClass: "msg-failed"
  }, [_c('i', {
    staticClass: "weui-icon-warn"
  })]) : _vm._e(), _vm._v(" "), (_vm.teamMsgUnRead >= 0) ? _c('a', {
    staticClass: "msg-unread",
    attrs: {
      "href": ("#/msgReceiptDetail/" + (_vm.msg.to) + "-" + (_vm.msg.idServer))
    }
  }, [_vm._v(_vm._s(_vm.teamMsgUnRead > 0 ? (_vm.teamMsgUnRead + "人未读") : '全部已读'))]) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-03085c5f", module.exports)
  }
}

/***/ }),

/***/ 379:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-0d0dd46a"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/ChatList.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "m-chat-list p-chat-list",
    attrs: {
      "id": "chat-list"
    }
  }, [(_vm.canLoadMore) ? _c('li', {
    staticClass: "u-msg item-time"
  }, [_vm._v("\n    ---- 上拉加载更多 ----\n  ")]) : _c('li', {
    staticClass: "u-msg item-time"
  }, [_vm._v("\n    ---- 已无更多记录 ----\n  ")]), _vm._v(" "), _vm._l((_vm.msglist), function(msg) {
    return _c('chat-item', {
      key: msg.idClient,
      attrs: {
        "type": _vm.type,
        "rawMsg": msg,
        "isRobot": _vm.isRobot,
        "userInfos": _vm.userInfos,
        "myInfo": _vm.myInfo,
        "isHistory": _vm.isHistory
      },
      on: {
        "msg-loaded": _vm.msgLoaded
      }
    })
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0d0dd46a", module.exports)
  }
}

/***/ }),

/***/ 380:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-03085c5f","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatItem.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-03085c5f","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./ChatItem.vue */ 374);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 6)("9ce8a36a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-03085c5f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatItem.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-03085c5f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatItem.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 382:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-0d0dd46a","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatList.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-0d0dd46a","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./ChatList.vue */ 376);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 6)("2bc1410a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0d0dd46a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatList.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0d0dd46a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 383:
/* no static exports found */
/* exports used: default */
/*!*******************************************!*\
  !*** ./src/pages/components/ChatItem.vue ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-03085c5f","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./ChatItem.vue */ 380)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./ChatItem.vue */ 371),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-03085c5f"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./ChatItem.vue */ 377),
  /* scopeId */
  "data-v-03085c5f",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/components/ChatItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03085c5f", Component.options)
  } else {
    hotAPI.reload("data-v-03085c5f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 384:
/* no static exports found */
/* exports used: default */
/*!*******************************************!*\
  !*** ./src/pages/components/ChatList.vue ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-0d0dd46a","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./ChatList.vue */ 382)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./ChatList.vue */ 372),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-0d0dd46a"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./ChatList.vue */ 379),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/components/ChatList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d0dd46a", Component.options)
  } else {
    hotAPI.reload("data-v-0d0dd46a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 387:
/* exports provided: default */
/* all exports used */
/*!*********************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/ChatEditor.vue ***!
  \*********************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChatEmoji__ = __webpack_require__(/*! ./ChatEmoji */ 427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChatEmoji___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ChatEmoji__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(/*! ../../utils */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs__ = __webpack_require__(/*! ../../configs */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__configs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_page__ = __webpack_require__(/*! ../../utils/page */ 37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utils_page__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChatEmoji: __WEBPACK_IMPORTED_MODULE_0__ChatEmoji___default.a
  },
  updated() {
    window.document.body.addEventListener('click', () => {
      this.isEmojiShown = false;
    });
  },
  props: {
    type: String,
    scene: String,
    to: String,
    isRobot: {
      type: Boolean,
      default() {
        return false;
      }
    },
    invalid: {
      type: Boolean,
      default: false
    },
    invalidHint: {
      type: String,
      default: '您无权限发送消息'
    },
    advancedTeam: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    continueRobotAccid(curVal, oldVal) {
      if (curVal && this.robotInfos[curVal]) {
        this.msgToSent = `@${this.robotInfos[curVal].nick} `;
      }
      // 重置
      this.$store.dispatch('continueRobotMsg', '');
    },
    msgToSent(curVal, oldVal) {
      if (this.isRobot) {
        return;
      }
      let indexAt = this.msgToSent.indexOf('@');
      if (indexAt >= 0 && indexAt === this.msgToSent.length - 1) {
        if (this.robotslist && this.robotslist.length > 0) {
          this.isRobotListShown = true;
        }
      } else if (this.isRobotListShown === true) {
        this.isRobotListShown = false;
      }
    }
  },
  data() {
    return {
      isEmojiShown: false,
      isRobotListShown: false,
      msgToSent: '',
      icon1: `${__WEBPACK_IMPORTED_MODULE_2__configs___default.a.resourceUrl}/im/chat-editor-1.png`,
      icon2: `${__WEBPACK_IMPORTED_MODULE_2__configs___default.a.resourceUrl}/im/chat-editor-2.png`,
      icon3: `${__WEBPACK_IMPORTED_MODULE_2__configs___default.a.resourceUrl}/im/chat-editor-3.png`
    };
  },
  computed: {
    continueRobotAccid() {
      return this.$store.state.continueRobotAccid;
    },
    robotslist() {
      return this.$store.state.robotslist;
    },
    robotInfos() {
      return this.$store.state.robotInfos;
    },
    robotInfosByNick() {
      return this.$store.state.robotInfosByNick;
    }
  },
  methods: {
    sendTextMsg() {
      if (this.invalid) {
        this.$toast(this.invalidHint);
        return;
      }
      if (/^\s*$/.test(this.msgToSent)) {
        this.$vux.alert.show({
          title: '请不要发送空消息'
        });
        return;
      } else if (this.msgToSent.length > 800) {
        this.$vux.alert.show({
          title: '请不要超过800个字'
        });
        return;
      }
      this.msgToSent = this.msgToSent.trim();
      if (this.type === 'session') {
        // 如果是机器人
        if (this.isRobot) {
          this.$store.dispatch('sendRobotMsg', {
            type: 'text',
            scene: this.scene,
            to: this.to,
            robotAccid: this.to,
            // 机器人后台消息
            content: this.msgToSent,
            // 显示的文本消息
            body: this.msgToSent
          });
        } else {
          let robotAccid = '';
          let robotText = '';

          let atUsers = this.msgToSent.match(/@[^\s@$]+/g);
          if (atUsers) {
            for (let i = 0; i < atUsers.length; i++) {
              let item = atUsers[i].replace('@', '');
              if (this.robotInfosByNick[item]) {
                robotAccid = this.robotInfosByNick[item].account;
                robotText = (this.msgToSent + '').replace(atUsers[i], '').trim();
                break;
              }
            }
          }
          if (robotAccid) {
            if (robotText) {
              this.$store.dispatch('sendRobotMsg', {
                type: 'text',
                scene: this.scene,
                to: this.to,
                robotAccid,
                // 机器人后台消息
                content: robotText,
                // 显示的文本消息
                body: this.msgToSent
              });
            } else {
              this.$store.dispatch('sendRobotMsg', {
                type: 'welcome',
                scene: this.scene,
                to: this.to,
                robotAccid,
                // 显示的文本消息
                body: this.msgToSent
              });
            }
          } else {
            this.$store.dispatch('sendMsg', {
              type: 'text',
              scene: this.scene,
              to: this.to,
              text: this.msgToSent
            });
          }
        }
      } else if (this.type === 'chatroom') {
        let robotAccid = '';
        let robotText = '';

        let atUsers = this.msgToSent.match(/@[^\s@$]+/g);
        if (atUsers) {
          for (let i = 0; i < atUsers.length; i++) {
            let item = atUsers[i].replace('@', '');
            if (this.robotInfosByNick[item]) {
              robotAccid = this.robotInfosByNick[item].account;
              robotText = (this.msgToSent + '').replace(atUsers[i], '').trim();
              break;
            }
          }
        }
        if (robotAccid) {
          if (robotText) {
            this.$store.dispatch('sendChatroomRobotMsg', {
              type: 'text',
              robotAccid,
              // 机器人后台消息
              content: robotText,
              // 显示的文本消息
              body: this.msgToSent
            });
          } else {
            this.$store.dispatch('sendChatroomRobotMsg', {
              type: 'welcome',
              robotAccid,
              // 显示的文本消息
              body: this.msgToSent
            });
          }
        } else {
          this.$store.dispatch('sendChatroomMsg', {
            type: 'text',
            text: this.msgToSent
          });
        }
      }
      this.msgToSent = '';
    },
    sendPlayMsg() {
      if (this.invalid) {
        this.$toast(this.invalidHint);
        return;
      }
      // 发送猜拳消息
      if (this.type === 'session') {
        this.$store.dispatch('sendMsg', {
          type: 'custom',
          scene: this.scene,
          to: this.to,
          pushContent: '[猜拳]',
          content: {
            type: 1,
            data: {
              value: Math.ceil(Math.random() * 3)
            }
          }
        });
      } else if (this.type === 'chatroom') {
        this.$store.dispatch('sendChatroomMsg', {
          type: 'custom',
          pushContent: '[猜拳]',
          content: {
            type: 1,
            data: {
              value: Math.ceil(Math.random() * 3)
            }
          }
        });
      }
    },
    sendFileMsg() {
      if (this.invalid) {
        this.$toast(this.invalidHint);
        return;
      }
      let ipt = this.$refs.fileToSent;
      if (ipt.value) {
        if (this.type === 'session') {
          this.$store.dispatch('sendFileMsg', {
            scene: this.scene,
            to: this.to,
            fileInput: ipt
          });
        } else if (this.type === 'chatroom') {
          this.$store.dispatch('sendChatroomFileMsg', {
            fileInput: ipt
          });
        }
      }
    },
    showEmoji() {
      this.isEmojiShown = true;
    },
    hideEmoji() {
      this.isEmojiShown = false;
    },
    addEmoji(emojiName) {
      this.msgToSent += emojiName;
      this.hideEmoji();
    },
    chooseRobot(robot) {
      if (robot && robot.account) {
        let len = this.msgToSent.length;
        if (len === 0 || this.msgToSent[len - 1] !== '@') {
          this.msgToSent += '@' + robot.nick + ' ';
        }{
          this.msgToSent += robot.nick + ' ';
        }
      }
    },
    hideRobotList() {
      this.isRobotListShown = false;
    },
    onInputFocus(e) {
      setTimeout(() => {
        // todo fixme 解决iOS输入框被遮挡问题，但会存在空白缝隙
        e.target.scrollIntoView();
        __WEBPACK_IMPORTED_MODULE_3__utils_page___default.a.scrollChatListDown();
      }, 200);
    },
    turnToMsgReceipt() {
      if (this.invalid) {
        this.$toast(this.invalidHint);
        return;
      }
      location = `#/teamSendMsgReceipt/${this.to}`;
    }
  }
});

/***/ }),

/***/ 388:
/* exports provided: default */
/* all exports used */
/*!********************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/ChatEmoji.vue ***!
  \********************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs_emoji__ = __webpack_require__(/*! ../../configs/emoji */ 369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs_emoji___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__configs_emoji__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



function genEmojiList(type, emojiList) {
  let result = {};
  for (let name in emojiList) {
    let emojiMap = emojiList[name];
    let list = [];
    for (let key in emojiMap) {
      list.push({
        type,
        name,
        key,
        img: emojiMap[key].img
      });
    }
    if (list.length > 0) {
      result[name] = {
        type,
        name,
        list,
        album: list[0].img
      };
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    type: String,
    scene: String,
    to: String
  },
  data() {
    return {
      currType: 'emoji',
      currAlbum: 'emoji'
    };
  },
  computed: {
    emoji() {
      return genEmojiList('emoji', __WEBPACK_IMPORTED_MODULE_0__configs_emoji___default.a.emojiList);
    },
    pinup() {
      return genEmojiList('pinup', __WEBPACK_IMPORTED_MODULE_0__configs_emoji___default.a.pinupList);
    },
    currEmoji() {
      if (this.currType === 'emoji') {
        return this.emoji[this.currAlbum];
      } else if (this.currType === 'pinup') {
        return this.pinup[this.currAlbum];
      }
      return [];
    }
  },
  methods: {
    selectAlbum(album) {
      this.currType = album.type;
      this.currAlbum = album.name;
    },
    selectEmoji(emoji) {
      if (this.currType === 'emoji') {
        // 由触发父组件事件，增加表情文案
        this.$emit('add-emoji', emoji.key);
      } else if (this.currType === 'pinup') {
        if (this.type === 'session') {
          this.$store.dispatch('sendMsg', {
            type: 'custom',
            scene: this.scene,
            to: this.to,
            pushContent: '[贴图表情]',
            content: {
              type: 3,
              data: {
                catalog: this.currAlbum,
                chartlet: emoji.key
              }
            }
          });
        } else if (this.type === 'chatroom') {
          this.$store.dispatch('sendChatroomMsg', {
            type: 'custom',
            pushContent: '[贴图表情]',
            content: {
              type: 3,
              data: {
                catalog: this.currAlbum,
                chartlet: emoji.key
              }
            }
          });
        }
        this.$emit('hide-emoji');
      }
    }
  }
});

/***/ }),

/***/ 399:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-44c7b62a","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatEmoji.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.m-chat-emoji {\n  position: absolute;\n  top: -12rem;\n  height: 12rem;\n  left: 0;\n  width: 100%;\n  border-top: 1px solid #ccc;\n  background-color: #fff;\n}\n.m-chat-emoji .emoji-channel {\n  position: relative;\n  width: 100%;\n  height: auto;\n  margin: 0 1rem;\n}\n.m-chat-emoji .emoji-channel .emoji-album {\n  display: inline-block;\n  padding: 0.1rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  border-right: 1px solid #f0f0f0;\n}\n.m-chat-emoji .emoji-channel .emoji-album img {\n  margin: 0;\n  display: block;\n  width: inherit;\n  height: inherit;\n}\n.m-chat-emoji .emoji-channel .emoji-album.active {\n  background-color: #f0f0f0;\n}\n.m-chat-emoji .emoji-content {\n  position: relative;\n  width: 100%;\n  height: 10rem;\n  background-color: #f0f0f0;\n  overflow-y: auto;\n}\n.m-chat-emoji .emoji-content .cnt {\n  position: relative;\n  display: block;\n  margin: 0.4rem auto;\n  text-align: left;\n}\n.m-chat-emoji .emoji-content .emoji-item {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  padding: 2px;\n  vertical-align: middle;\n  /*border: 1px solid #fff;*/\n  /*margin-left: -1px;*/\n}\n/*margin-bottom: -1px;*/\n.m-chat-emoji .emoji-content .emoji-item img {\n  width: inherit;\n  height: inherit;\n}\n.m-chat-emoji .emoji-content .pinup-item {\n  width: 44px;\n  height: 44px;\n}\n@media screen and (min-width: 300px) and (max-width: 420px) {\n  .m-chat-emoji .emoji-content .cnt {\n    width: 300px;\n  }\n}\n@media screen and (min-width: 420px) and (max-width: 600px) {\n  .m-chat-emoji .emoji-content .cnt {\n    width: 420px;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 720px) {\n  .m-chat-emoji .emoji-content .cnt {\n    width: 600px;\n  }\n}\n@media screen and (min-width: 720px) and (max-width: 1080px) {\n  .m-chat-emoji .emoji-content .cnt {\n    width: 720px;\n  }\n}\n@media screen and (min-width: 1080px){\n  .m-chat-emoji .emoji-content .cnt {\n    width: 1080px;\n  }\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/components/ChatEmoji.vue"],"names":[],"mappings":";AAwHA;EACE,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,QAAQ;EACR,YAAY;EACZ,2BAA2B;EAC3B,uBAAuB;CAoFxB;AAnFC;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,eAAe;CAiBhB;AAhBC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,gCAAgC;CAUjC;AATC;EACE,UAAU;EACV,eAAe;EACf,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,0BAA0B;CAC3B;AAGL;EACE,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,0BAA0B;EAC1B,iBAAiB;CAyBlB;AAxBC;EACE,mBAAmB;EACnB,eAAe;EACf,oBAAoB;EACpB,iBAAiB;CAClB;AACD;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,2BAA2B;EAC3B,sBAAsB;CAMvB;AALC,wBAAwB;AACxB;EACE,eAAe;EACf,gBAAgB;CACjB;AAEH;EACE,YAAY;EACZ,aAAa;CACd;AAGH;EACE;IACE,aAAa;GACd;CACF;AAED;EACE;IACE,aAAa;GACd;CACF;AAED;EACE;IACE,aAAa;GACd;CACF;AAED;EACE;IACE,aAAa;GACd;CACF;AAED;EACE;IACE,cAAc;GACf;CACF","file":"ChatEmoji.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.m-chat-emoji {\n  position: absolute;\n  top: -12rem;\n  height: 12rem;\n  left: 0;\n  width: 100%;\n  border-top: 1px solid #ccc;\n  background-color: #fff;\n  .emoji-channel {\n    position: relative;\n    width: 100%;\n    height: auto;\n    margin: 0 1rem;\n    .emoji-album {\n      display: inline-block;\n      padding: 0.1rem;\n      width: 1.8rem;\n      height: 1.8rem;\n      border-right: 1px solid #f0f0f0;\n      img {\n        margin: 0;\n        display: block;\n        width: inherit;\n        height: inherit;\n      }\n      &.active {\n        background-color: #f0f0f0;\n      }\n    }\n  }\n  .emoji-content {\n    position: relative;\n    width: 100%;\n    height: 10rem;\n    background-color: #f0f0f0;\n    overflow-y: auto;\n    .cnt {\n      position: relative;\n      display: block;\n      margin: 0.4rem auto;\n      text-align: left;\n    }\n    .emoji-item {\n      display: inline-block;\n      width: 28px;\n      height: 28px;\n      padding: 2px;\n      vertical-align: middle;\n      /*border: 1px solid #fff;*/\n      /*margin-left: -1px;*/\n      /*margin-bottom: -1px;*/\n      img {\n        width: inherit;\n        height: inherit;\n      }\n    }\n    .pinup-item {\n      width: 44px;\n      height: 44px;\n    }\n  }\n\n  @media screen and (min-width: 300px) and (max-width: 420px) {\n    .emoji-content .cnt {\n      width: 300px;\n    }\n  }\n\n  @media screen and (min-width: 420px) and (max-width: 600px) {\n    .emoji-content .cnt {\n      width: 420px;\n    }\n  }\n\n  @media screen and (min-width: 600px) and (max-width: 720px) {\n    .emoji-content .cnt {\n      width: 600px;\n    }\n  }\n\n  @media screen and (min-width: 720px) and (max-width: 1080px) {\n    .emoji-content .cnt {\n      width: 720px;\n    }\n  }\n\n  @media screen and (min-width: 1080px){\n    .emoji-content .cnt {\n      width: 1080px;\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 402:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-654dee8e","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatEditor.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.robot.m-chat-editor-main[data-v-654dee8e] {\n  /*.u-editor-input {\n    padding-right: 4.5rem;\n  }\n  .u-editor-icons {\n    width: 4rem;\n  }*/\n}\n.m-chat-robot[data-v-654dee8e] {\n  overflow-y: scroll;\n}\n.m-chat-robot .weui-cells .weui-cell__hd[data-v-654dee8e] {\n  margin-right: 0.5rem;\n}\n.u-editor-send.u-editor-receipt[data-v-654dee8e] {\n  background-color: #fefefe;\n  border: #ccc solid 1px;\n  color: black;\n  padding: 0.1rem;\n  margin-left: .1rem;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/components/ChatEditor.vue"],"names":[],"mappings":";AA8UA;EACE;;;;;KAKG;CACJ;AACD;EACE,mBAAmB;CAMpB;AAJG;EACE,qBAAqB;CACtB;AAIL;EACE,0BAA0B;EAC1B,uBAAuB;EACvB,aAAa;EACb,gBAAgB;EAChB,mBAAmB;CACpB","file":"ChatEditor.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.robot.m-chat-editor-main {\n  /*.u-editor-input {\n    padding-right: 4.5rem;\n  }\n  .u-editor-icons {\n    width: 4rem;\n  }*/\n}\n.m-chat-robot {\n  overflow-y: scroll;\n  .weui-cells {\n    .weui-cell__hd {\n      margin-right: 0.5rem;\n    }\n  }\n}\n\n.u-editor-send.u-editor-receipt {\n  background-color: #fefefe;\n  border: #ccc solid 1px;\n  color: black;\n  padding: 0.1rem;\n  margin-left: .1rem;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 409:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-44c7b62a"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/ChatEmoji.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-chat-emoji"
  }, [_c('div', {
    staticClass: "emoji-content"
  }, [_c('div', {
    staticClass: "cnt"
  }, _vm._l((_vm.currEmoji.list), function(item) {
    return _c('span', {
      staticClass: "emoji-item",
      class: {
        'pinup-item': item.type === 'pinup'
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.selectEmoji(item)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.img
      }
    })])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "emoji-channel"
  }, [_vm._l((_vm.emoji), function(item) {
    return _c('span', {
      staticClass: "emoji-album",
      class: {
        active: item.name == _vm.currAlbum
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.selectAlbum(item)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.album
      }
    })])
  }), _vm._l((_vm.pinup), function(item) {
    return (_vm.type === 'session') ? _c('span', {
      staticClass: "emoji-album",
      class: {
        active: item.name == _vm.currAlbum
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.selectAlbum(item)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.album
      }
    })]) : _vm._e()
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44c7b62a", module.exports)
  }
}

/***/ }),

/***/ 411:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-654dee8e"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/ChatEditor.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-chat-editor",
    on: {
      "click": _vm.hideRobotList
    }
  }, [_c('chat-emoji', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isEmojiShown),
      expression: "isEmojiShown"
    }],
    attrs: {
      "type": _vm.type,
      "scene": _vm.scene,
      "to": _vm.to
    },
    on: {
      "add-emoji": _vm.addEmoji,
      "hide-emoji": _vm.hideEmoji
    }
  }), _vm._v(" "), _c('group', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isRobotListShown),
      expression: "isRobotListShown"
    }],
    staticClass: "m-chat-emoji m-chat-robot"
  }, _vm._l((_vm.robotslist), function(robot) {
    return _c('cell', {
      key: robot.account,
      attrs: {
        "title": robot.nick
      },
      nativeOn: {
        "click": function($event) {
          _vm.chooseRobot(robot)
        }
      }
    }, [_c('img', {
      staticClass: "icon u-circle",
      attrs: {
        "slot": "icon",
        "width": "20",
        "height": "20",
        "src": robot.avatar
      },
      slot: "icon"
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "m-chat-editor-main",
    class: {
      robot: _vm.isRobot
    }
  }, [_c('span', {
    staticClass: "u-editor-input"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.msgToSent),
      expression: "msgToSent"
    }],
    domProps: {
      "value": (_vm.msgToSent)
    },
    on: {
      "focus": _vm.onInputFocus,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.msgToSent = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "u-editor-icons"
  }, [(!_vm.isRobot) ? _c('span', {
    staticClass: "u-editor-icon",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showEmoji($event)
      }
    }
  }, [_c('i', {
    staticClass: "u-icon-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon1
    }
  })])]) : _vm._e(), _vm._v(" "), (!_vm.isRobot) ? _c('span', {
    staticClass: "u-editor-icon",
    on: {
      "change": _vm.sendFileMsg
    }
  }, [_c('i', {
    staticClass: "u-icon-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon2
    }
  })]), _vm._v(" "), _c('input', {
    ref: "fileToSent",
    attrs: {
      "type": "file"
    }
  })]) : _vm._e(), _vm._v(" "), (!_vm.isRobot && !_vm.advancedTeam) ? _c('span', {
    staticClass: "u-editor-icon",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.sendPlayMsg($event)
      }
    }
  }, [_c('i', {
    staticClass: "u-icon-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon3
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.advancedTeam) ? _c('span', {
    staticClass: "u-editor-send u-editor-receipt",
    on: {
      "click": _vm.turnToMsgReceipt
    }
  }, [_vm._v("回执")]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "u-editor-send",
    on: {
      "click": _vm.sendTextMsg
    }
  }, [_vm._v("发 送")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-654dee8e", module.exports)
  }
}

/***/ }),

/***/ 419:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-44c7b62a","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatEmoji.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-44c7b62a","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./ChatEmoji.vue */ 399);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 6)("a3a78e0c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-44c7b62a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatEmoji.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-44c7b62a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatEmoji.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 422:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-654dee8e","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatEditor.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-654dee8e","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./ChatEditor.vue */ 402);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 6)("4fc3cf43", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-654dee8e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatEditor.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-654dee8e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatEditor.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 426:
/* no static exports found */
/* exports used: default */
/*!*********************************************!*\
  !*** ./src/pages/components/ChatEditor.vue ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-654dee8e","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./ChatEditor.vue */ 422)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./ChatEditor.vue */ 387),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-654dee8e"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./ChatEditor.vue */ 411),
  /* scopeId */
  "data-v-654dee8e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/components/ChatEditor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatEditor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-654dee8e", Component.options)
  } else {
    hotAPI.reload("data-v-654dee8e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 427:
/* no static exports found */
/* exports used: default */
/*!********************************************!*\
  !*** ./src/pages/components/ChatEmoji.vue ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-44c7b62a","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./ChatEmoji.vue */ 419)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./ChatEmoji.vue */ 388),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-44c7b62a"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./ChatEmoji.vue */ 409),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/components/ChatEmoji.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatEmoji.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44c7b62a", Component.options)
  } else {
    hotAPI.reload("data-v-44c7b62a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 464:
/* exports provided: default */
/* all exports used */
/*!********************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/RoomChat.vue ***!
  \********************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RoomChatList__ = __webpack_require__(/*! ./RoomChatList */ 553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RoomChatList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__RoomChatList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RoomChatActor__ = __webpack_require__(/*! ./RoomChatActor */ 552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RoomChatActor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__RoomChatActor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RoomChatMember__ = __webpack_require__(/*! ./RoomChatMember */ 554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RoomChatMember___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__RoomChatMember__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  beforeMount() {
    // 如果是刷新页面，重定向至聊天室列表页面
    if (this.$store.state.isRefresh) {
      location.href = `#/room`;
    } else {
      this.$store.dispatch('connect', {
        type: 'chatroom',
        chatroomId: this.chatroomId
      });
    }
  },
  // 离开该页面，此时重置当前会话
  destroyed() {
    this.$store.dispatch('resetChatroomSDK', this.chatroomId);
  },
  components: {
    RoomChatList: __WEBPACK_IMPORTED_MODULE_0__RoomChatList___default.a,
    RoomChatMember: __WEBPACK_IMPORTED_MODULE_2__RoomChatMember___default.a,
    RoomChatActor: __WEBPACK_IMPORTED_MODULE_1__RoomChatActor___default.a
  },
  data() {
    return {
      roomType: 1 // 1 直播互动， 2 主播， 3 在线成员
    };
  },
  computed: {
    chatroomId() {
      let chatroomId = this.$route.params.chatroomId;
      return chatroomId;
    },
    chatroomInfo() {
      return this.$store.state.chatroomInfos[this.chatroomId] || {};
    }
  },
  methods: {
    changeRoomType(roomType) {
      this.roomType = roomType;
    },
    enterHall() {
      location.href = '#/room';
    }
  }
});

/***/ }),

/***/ 465:
/* exports provided: default */
/* all exports used */
/*!*************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/RoomChatActor.vue ***!
  \*************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(/*! ../utils */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs__ = __webpack_require__(/*! ../configs */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__configs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    this.$store.dispatch('getChatroomInfo');
  },
  computed: {
    chatroomInfo() {
      let chatroomInfo = this.$store.state.currChatroomInfo;
      chatroomInfo.showTime = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.formatDate(chatroomInfo.createTime);
      return chatroomInfo;
    },
    chatroomNotice() {
      return this.chatroomInfo.announcement || '暂无公告';
    },
    chatroomActor() {
      if (this.chatroomInfo) {
        let actor = this.chatroomInfo.actor || {};
        actor.avatar = actor.avatar || __WEBPACK_IMPORTED_MODULE_1__configs___default.a.defaultUserIcon;
        return actor;
      }
      return {};
    }
  }
});

/***/ }),

/***/ 466:
/* exports provided: default */
/* all exports used */
/*!************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/RoomChatList.vue ***!
  \************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ChatEditor__ = __webpack_require__(/*! ./components/ChatEditor */ 426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ChatEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ChatEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ChatList__ = __webpack_require__(/*! ./components/ChatList */ 384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ChatList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_ChatList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(/*! ../utils */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_page__ = __webpack_require__(/*! ../utils/page */ 37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utils_page__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChatEditor: __WEBPACK_IMPORTED_MODULE_0__components_ChatEditor___default.a,
    ChatList: __WEBPACK_IMPORTED_MODULE_1__components_ChatList___default.a
  },
  // 进入该页面，文档被挂载
  mounted() {
    // 此时设置当前会话
    __WEBPACK_IMPORTED_MODULE_3__utils_page___default.a.scrollChatListDown();
  },
  updated() {
    __WEBPACK_IMPORTED_MODULE_3__utils_page___default.a.scrollChatListDown();
  },
  data() {
    return {};
  },
  computed: {
    chatroomId() {
      let chatroomId = this.$route.params.chatroomId;
      return chatroomId;
    },
    msglist() {
      let msgs = this.$store.state.currChatroomMsgs;
      return msgs;
    }
  },
  methods: {
    msgsLoaded() {
      __WEBPACK_IMPORTED_MODULE_3__utils_page___default.a.scrollChatListDown();
    }
  }
});

/***/ }),

/***/ 467:
/* exports provided: default */
/* all exports used */
/*!**************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/RoomChatMember.vue ***!
  \**************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs__ = __webpack_require__(/*! ../configs */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__configs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    this.$store.dispatch('getChatroomMembers');
  },
  destroyed() {
    this.$store.dispatch('clearChatroomMembers');
  },
  computed: {
    chatroomMembers() {
      return this.$store.state.currChatroomMembers.map(member => {
        if (!member.avatar) {
          member.avatar = __WEBPACK_IMPORTED_MODULE_0__configs___default.a.defaultUserIcon;
        } else if (!/\?imageView/.test(member.avatar)) {
          member.avatar += '?imageView&thumbnail=40x40&quality=85';
        }
        switch (member.type) {
          case 'owner':
            member.showType = '群主';
            break;
          case 'manager':
            member.showType = '管理员';
            break;
          case 'common':
          case 'normal':
            member.showType = '普通成员';
            break;
          case 'restricted':
            member.showType = '受限制';
            break;
          case 'guest':
            member.showType = '游客';
            break;
        }
        return member;
      });
    }
  }
});

/***/ }),

/***/ 486:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-1b9f39a8","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/RoomChat.vue ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.p-room-chat .left-arrow {\n    position: absolute;\n    display: block;\n    top: 1rem;\n    left: 1rem;\n    width: 2rem;\n    height: 2rem;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/RoomChat.vue"],"names":[],"mappings":";AAgFE;IACE,mBAAmB;IACnB,eAAe;IACf,UAAU;IACV,WAAW;IACX,YAAY;IACZ,aAAa;CACd","file":"RoomChat.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-room-chat {\n  .left-arrow {\n    position: absolute;\n    display: block;\n    top: 1rem;\n    left: 1rem;\n    width: 2rem;\n    height: 2rem;\n  }\n\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 490:
/* no static exports found */
/* all exports used */
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-33fb3762","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/RoomChatMember.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.p-room-chat-online {\n  position: relative;\n  display: block;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/RoomChatMember.vue"],"names":[],"mappings":";AA2DA;EACE,mBAAmB;EACnB,eAAe;EACf,4BAAuB;OAAvB,uBAAuB;EACvB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,iBAAiB;CAClB","file":"RoomChatMember.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-room-chat-online {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 491:
/* no static exports found */
/* all exports used */
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-3ee04646","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/RoomChatActor.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.p-room-chat-actor {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.p-room-chat-actor h3 {\n  text-align: left;\n}\n.p-room-chat-actor .actor-info {\n  position: relative;\n  width: 100%;\n  height: 4rem;\n  padding: 0.5rem;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n}\n.p-room-chat-actor .actor-avatar {\n  position: relative;\n  display: inline-block;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 3rem;\n  overflow: hidden;\n}\n.p-room-chat-actor .actor-avatar img {\n  width: inherit;\n  height: inherit;\n}\n.p-room-chat-actor .actor-status {\n  position: relative;\n  display: inline-block;\n  margin-left: 0.5rem;\n  height: 3rem;\n  width: auto;\n  vertical-align: top;\n}\n.p-room-chat-actor .actor-status h3 {\n  line-height: 1.8rem;\n  font-size: 1.0rem;\n}\n.p-room-chat-actor .actor-status p {\n  position: relative;\n  top: 0.2rem;\n  line-height: 1.0rem;\n  font-size: 0.9rem;\n  color: #999;\n}\n.p-room-chat-actor .actor-status em {\n  margin-left: 2rem;\n}\n.p-room-chat-actor .actor-notice {\n  position: absolute;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  padding: 5rem 1rem 1rem 1rem;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  line-height: 1.4;\n}\n.p-room-chat-actor .actor-notice h3 {\n  border-bottom: 1px solid #e9e9e9;\n}\n.p-room-chat-actor .actor-notice p {\n  margin-top: 0.6rem;\n  color: #666;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/RoomChatActor.vue"],"names":[],"mappings":";AAuDA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;CA8Dd;AA7DC;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,4BAAuB;OAAvB,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,iBAAiB;CAKlB;AAJC;EACE,eAAe;EACf,gBAAgB;CACjB;AAEH;EACE,mBAAmB;EACnB,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;EACb,YAAY;EACZ,oBAAoB;CAerB;AAdC;EACE,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;CACb;AACD;EACE,kBAAkB;CACnB;AAEH;EACE,mBAAmB;EACnB,4BAAuB;OAAvB,uBAAuB;EACvB,6BAA6B;EAC7B,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,iBAAiB;CAQlB;AAPC;EACE,iCAAiC;CAClC;AACD;EACE,mBAAmB;EACnB,YAAY;CACb","file":"RoomChatActor.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-room-chat-actor {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  h3 {\n    text-align: left;\n  }\n  .actor-info {\n    position: relative;\n    width: 100%;\n    height: 4rem;\n    padding: 0.5rem;\n    box-sizing: border-box;\n  }\n  .actor-avatar {\n    position: relative;\n    display: inline-block;\n    height: 3rem;\n    width: 3rem;\n    border-radius: 3rem;\n    overflow: hidden;\n    img {\n      width: inherit;\n      height: inherit;\n    }\n  }\n  .actor-status {\n    position: relative;\n    display: inline-block;\n    margin-left: 0.5rem;\n    height: 3rem;\n    width: auto;\n    vertical-align: top;\n    h3 {\n      line-height: 1.8rem;\n      font-size: 1.0rem;\n    }\n    p {\n      position: relative;\n      top: 0.2rem;\n      line-height: 1.0rem;\n      font-size: 0.9rem;\n      color: #999;\n    }\n    em {\n      margin-left: 2rem;\n    }\n  }\n  .actor-notice {\n    position: absolute;\n    box-sizing: border-box;\n    padding: 5rem 1rem 1rem 1rem;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    line-height: 1.4;\n    h3 {\n      border-bottom: 1px solid #e9e9e9;\n    }\n    p {\n      margin-top: 0.6rem;\n      color: #666;\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 493:
/* no static exports found */
/* all exports used */
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-4a667134","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/RoomChatList.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.p-room-chat-list .m-chat-editor-main .u-editor-input[data-v-4a667134] {\n    padding-right: 8rem;\n}\n.p-room-chat-list .m-chat-editor-main .u-editor-icons[data-v-4a667134] {\n    width: 8rem;\n}\n.p-room-chat-list .u-msg .msg-text[data-v-4a667134] {\n    max-width: 80%;\n}\n.p-room-chat-list .u-msg .msg-link[data-v-4a667134] {\n    bottom: 0;\n    right: -4rem;\n    font-size: 0.9rem;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/RoomChatList.vue"],"names":[],"mappings":";AA4DI;IACE,oBAAoB;CACrB;AACD;IACE,YAAY;CACb;AAGD;IACE,eAAe;CAChB;AACD;IACE,UAAU;IACV,aAAa;IACb,kBAAkB;CACnB","file":"RoomChatList.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-room-chat-list {\n  .m-chat-editor-main {\n    .u-editor-input {\n      padding-right: 8rem;\n    }\n    .u-editor-icons {\n      width: 8rem;\n    }\n  }\n  .u-msg {\n    .msg-text {\n      max-width: 80%;\n    }\n    .msg-link {\n      bottom: 0;\n      right: -4rem;\n      font-size: 0.9rem;\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 508:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-1b9f39a8"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/RoomChat.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-room p-room-chat"
  }, [_c('div', {
    staticClass: "m-room-album"
  }, [_c('div', {
    staticClass: "img-wraper"
  }, [_c('img', {
    staticClass: "room-img",
    attrs: {
      "src": _vm.chatroomInfo.album
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "left-arrow",
    on: {
      "click": _vm.enterHall
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "m-room-tabs"
  }, [_c('span', {
    staticClass: "u-tab",
    class: {
      active: _vm.roomType === 1
    },
    on: {
      "click": function($event) {
        _vm.changeRoomType(1)
      }
    }
  }, [_vm._v("\n      直播互动\n    ")]), _c('span', {
    staticClass: "u-tab",
    class: {
      active: _vm.roomType === 2
    },
    on: {
      "click": function($event) {
        _vm.changeRoomType(2)
      }
    }
  }, [_vm._v("\n      主播\n    ")]), _c('span', {
    staticClass: "u-tab",
    class: {
      active: _vm.roomType === 3
    },
    on: {
      "click": function($event) {
        _vm.changeRoomType(3)
      }
    }
  }, [_vm._v("\n      在线成员\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "m-room-container"
  }, [_c('div', {
    staticClass: "room-cnt"
  }, [(_vm.roomType === 1) ? _c('room-chat-list') : _vm._e(), _vm._v(" "), (_vm.roomType === 2) ? _c('room-chat-actor') : _vm._e(), _vm._v(" "), (_vm.roomType === 3) ? _c('room-chat-member') : _vm._e()], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1b9f39a8", module.exports)
  }
}

/***/ }),

/***/ 513:
/* no static exports found */
/* all exports used */
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-33fb3762"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/RoomChatMember.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "p-room-chat-online"
  }, [_c('group', {
    staticClass: "u-list"
  }, _vm._l((_vm.chatroomMembers), function(member, index) {
    return _c('cell', {
      key: member.account,
      staticClass: "u-list-item",
      attrs: {
        "title": member.nick || member.account,
        "inline-desc": member.showType
      }
    }, [_c('img', {
      staticClass: "icon",
      attrs: {
        "slot": "icon",
        "width": "24",
        "src": member.avatar
      },
      slot: "icon"
    })])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-33fb3762", module.exports)
  }
}

/***/ }),

/***/ 514:
/* no static exports found */
/* all exports used */
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-3ee04646"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/RoomChatActor.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "p-room-chat-actor"
  }, [_c('div', {
    staticClass: "actor-info"
  }, [_c('span', {
    staticClass: "actor-avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.chatroomActor.avatar
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "actor-status"
  }, [_c('h3', [_vm._v("主播： " + _vm._s(_vm.chatroomActor.nick || _vm.chatroomActor.account) + " ")]), _vm._v(" "), _c('p', [_c('span', [_vm._v("\n          在线：" + _vm._s(_vm.chatroomInfo.onlineMemberNum) + "\n        ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "actor-notice"
  }, [_c('h3', [_vm._v("公告：")]), _vm._v(" "), _c('p', [_vm._v("\n      " + _vm._s(_vm.chatroomNotice) + "\n    ")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3ee04646", module.exports)
  }
}

/***/ }),

/***/ 516:
/* no static exports found */
/* all exports used */
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-4a667134"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/RoomChatList.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-chat-main p-room-chat-list"
  }, [_c('chat-list', {
    attrs: {
      "type": "chatroom",
      "chatroomId": _vm.chatroomId,
      "msglist": _vm.msglist
    },
    on: {
      "msgs-loaded": _vm.msgsLoaded
    }
  }), _vm._v(" "), _c('chat-editor', {
    attrs: {
      "type": "chatroom",
      "chatroomId": _vm.chatroomId
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4a667134", module.exports)
  }
}

/***/ }),

/***/ 533:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-1b9f39a8","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/RoomChat.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-1b9f39a8","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./RoomChat.vue */ 486);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 6)("b7e9e3ba", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1b9f39a8\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChat.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1b9f39a8\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChat.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 537:
/* no static exports found */
/* all exports used */
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-33fb3762","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/RoomChatMember.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-33fb3762","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatMember.vue */ 490);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 6)("66b265c8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-33fb3762\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatMember.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-33fb3762\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatMember.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 538:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-3ee04646","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/RoomChatActor.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-3ee04646","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatActor.vue */ 491);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 6)("79bbd2a2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3ee04646\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatActor.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3ee04646\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatActor.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 540:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-4a667134","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/RoomChatList.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-4a667134","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatList.vue */ 493);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 6)("132c2ace", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4a667134\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatList.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4a667134\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 552:
/* no static exports found */
/* exports used: default */
/*!*************************************!*\
  !*** ./src/pages/RoomChatActor.vue ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-3ee04646","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./RoomChatActor.vue */ 538)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./RoomChatActor.vue */ 465),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-3ee04646"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./RoomChatActor.vue */ 514),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/RoomChatActor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RoomChatActor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ee04646", Component.options)
  } else {
    hotAPI.reload("data-v-3ee04646", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 553:
/* no static exports found */
/* exports used: default */
/*!************************************!*\
  !*** ./src/pages/RoomChatList.vue ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-4a667134","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./RoomChatList.vue */ 540)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./RoomChatList.vue */ 466),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-4a667134"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./RoomChatList.vue */ 516),
  /* scopeId */
  "data-v-4a667134",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/RoomChatList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RoomChatList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a667134", Component.options)
  } else {
    hotAPI.reload("data-v-4a667134", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 554:
/* no static exports found */
/* exports used: default */
/*!**************************************!*\
  !*** ./src/pages/RoomChatMember.vue ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-33fb3762","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./RoomChatMember.vue */ 537)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./RoomChatMember.vue */ 467),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-33fb3762"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./RoomChatMember.vue */ 513),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/RoomChatMember.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RoomChatMember.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33fb3762", Component.options)
  } else {
    hotAPI.reload("data-v-33fb3762", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=1.js.map