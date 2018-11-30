webpackJsonp([4],{

/***/ 331:
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./src/pages/old/Chat.vue ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-5753c2d6","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./Chat.vue */ 548)
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-5753c2d6","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=1!./Chat.vue */ 547)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./Chat.vue */ 442),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-5753c2d6"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./Chat.vue */ 521),
  /* scopeId */
  "data-v-5753c2d6",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/Chat.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Chat.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5753c2d6", Component.options)
  } else {
    hotAPI.reload("data-v-5753c2d6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 442:
/* exports provided: default */
/* all exports used */
/*!********************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/old/Chat.vue ***!
  \********************************************************************************************************************************************/
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
    ChatEditor: __WEBPACK_IMPORTED_MODULE_0__components_ChatEditor___default.a,
    ChatList: __WEBPACK_IMPORTED_MODULE_1__components_ChatList___default.a
  },
  // 进入该页面，文档被挂载
  mounted() {
    this.$store.dispatch('showLoading');
    // 此时设置当前会话
    this.$store.dispatch('setCurrSession', this.sessionId);
    __WEBPACK_IMPORTED_MODULE_3__utils_page___default.a.scrollChatListDown();

    setTimeout(() => {
      this.$store.dispatch('hideLoading');
    }, 1000);

    // 获取群成员
    if (this.scene === 'team') {
      var teamMembers = this.$store.state.teamMembers[this.to];
      if (teamMembers === undefined || teamMembers.length < this.teamInfo.memberNum) {
        this.$store.dispatch('getTeamMembers', this.to);
      }
    }
  },
  updated() {
    __WEBPACK_IMPORTED_MODULE_3__utils_page___default.a.scrollChatListDown();
  },
  // 离开该页面，此时重置当前会话
  destroyed() {
    this.$store.dispatch('resetCurrSession');
  },
  data() {
    return {
      leftBtnOptions: {
        backText: ' ',
        preventGoBack: true
      }
    };
  },
  computed: {
    sessionId() {
      let sessionId = this.$route.params.sessionId;
      console.warn('sessionId 222： ', this.$route.params, this.$route);
      return sessionId;
    },
    sessionName() {
      let sessionId = this.sessionId;
      let user = null;
      if (/^p2p-/.test(sessionId)) {
        user = sessionId.replace(/^p2p-/, '');
        if (user === this.$store.state.userUID) {
          return '我的手机';
        } else if (this.isRobot) {
          return this.robotInfos[user].nick;
        } else {
          let userInfo = this.userInfos[user] || {};
          return __WEBPACK_IMPORTED_MODULE_2__utils___default.a.getFriendAlias(userInfo);
        }
      } else if (/^team-/.test(sessionId)) {
        if (this.teamInfo) {
          // teamInfo中的人数为初始获取的值，在人员增减后不会及时更新，而teamMembers在人员增减后同步维护的人员信息
          var members = this.$store.state.teamMembers && this.$store.state.teamMembers[this.teamInfo.teamId];
          var memberCount = members && members.length;
          return this.teamInfo.name + (memberCount ? `(${memberCount})` : '');
        } else {
          return '群';
        }
      }
    },
    scene() {
      return __WEBPACK_IMPORTED_MODULE_2__utils___default.a.parseSession(this.sessionId).scene;
    },
    to() {
      return __WEBPACK_IMPORTED_MODULE_2__utils___default.a.parseSession(this.sessionId).to;
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
    robotInfos() {
      return this.$store.state.robotInfos;
    },
    msglist() {
      let msgs = this.$store.state.currSessionMsgs;
      return msgs;
    },
    teamInfo() {
      if (this.scene === 'team') {
        var teamId = this.sessionId.replace('team-', '');
        return this.$store.state.teamlist.find(team => {
          return team.teamId === teamId;
        });
      }
      return undefined;
    },
    muteInTeam() {
      if (this.scene !== 'team') return false;
      var teamMembers = this.$store.state.teamMembers;
      var Members = teamMembers && teamMembers[this.teamInfo.teamId];
      var selfInTeam = Members && Members.find(item => {
        return item.account === this.$store.state.userUID;
      });
      return selfInTeam && selfInTeam.mute || false;
    },
    teamInvalid() {
      if (this.scene === 'team') {
        return !(this.teamInfo && this.teamInfo.validToCurrentUser);
      }
      return false;
    },
    sendInvalidHint() {
      if (this.scene === 'team' && this.teamInvalid) {
        return `您已不在该${this.teamInfo && this.teamInfo.type === 'normal' ? '讨论组' : '群'}，不能发送消息`;
      } else if (this.muteInTeam) {
        return '您已被禁言';
      }
      return '无权限发送消息';
    }
  },
  methods: {
    onClickBack() {
      // location.href = '#/contacts'
      window.history.go(-1);
    },
    msgsLoaded() {
      __WEBPACK_IMPORTED_MODULE_3__utils_page___default.a.scrollChatListDown();
    },
    enterNameCard() {
      if (/^p2p-/.test(this.sessionId)) {
        let account = this.sessionId.replace(/^p2p-/, '');
        if (account === this.$store.state.userUID) {
          location.href = `#/general`;
          return;
        }
        location.href = `#/namecard/${account}`;
      }
    },
    onTeamManageClick() {
      if (this.teamInfo && this.teamInfo.validToCurrentUser) {
        location.href = `#/teammanage/${this.teamInfo.teamId}`;
      } else {
        this.$toast('您已退出该群');
      }
    },
    onHistoryClick() {
      if (this.scene !== 'team' || this.teamInfo && this.teamInfo.validToCurrentUser) {
        location.href = `#/chathistory/${this.sessionId}`;
      } else {
        this.$toast('您已退出该群');
      }
    }
  }
});

