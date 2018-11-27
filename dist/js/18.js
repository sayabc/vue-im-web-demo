webpackJsonp([18],{

<<<<<<< HEAD
/***/ 325:
=======
/***/ 335:
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./src/pages/Session.vue ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
<<<<<<< HEAD
__webpack_require__(/*! !vue-loader/~/vue-style-loader!css-loader?sourceMap!../../~/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index?{"id":"data-v-111461e0","scoped":false,"hasInlineConfig":true}!../../~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector?type=styles&index=0!./NameCard.vue */ 549)
=======
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-2dd948d1","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./Session.vue */ 527)
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec

var Component = __webpack_require__(/*! ../../~/_vue-loader@11.3.4@vue-loader/lib/component-normalizer */ 2)(
  /* script */
<<<<<<< HEAD
  __webpack_require__(/*! !babel-loader!../../~/_vux-loader@1.2.9@vux-loader/src/script-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector?type=script&index=0!./NameCard.vue */ 453),
  /* template */
  __webpack_require__(/*! !../../~/_vue-loader@11.3.4@vue-loader/lib/template-compiler/index?{"id":"data-v-111461e0"}!../../~/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!../../~/_vux-loader@1.2.9@vux-loader/src/template-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector?type=template&index=0!./NameCard.vue */ 522),
=======
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./Session.vue */ 460),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-2dd948d1"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./Session.vue */ 503),
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
  /* scopeId */
  null,
  /* cssModules */
  null
)
<<<<<<< HEAD
Component.options.__file = "/Users/lijianjian/Desktop/workspace/vue-im-web-demo/src/pages/NameCard.vue"
=======
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/Session.vue"
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Session.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2dd948d1", Component.options)
  } else {
    hotAPI.reload("data-v-2dd948d1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

<<<<<<< HEAD
/***/ 453:
/* exports provided: default */
/* all exports used */
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./~/_babel-loader@6.4.1@babel-loader/lib!./~/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=script&index=0!./src/pages/NameCard.vue ***!
  \*****************************************************************************************************************************************************************************************************/
=======
/***/ 460:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/Session.vue ***!
  \*******************************************************************************************************************************************/
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(/*! ../utils */ 16);
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
//
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
  data() {
    return {
      delSessionId: null,
      stopBubble: false,
      noticeIcon: __WEBPACK_IMPORTED_MODULE_1__configs___default.a.noticeIcon,
      myPhoneIcon: __WEBPACK_IMPORTED_MODULE_1__configs___default.a.myPhoneIcon,
      myGroupIcon: __WEBPACK_IMPORTED_MODULE_1__configs___default.a.defaultGroupIcon,
      myAdvancedIcon: __WEBPACK_IMPORTED_MODULE_1__configs___default.a.defaultAdvancedIcon
    };
  },
  computed: {
    sysMsgUnread() {
      let temp = this.$store.state.sysMsgUnread;
      let sysMsgUnread = temp.addFriend || 0;
      sysMsgUnread += temp.team || 0;
      let customSysMsgUnread = this.$store.state.customSysMsgUnread;
      return sysMsgUnread + customSysMsgUnread;
    },
    userInfos() {
      return this.$store.state.userInfos;
    },
    myInfo() {
      return this.$store.state.myInfo;
    },
    myPhoneId() {
      return `${this.$store.state.userUID}`;
    },
    sessionlist() {
      let sessionlist = this.$store.state.sessionlist.filter(item => {
        item.name = '';
        item.avatar = '';
        if (item.scene === 'p2p') {
          let userInfo = null;
          if (item.to !== this.myPhoneId) {
            userInfo = this.userInfos[item.to];
          } else {
            // userInfo = this.myInfo
            // userInfo.alias = '我的手机'
            // userInfo.avatar = `${config.myPhoneIcon}`
            return false;
          }
          if (userInfo) {
            item.name = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.getFriendAlias(userInfo);
            item.avatar = userInfo.avatar;
          }
        } else if (item.scene === 'team') {
          let teamInfo = null;
          teamInfo = this.$store.state.teamlist.find(team => {
            return team.teamId === item.to;
          });
          if (teamInfo) {
            item.name = teamInfo.name;
            item.avatar = teamInfo.avatar || (teamInfo.type === 'normal' ? this.myGroupIcon : this.myAdvancedIcon);
          } else {
            item.name = `群${item.to}`;
            item.avatar = item.avatar || this.myGroupIcon;
          }
        }
        let lastMsg = item.lastMsg || {};
        if (lastMsg.type === 'text') {
          item.lastMsgShow = lastMsg.text || '';
        } else if (lastMsg.type === 'custom') {
          item.lastMsgShow = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.parseCustomMsg(lastMsg);
        } else if (lastMsg.scene === 'team' && lastMsg.type === 'notification') {
          item.lastMsgShow = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.generateTeamSysmMsg(lastMsg);
        } else if (__WEBPACK_IMPORTED_MODULE_0__utils___default.a.mapMsgType(lastMsg)) {
          item.lastMsgShow = `[${__WEBPACK_IMPORTED_MODULE_0__utils___default.a.mapMsgType(lastMsg)}]`;
        } else {
          item.lastMsgShow = '';
        }
        if (item.updateTime) {
          item.updateTimeShow = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.formatDate(item.updateTime, true);
        }
        return item;
      });
      return sessionlist;
    }
  },
  methods: {
    enterSysMsgs() {
      if (this.hideDelBtn()) return;
      location.href = '#/sysmsgs';
    },
    enterChat(session) {
      if (this.hideDelBtn()) return;
      if (session && session.id) location.href = `#/chat/${session.id}`;
    },
    enterMyChat() {
      // 我的手机页面
      location.href = `#/chat/p2p-${this.myPhoneId}`;
    },
    deleteSession() {
      if (this.delSessionId !== null) {
        this.$store.dispatch('deleteSession', this.delSessionId);
      }
    },
    showDelBtn(vNode) {
      if (vNode && vNode.data && vNode.data.attrs) {
        this.delSessionId = vNode.data.attrs.sessionId;
        this.stopBubble = true;
        setTimeout(() => {
          this.stopBubble = false;
        }, 20);
      }
    },
    hideDelBtn() {
      if (this.delSessionId !== null && !this.stopBubble) {
        // 用于判断是否前置状态是显示删除按钮
        this.delSessionId = null;
        return true;
      }
      return false;
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ 498:
/* no static exports found */
/* all exports used */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_css-loader@0.27.3@css-loader?sourceMap!./~/_vue-loader@11.3.4@vue-loader/lib/style-compiler?{"id":"data-v-111461e0","scoped":false,"hasInlineConfig":true}!./~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./src/pages/NameCard.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/_css-loader@0.27.3@css-loader/lib/css-base.js */ 4)(true);
=======
/***/ 480:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-2dd948d1","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Session.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 5)(true);
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n.p-namecard .m-list {\n    padding-top: 3.6rem;\n}\n.p-namecard .u-bottom {\n    margin-bottom: 2rem;\n}\n\n", "", {"version":3,"sources":["/Users/lijianjian/Desktop/workspace/vue-im-web-demo/src/pages/NameCard.vue"],"names":[],"mappings":";AAiIE;IACE,oBAAoB;CACrB;AACD;IACE,oBAAoB;CACrB","file":"NameCard.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-namecard {\n  .m-list {\n    padding-top: 3.6rem;\n  }\n  .u-bottom {\n    margin-bottom: 2rem;\n  }\n}\n\n"],"sourceRoot":""}]);
=======
exports.push([module.i, "\n.p-session .vux-cell-primary {\n    max-width: 70%;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/Session.vue"],"names":[],"mappings":";AAkKE;IACE,eAAe;CAChB","file":"Session.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-session {\n  .vux-cell-primary {\n    max-width: 70%;\n  }\n}\n"],"sourceRoot":""}]);
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec

