webpackJsonp([20],{

/***/ 332:
/* no static exports found */
/* all exports used */
/*!***************************************!*\
  !*** ./src/pages/old/ChatHistory.vue ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-13013b22","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./ChatHistory.vue */ 538)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./ChatHistory.vue */ 443),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-13013b22"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./ChatHistory.vue */ 512),
  /* scopeId */
  "data-v-13013b22",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/ChatHistory.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatHistory.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13013b22", Component.options)
  } else {
    hotAPI.reload("data-v-13013b22", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 443:
/* exports provided: default */
/* all exports used */
/*!***************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/old/ChatHistory.vue ***!
  \***************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    // 如果是刷新页面，重定向至聊天页面
    if (this.$store.state.isRefresh) {
      location.href = `#/chat/${this.sessionId}`;
    }
  },
  mounted() {
    this.$store.dispatch('resetNoMoreHistoryMsgs');
    this.getHistoryMsgs();
  },
  updated() {
    let tempPagePos = __WEBPACK_IMPORTED_MODULE_2__utils_page___default.a.getChatListHeight();
    __WEBPACK_IMPORTED_MODULE_2__utils_page___default.a.scrollChatListDown(tempPagePos - this.currPagePos);
    this.currPagePos = tempPagePos;
  },
  components: {
    ChatList: __WEBPACK_IMPORTED_MODULE_0__components_ChatList___default.a
  },
  data() {
    return {
      leftBtnOptions: {
        backText: ' ',
        preventGoBack: true
      },
      currPagePos: 0
      // selectedDate: ''
    };
  },
  computed: {
    sessionId() {
      return this.$route.params.sessionId;
    },
    sessionName() {
      let sessionId = this.sessionId;
      let user = null;
      if (/^p2p-/.test(sessionId)) {
        user = sessionId.replace(/^p2p-/, '');
        if (user === this.$store.state.userUID) {
          return '我的手机';
        } else if (this.isRobot) {
          return this.robotInfos[user].nick || user;
        } else {
          let userInfo = this.userInfos[user] || {};
          return __WEBPACK_IMPORTED_MODULE_1__utils___default.a.getFriendAlias(userInfo);
        }
      } else if (/^team-/.test(sessionId)) {
        return '历史记录';
      }
    },
    // 判断是否是机器人
    isRobot() {
      let sessionId = this.sessionId;
      let user = null;
      if (/^p2p-/.test(sessionId)) {
        user = sessionId.replace(/^p2p-/, '');
        if (this.robotInfos[user]) {
          return true;
        }
      }
      return false;
    },
    myInfo() {
      return this.$store.state.myInfo;
    },
    userInfos() {
      return this.$store.state.userInfos;
    },
    msglist() {
      let msgs = this.$store.state.currSessionMsgs;
      return msgs;
    },
    robotInfos() {
      return this.$store.state.robotInfos;
    },
    scene() {
      return __WEBPACK_IMPORTED_MODULE_1__utils___default.a.parseSession(this.sessionId).scene;
    },
    to() {
      return __WEBPACK_IMPORTED_MODULE_1__utils___default.a.parseSession(this.sessionId).to;
    },
    canLoadMore() {
      return !this.$store.state.noMoreHistoryMsgs;
    }
  },
  methods: {
    getHistoryMsgs() {
      if (this.canLoadMore) {
        this.$store.dispatch('getHistoryMsgs', {
          scene: this.scene,
          to: this.to
        });
      }
    },
    loadMore() {
      if (__WEBPACK_IMPORTED_MODULE_2__utils_page___default.a.getChatListScroll() <= 5) {
        this.getHistoryMsgs();
      }
    },
    onClickBack: function () {
      // location.href = `#/chat/${this.sessionId}`
      window.history.go(-1);
    }
  }
});

/***/ }),

/***/ 487:
/* no static exports found */
/* all exports used */
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-13013b22","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/ChatHistory.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.p-chat-history .m-chat-main[data-v-13013b22] {\n    padding: 0;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/ChatHistory.vue"],"names":[],"mappings":";AA0IE;IACE,WAAW;CACZ","file":"ChatHistory.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-chat-history {\n  .m-chat-main {\n    padding: 0;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 512:
/* no static exports found */
/* all exports used */
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-13013b22"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/old/ChatHistory.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article p-chat-history"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": _vm.leftBtnOptions
    },
    on: {
      "on-click-back": _vm.onClickBack
    }
  }, [_c('h1', {
    staticClass: "m-tab-top"
  }, [_vm._v(_vm._s(_vm.sessionName))]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })]), _vm._v(" "), _c('div', {
    staticClass: "m-chat-main"
  }, [_c('chat-list', {
    directives: [{
      name: "touch",
      rawName: "v-touch:swipedown",
      value: (_vm.loadMore),
      expression: "loadMore",
      arg: "swipedown"
    }],
    ref: "chatlist",
    attrs: {
      "type": "session",
      "canLoadMore": _vm.canLoadMore,
      "msglist": _vm.msglist,
      "userInfos": _vm.userInfos,
      "myInfo": _vm.myInfo,
      "isHistory": true
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-13013b22", module.exports)
  }
}

/***/ }),

/***/ 538:
/* no static exports found */
/* all exports used */
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-13013b22","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/ChatHistory.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-13013b22","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./ChatHistory.vue */ 487);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 6)("7519d68c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-13013b22\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatHistory.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-13013b22\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatHistory.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=20.js.map