/***/ }),

/***/ 496:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-5753c2d6","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=1!./src/pages/old/Chat.vue ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.g-window .vux-header .m-tab-top {\n  width: 80%;\n  margin: 0 10%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/Chat.vue"],"names":[],"mappings":";AAkPA;EACE,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;CACrB","file":"Chat.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.g-window .vux-header .m-tab-top {\n  width: 80%;\n  margin: 0 10%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 497:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-5753c2d6","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/Chat.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.g-window .m-tab .m-tab-right[data-v-5753c2d6]{\n  width: 5rem;\n  right: -1rem;\n}\n.m-tab-right[data-v-5753c2d6] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n     -moz-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.m-tab-right .icon-history[data-v-5753c2d6], .m-tab-right .icon-team[data-v-5753c2d6] {\n  display: inline-block;\n  margin-right: .8rem;\n  width: 1.7rem;\n  height: 1.7rem;\n  background: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n  background-size: 20rem;\n  background-position: -5.8rem -11.3rem;\n}\n.m-tab-right .icon-team[data-v-5753c2d6]{\n  background-position: -7.9rem -11.3rem;\n}\n.invalidHint[data-v-5753c2d6] {\n  width: 100%;\n  height: 2rem;\n  line-height: 2rem;\n  text-align: center;\n  background-color: bisque;\n  color: burlywood;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/Chat.vue"],"names":[],"mappings":";AAmNA;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,sBAA0B;EAA1B,kCAA0B;KAA1B,mBAA0B;MAA1B,mBAA0B;UAA1B,0BAA0B;CAc3B;AAZC;EACE,sBAAsB;EACtB,oBAAoB;EACpB,cAAc;EACd,eAAe;EACf,sEAAsE;EACtE,uBAAuB;EACvB,sCAAsC;CACvC;AACD;EACE,sCAAsC;CACvC;AAEH;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,iBAAiB;CAClB","file":"Chat.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.g-window .m-tab .m-tab-right{\n  width: 5rem;\n  right: -1rem;\n}\n.m-tab-right {\n  display: flex;\n  justify-content: flex-end;\n\n  .icon-history, .icon-team {\n    display: inline-block;\n    margin-right: .8rem;\n    width: 1.7rem;\n    height: 1.7rem;\n    background: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n    background-size: 20rem;\n    background-position: -5.8rem -11.3rem;\n  }\n  .icon-team{\n    background-position: -7.9rem -11.3rem;\n  }\n}\n.invalidHint {\n  width: 100%;\n  height: 2rem;\n  line-height: 2rem;\n  text-align: center;\n  background-color: bisque;\n  color: burlywood;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 521:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-5753c2d6"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/old/Chat.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": _vm.leftBtnOptions
    },
    on: {
      "on-click-back": _vm.onClickBack
    }
  }, [_c('h1', {
    staticClass: "m-tab-top",
    on: {
      "click": _vm.enterNameCard
    }
  }, [_vm._v(_vm._s(_vm.sessionName))]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  }), _vm._v(" "), _c('div', {
    staticClass: "m-tab-right",
    attrs: {
      "slot": "right"
    },
    slot: "right"
  }, [_c('span', {
    staticClass: "icon-history",
    on: {
      "click": _vm.onHistoryClick
    }
  }), _vm._v(" "), (_vm.scene === 'team') ? _c('span', {
    staticClass: "icon-team",
    on: {
      "click": _vm.onTeamManageClick
    }
  }) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "m-chat-main"
  }, [(_vm.scene === "team" && _vm.teamInvalid) ? _c('div', {
    staticClass: "invalidHint"
  }, [_vm._v("\n      " + _vm._s(("您已退出该" + (_vm.teamInfo && _vm.teamInfo.type==='normal' ? '讨论组':'群'))) + "\n    ")]) : _vm._e(), _vm._v(" "), _c('chat-list', {
    attrs: {
      "type": "session",
      "msglist": _vm.msglist,
      "userInfos": _vm.userInfos,
      "myInfo": _vm.myInfo,
      "isRobot": _vm.isRobot
    },
    on: {
      "msgs-loaded": _vm.msgsLoaded
    }
  }), _vm._v(" "), _c('chat-editor', {
    attrs: {
      "type": "session",
      "scene": _vm.scene,
      "to": _vm.to,
      "isRobot": _vm.isRobot,
      "invalid": _vm.teamInvalid || _vm.muteInTeam,
      "invalidHint": _vm.sendInvalidHint,
      "advancedTeam": _vm.teamInfo && _vm.teamInfo.type === 'advanced'
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5753c2d6", module.exports)
  }
}

/***/ }),

/***/ 547:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-5753c2d6","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=1!./src/pages/old/Chat.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-5753c2d6","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=1!./Chat.vue */ 496);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 6)("0f9cd8eb", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5753c2d6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Chat.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5753c2d6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Chat.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 548:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-5753c2d6","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/Chat.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-5753c2d6","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./Chat.vue */ 497);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 6)("07fb3516", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5753c2d6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Chat.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5753c2d6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Chat.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=4.js.map