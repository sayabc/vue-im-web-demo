webpackJsonp([3],{

/***/ 338:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./src/pages/old/RoomChat.vue ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-8877c3e0","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./RoomChat.vue */ 556)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./RoomChat.vue */ 449),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-8877c3e0"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./RoomChat.vue */ 531),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/RoomChat.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RoomChat.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8877c3e0", Component.options)
  } else {
    hotAPI.reload("data-v-8877c3e0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 449:
/* exports provided: default */
/* all exports used */
/*!************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/old/RoomChat.vue ***!
  \************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RoomChatList__ = __webpack_require__(/*! ./RoomChatList */ 563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RoomChatList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__RoomChatList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RoomChatActor__ = __webpack_require__(/*! ./RoomChatActor */ 562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RoomChatActor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__RoomChatActor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RoomChatMember__ = __webpack_require__(/*! ./RoomChatMember */ 564);
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

/***/ 450:
/* exports provided: default */
/* all exports used */
/*!*****************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/old/RoomChatActor.vue ***!
  \*****************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"../utils\"");
throw new Error("Cannot find module \"../configs\"");
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

/***/ 451:
/* exports provided: default */
/* all exports used */
/*!****************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/old/RoomChatList.vue ***!
  \****************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"./components/ChatEditor\"");
throw new Error("Cannot find module \"./components/ChatList\"");
throw new Error("Cannot find module \"../utils\"");
throw new Error("Cannot find module \"../utils/page\"");
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

/***/ 452:
/* exports provided: default */
/* all exports used */
/*!******************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/old/RoomChatMember.vue ***!
  \******************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"../configs\"");
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

/***/ 498:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-5b9937ce","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/RoomChatList.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.p-room-chat-list .m-chat-editor-main .u-editor-input[data-v-5b9937ce] {\n    padding-right: 8rem;\n}\n.p-room-chat-list .m-chat-editor-main .u-editor-icons[data-v-5b9937ce] {\n    width: 8rem;\n}\n.p-room-chat-list .u-msg .msg-text[data-v-5b9937ce] {\n    max-width: 80%;\n}\n.p-room-chat-list .u-msg .msg-link[data-v-5b9937ce] {\n    bottom: 0;\n    right: -4rem;\n    font-size: 0.9rem;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/RoomChatList.vue"],"names":[],"mappings":";AA4DI;IACE,oBAAoB;CACrB;AACD;IACE,YAAY;CACb;AAGD;IACE,eAAe;CAChB;AACD;IACE,UAAU;IACV,aAAa;IACb,kBAAkB;CACnB","file":"RoomChatList.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-room-chat-list {\n  .m-chat-editor-main {\n    .u-editor-input {\n      padding-right: 8rem;\n    }\n    .u-editor-icons {\n      width: 8rem;\n    }\n  }\n  .u-msg {\n    .msg-text {\n      max-width: 80%;\n    }\n    .msg-link {\n      bottom: 0;\n      right: -4rem;\n      font-size: 0.9rem;\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 503:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-79517975","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/RoomChatActor.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.p-room-chat-actor {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.p-room-chat-actor h3 {\n  text-align: left;\n}\n.p-room-chat-actor .actor-info {\n  position: relative;\n  width: 100%;\n  height: 4rem;\n  padding: 0.5rem;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n}\n.p-room-chat-actor .actor-avatar {\n  position: relative;\n  display: inline-block;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 3rem;\n  overflow: hidden;\n}\n.p-room-chat-actor .actor-avatar img {\n  width: inherit;\n  height: inherit;\n}\n.p-room-chat-actor .actor-status {\n  position: relative;\n  display: inline-block;\n  margin-left: 0.5rem;\n  height: 3rem;\n  width: auto;\n  vertical-align: top;\n}\n.p-room-chat-actor .actor-status h3 {\n  line-height: 1.8rem;\n  font-size: 1.0rem;\n}\n.p-room-chat-actor .actor-status p {\n  position: relative;\n  top: 0.2rem;\n  line-height: 1.0rem;\n  font-size: 0.9rem;\n  color: #999;\n}\n.p-room-chat-actor .actor-status em {\n  margin-left: 2rem;\n}\n.p-room-chat-actor .actor-notice {\n  position: absolute;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  padding: 5rem 1rem 1rem 1rem;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  line-height: 1.4;\n}\n.p-room-chat-actor .actor-notice h3 {\n  border-bottom: 1px solid #e9e9e9;\n}\n.p-room-chat-actor .actor-notice p {\n  margin-top: 0.6rem;\n  color: #666;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/RoomChatActor.vue"],"names":[],"mappings":";AAuDA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;CA8Dd;AA7DC;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,4BAAuB;OAAvB,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,iBAAiB;CAKlB;AAJC;EACE,eAAe;EACf,gBAAgB;CACjB;AAEH;EACE,mBAAmB;EACnB,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;EACb,YAAY;EACZ,oBAAoB;CAerB;AAdC;EACE,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;CACb;AACD;EACE,kBAAkB;CACnB;AAEH;EACE,mBAAmB;EACnB,4BAAuB;OAAvB,uBAAuB;EACvB,6BAA6B;EAC7B,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,iBAAiB;CAQlB;AAPC;EACE,iCAAiC;CAClC;AACD;EACE,mBAAmB;EACnB,YAAY;CACb","file":"RoomChatActor.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-room-chat-actor {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  h3 {\n    text-align: left;\n  }\n  .actor-info {\n    position: relative;\n    width: 100%;\n    height: 4rem;\n    padding: 0.5rem;\n    box-sizing: border-box;\n  }\n  .actor-avatar {\n    position: relative;\n    display: inline-block;\n    height: 3rem;\n    width: 3rem;\n    border-radius: 3rem;\n    overflow: hidden;\n    img {\n      width: inherit;\n      height: inherit;\n    }\n  }\n  .actor-status {\n    position: relative;\n    display: inline-block;\n    margin-left: 0.5rem;\n    height: 3rem;\n    width: auto;\n    vertical-align: top;\n    h3 {\n      line-height: 1.8rem;\n      font-size: 1.0rem;\n    }\n    p {\n      position: relative;\n      top: 0.2rem;\n      line-height: 1.0rem;\n      font-size: 0.9rem;\n      color: #999;\n    }\n    em {\n      margin-left: 2rem;\n    }\n  }\n  .actor-notice {\n    position: absolute;\n    box-sizing: border-box;\n    padding: 5rem 1rem 1rem 1rem;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    line-height: 1.4;\n    h3 {\n      border-bottom: 1px solid #e9e9e9;\n    }\n    p {\n      margin-top: 0.6rem;\n      color: #666;\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 505:
/* no static exports found */
/* all exports used */
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-8877c3e0","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/RoomChat.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.p-room-chat .left-arrow {\n    position: absolute;\n    display: block;\n    top: 1rem;\n    left: 1rem;\n    width: 2rem;\n    height: 2rem;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/RoomChat.vue"],"names":[],"mappings":";AAgFE;IACE,mBAAmB;IACnB,eAAe;IACf,UAAU;IACV,WAAW;IACX,YAAY;IACZ,aAAa;CACd","file":"RoomChat.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-room-chat {\n  .left-arrow {\n    position: absolute;\n    display: block;\n    top: 1rem;\n    left: 1rem;\n    width: 2rem;\n    height: 2rem;\n  }\n\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 506:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-9925a46c","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/RoomChatMember.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.p-room-chat-online {\n  position: relative;\n  display: block;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/RoomChatMember.vue"],"names":[],"mappings":";AA2DA;EACE,mBAAmB;EACnB,eAAe;EACf,4BAAuB;OAAvB,uBAAuB;EACvB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,iBAAiB;CAClB","file":"RoomChatMember.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-room-chat-online {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 522:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-5b9937ce"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/old/RoomChatList.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
     require("vue-hot-reload-api").rerender("data-v-5b9937ce", module.exports)
  }
}

/***/ }),

/***/ 528:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-79517975"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/old/RoomChatActor.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
     require("vue-hot-reload-api").rerender("data-v-79517975", module.exports)
  }
}

/***/ }),

/***/ 531:
/* no static exports found */
/* all exports used */
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-8877c3e0"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/old/RoomChat.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
     require("vue-hot-reload-api").rerender("data-v-8877c3e0", module.exports)
  }
}

/***/ }),

/***/ 532:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-9925a46c"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/old/RoomChatMember.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
     require("vue-hot-reload-api").rerender("data-v-9925a46c", module.exports)
  }
}