// exports


/***/ }),

<<<<<<< HEAD
/***/ 522:
/* no static exports found */
/* all exports used */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_vue-loader@11.3.4@vue-loader/lib/template-compiler?{"id":"data-v-111461e0"}!./~/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./~/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=template&index=0!./src/pages/NameCard.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ 503:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-2dd948d1"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/Session.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-main p-session"
  }, [_c('group', {
    staticClass: "u-list"
  }, _vm._l((_vm.sessionlist), function(session, index) {
    return _c('cell', {
      directives: [{
        name: "touch",
        rawName: "v-touch:swipeleft",
        value: (_vm.showDelBtn),
        expression: "showDelBtn",
        arg: "swipeleft"
      }, {
        name: "touch",
        rawName: "v-touch:swiperight",
        value: (_vm.hideDelBtn),
        expression: "hideDelBtn",
        arg: "swiperight"
      }],
      key: session.id,
      staticClass: "u-list-item",
      attrs: {
        "title": session.name,
        "inline-desc": session.lastMsgShow,
        "sessionId": session.id
      },
      nativeOn: {
        "click": function($event) {
          _vm.enterChat(session)
        }
      }
    }, [_c('img', {
      staticClass: "icon u-circle",
      attrs: {
        "slot": "icon",
        "width": "24",
        "src": session.avatar
      },
      slot: "icon"
    }), _vm._v(" "), _c('span', {
      staticClass: "u-session-time"
    }, [_vm._v("\n        " + _vm._s(session.updateTimeShow) + "\n      ")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (session.unread > 0),
        expression: "session.unread > 0"
      }],
      staticClass: "u-unread"
    }, [_vm._v(_vm._s(session.unread))]), _vm._v(" "), _c('span', {
      staticClass: "u-tag-del",
      class: {
        active: _vm.delSessionId === session.id
      },
      on: {
        "click": _vm.deleteSession
      }
    })])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
<<<<<<< HEAD
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-111461e0", module.exports)
=======
     require("vue-hot-reload-api").rerender("data-v-2dd948d1", module.exports)
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
  }
}

/***/ }),

<<<<<<< HEAD
/***/ 549:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_vue-style-loader@2.0.5@vue-style-loader!./~/_css-loader@0.27.3@css-loader?sourceMap!./~/_vue-loader@11.3.4@vue-loader/lib/style-compiler?{"id":"data-v-111461e0","scoped":false,"hasInlineConfig":true}!./~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./src/pages/NameCard.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ 527:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-2dd948d1","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Session.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
<<<<<<< HEAD
var content = __webpack_require__(/*! !../../~/_css-loader@0.27.3@css-loader?sourceMap!../../~/_vue-loader@11.3.4@vue-loader/lib/style-compiler?{"id":"data-v-111461e0","scoped":false,"hasInlineConfig":true}!../../~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./NameCard.vue */ 498);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/_vue-style-loader@2.0.5@vue-style-loader/lib/addStylesClient.js */ 5)("fcb49f36", content, false);
=======
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-2dd948d1","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./Session.vue */ 480);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 6)("c4c885f6", content, false);
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
<<<<<<< HEAD
   module.hot.accept("!!../../node_modules/_css-loader@0.27.3@css-loader/index.js?sourceMap!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-111461e0\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./NameCard.vue", function() {
     var newContent = require("!!../../node_modules/_css-loader@0.27.3@css-loader/index.js?sourceMap!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-111461e0\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./NameCard.vue");
=======
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2dd948d1\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Session.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2dd948d1\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Session.vue");
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=18.js.map