/***/ }),

/***/ 549:
/* no static exports found */
/* all exports used */
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-5b9937ce","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/RoomChatList.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-5b9937ce","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatList.vue */ 498);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 6)("038ddd4e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5b9937ce\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatList.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5b9937ce\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 554:
/* no static exports found */
/* all exports used */
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-79517975","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/RoomChatActor.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-79517975","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatActor.vue */ 503);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 6)("59632fed", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-79517975\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatActor.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-79517975\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatActor.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 556:
/* no static exports found */
/* all exports used */
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-8877c3e0","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/RoomChat.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-8877c3e0","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./RoomChat.vue */ 505);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 6)("65c89595", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8877c3e0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChat.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8877c3e0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChat.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 557:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-9925a46c","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/RoomChatMember.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-9925a46c","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatMember.vue */ 506);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 6)("9348af5a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-9925a46c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatMember.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-9925a46c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoomChatMember.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 562:
/* no static exports found */
/* exports used: default */
/*!*****************************************!*\
  !*** ./src/pages/old/RoomChatActor.vue ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-79517975","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./RoomChatActor.vue */ 554)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./RoomChatActor.vue */ 450),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-79517975"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./RoomChatActor.vue */ 528),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/RoomChatActor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RoomChatActor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79517975", Component.options)
  } else {
    hotAPI.reload("data-v-79517975", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 563:
/* no static exports found */
/* exports used: default */
/*!****************************************!*\
  !*** ./src/pages/old/RoomChatList.vue ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-5b9937ce","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./RoomChatList.vue */ 549)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./RoomChatList.vue */ 451),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-5b9937ce"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./RoomChatList.vue */ 522),
  /* scopeId */
  "data-v-5b9937ce",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/RoomChatList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RoomChatList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b9937ce", Component.options)
  } else {
    hotAPI.reload("data-v-5b9937ce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 564:
/* no static exports found */
/* exports used: default */
/*!******************************************!*\
  !*** ./src/pages/old/RoomChatMember.vue ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-9925a46c","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./RoomChatMember.vue */ 557)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./RoomChatMember.vue */ 452),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-9925a46c"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./RoomChatMember.vue */ 532),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/RoomChatMember.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RoomChatMember.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9925a46c", Component.options)
  } else {
    hotAPI.reload("data-v-9925a46c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=3.js.map