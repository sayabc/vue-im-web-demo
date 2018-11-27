webpackJsonp([19],{

<<<<<<< HEAD
/***/ 323:
=======
/***/ 330:
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./src/pages/NameCard.vue ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
<<<<<<< HEAD
__webpack_require__(/*! !vue-loader/~/vue-style-loader!css-loader?sourceMap!../../~/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index?{"id":"data-v-060e3728","scoped":false,"hasInlineConfig":true}!../../~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector?type=styles&index=0!./Contacts.vue */ 547)
=======
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-111461e0","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./NameCard.vue */ 523)
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec

var Component = __webpack_require__(/*! ../../~/_vue-loader@11.3.4@vue-loader/lib/component-normalizer */ 2)(
  /* script */
<<<<<<< HEAD
  __webpack_require__(/*! !babel-loader!../../~/_vux-loader@1.2.9@vux-loader/src/script-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector?type=script&index=0!./Contacts.vue */ 451),
  /* template */
  __webpack_require__(/*! !../../~/_vue-loader@11.3.4@vue-loader/lib/template-compiler/index?{"id":"data-v-060e3728"}!../../~/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!../../~/_vux-loader@1.2.9@vux-loader/src/template-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector?type=template&index=0!./Contacts.vue */ 520),
=======
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./NameCard.vue */ 452),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-111461e0"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./NameCard.vue */ 498),
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
  /* scopeId */
  null,
  /* cssModules */
  null
)
<<<<<<< HEAD
Component.options.__file = "/Users/lijianjian/Desktop/workspace/vue-im-web-demo/src/pages/Contacts.vue"
=======
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/NameCard.vue"
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NameCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-111461e0", Component.options)
  } else {
    hotAPI.reload("data-v-111461e0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

<<<<<<< HEAD
/***/ 451:
/* exports provided: default */
/* all exports used */
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./~/_babel-loader@6.4.1@babel-loader/lib!./~/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=script&index=0!./src/pages/Contacts.vue ***!
  \*****************************************************************************************************************************************************************************************************/
=======
/***/ 452:
/* exports provided: default */
/* all exports used */
/*!********************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/NameCard.vue ***!
  \********************************************************************************************************************************************/
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(/*! ../utils */ 16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isBlack: false,
      isSelf: false
    };
  },
  computed: {
    account() {
      return this.$route.params.userId;
    },
    userInfo() {
      let info = {};
      if (this.isRobot) {
        info = Object.assign({}, this.robotInfos[this.account]);
        info.alias = info.nick || account;
        info.avatar = info.originAvatar || item.avatar;
      } else if (this.account === this.$store.state.userUID) {
        info = Object.assign({}, this.$store.state.myInfo);
        info.alias = info.nick;
        this.isSelf = true;
      } else {
        info = Object.assign({}, this.$store.state.userInfos[this.account]);
        info._alias = info.alias; //服务器中存的别名，在备注栏展示
        info.alias = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.getFriendAlias(info);
        this.isBlack = info.isBlack;
      }
      return info;
    },
    robotInfos() {
      return this.$store.state.robotInfos;
    },
    // 是否是联系人，黑名单和好友都算
    isFriend() {
      let userInfo = this.userInfo;
      return userInfo.isFriend;
    },
    isRobot() {
      if (this.robotInfos[this.account]) {
        return true;
      }
      return false;
    },
    remarkLink() {
      return `/namecardremark/${this.account}`;
    }
  },
  methods: {
    changeBlack() {
      this.$store.dispatch('updateBlack', {
        account: this.account,
        isBlack: this.isBlack
      });
    },
    enterChat() {
      location.href = `#/chat/p2p-${this.account}`;
    },
    enterHistory() {
      location.href = `#/chatHistory/p2p-${this.account}`;
    },
    addFriend() {
      this.$store.dispatch('addFriend', this.account);
    },
    deleteFriend() {
      let that = this;
      this.$vux.confirm.show({
        title: '删除好友后，将同时解除双方的好友关系',
        onConfirm() {
          that.$store.dispatch('deleteFriend', that.account);
        }
      });
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ 496:
/* no static exports found */
/* all exports used */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_css-loader@0.27.3@css-loader?sourceMap!./~/_vue-loader@11.3.4@vue-loader/lib/style-compiler?{"id":"data-v-060e3728","scoped":false,"hasInlineConfig":true}!./~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Contacts.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/_css-loader@0.27.3@css-loader/lib/css-base.js */ 4)(true);
=======
/***/ 476:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-111461e0","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/NameCard.vue ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 5)(true);
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n.p-contacts .add-friend {\n    background-color: #fff;\n}\n.p-contacts .m-list {\n    padding-top: 8rem;\n}\n.p-contacts .u-search-box-wrap {\n    text-align: center;\n}\n.p-contacts .u-search-box {\n    position: relative;\n    display: inline-block;\n    -moz-box-sizing: border-box;\n         box-sizing: border-box;\n    min-width: 45%;\n    padding: 1em;\n    height: 3rem;\n    text-align: center;\n    border: 1px solid #ccc;\n    background-color: #fff;\n    font-size: 0.8rem;\n    box-shadow: 2px 2px 6px #ccc;\n}\n.p-contacts .u-search-box a {\n    display: inline-block;\n    -moz-box-sizing: border-box;\n         box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n}\n.p-contacts .u-card .icon {\n    display: inline-block;\n    margin-right: 0.4rem;\n    width: 1.4rem;\n    height: 1.4rem;\n    background-size: 20rem;\n}\n.p-contacts .u-card .icon-team-advanced {\n    background-position: 0 -3rem;\n    background-image: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n}\n.p-contacts .u-card .icon-team {\n    background-position: -2.1rem -3rem;\n    background-image: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n}\n", "", {"version":3,"sources":["/Users/lijianjian/Desktop/workspace/vue-im-web-demo/src/pages/Contacts.vue"],"names":[],"mappings":";AA4FE;IACE,uBAAuB;CACxB;AACD;IACE,kBAAkB;CACnB;AACD;IACE,mBAAmB;CACpB;AACD;IACE,mBAAmB;IACnB,sBAAsB;IACtB,4BAAuB;SAAvB,uBAAuB;IACvB,eAAe;IACf,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;IAClB,6BAA6B;CAO9B;AANC;IACE,sBAAsB;IACtB,4BAAuB;SAAvB,uBAAuB;IACvB,aAAa;IACb,YAAY;CACb;AAGD;IACE,sBAAsB;IACtB,qBAAqB;IACrB,cAAc;IACd,eAAe;IACf,uBAAuB;CACxB;AACD;IACE,6BAA6B;IAC7B,4EAA4E;CAC7E;AACD;IACE,mCAAmC;IACnC,4EAA4E;CAC7E","file":"Contacts.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-contacts {\n  .add-friend {\n    background-color: #fff;\n  }\n  .m-list {\n    padding-top: 8rem;\n  }\n  .u-search-box-wrap {\n    text-align: center;\n  }\n  .u-search-box {\n    position: relative;\n    display: inline-block;\n    box-sizing: border-box;\n    min-width: 45%;\n    padding: 1em;\n    height: 3rem;\n    text-align: center;\n    border: 1px solid #ccc;\n    background-color: #fff;\n    font-size: 0.8rem;\n    box-shadow: 2px 2px 6px #ccc;\n    a {\n      display: inline-block;\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n    }\n  }\n  .u-card {\n    .icon {\n      display: inline-block;\n      margin-right: 0.4rem;\n      width: 1.4rem;\n      height: 1.4rem;\n      background-size: 20rem;\n    }\n    .icon-team-advanced {\n      background-position: 0 -3rem;\n      background-image: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n    }\n    .icon-team {\n      background-position: -2.1rem -3rem;\n      background-image: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n    }\n  }\n}\n"],"sourceRoot":""}]);
=======
exports.push([module.i, "\n.p-namecard .m-list {\n    padding-top: 3.6rem;\n}\n.p-namecard .u-bottom {\n    margin-bottom: 2rem;\n}\n\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/NameCard.vue"],"names":[],"mappings":";AAiIE;IACE,oBAAoB;CACrB;AACD;IACE,oBAAoB;CACrB","file":"NameCard.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-namecard {\n  .m-list {\n    padding-top: 3.6rem;\n  }\n  .u-bottom {\n    margin-bottom: 2rem;\n  }\n}\n\n"],"sourceRoot":""}]);
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec

// exports


/***/ }),

<<<<<<< HEAD
/***/ 520:
/* no static exports found */
/* all exports used */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_vue-loader@11.3.4@vue-loader/lib/template-compiler?{"id":"data-v-060e3728"}!./~/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./~/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=template&index=0!./src/pages/Contacts.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ 498:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-111461e0"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/NameCard.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article p-namecard"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": {
        backText: ' '
      }
    }
  }, [_c('h1', {
    staticClass: "m-tab-top"
  }, [_vm._v(_vm._s(_vm.userInfo.alias))]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })]), _vm._v(" "), (_vm.isRobot) ? _c('div', {
    staticClass: "m-list m-robot"
  }, [_c('div', {
    staticClass: "u-logo"
  }, [_c('img', {
    staticClass: "logo",
    attrs: {
      "src": _vm.userInfo.avatar
    }
  }), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.userInfo.alias))]), _vm._v(" "), _c('p', [_vm._v("@" + _vm._s(_vm.userInfo.account))])]), _vm._v(" "), _c('div', {
    staticClass: "u-desc"
  }, [_c('p', [_vm._v(_vm._s(_vm.userInfo.intro))])]), _vm._v(" "), _c('div', {
    staticClass: "u-bottom"
  }, [_c('x-button', {
    attrs: {
      "type": "primary",
      "action-type": "button"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.enterChat($event)
      }
    }
  }, [_vm._v("开始对话")])], 1)]) : _c('div', {
    staticClass: "m-list"
  }, [_c('group', {
    staticClass: "u-card"
  }, [_c('cell', {
    attrs: {
      "title": _vm.userInfo.account,
      "inline-desc": '昵称: ' + _vm.userInfo.nick,
      "value": _vm.userInfo.gender == '不显示' ? '' : _vm.userInfo.gender
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "20",
      "src": _vm.userInfo.avatar
    },
    slot: "icon"
  })])], 1), _vm._v(" "), _c('group', {
    staticClass: "u-card"
  }, [_c('cell', {
    attrs: {
      "title": "性别"
    }
  }, [_vm._v(_vm._s(_vm.userInfo.gender))]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "生日"
    }
  }, [_vm._v(_vm._s(_vm.userInfo.birth))]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "手机"
    }
  }, [_vm._v(_vm._s(_vm.userInfo.tel))]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "邮箱"
    }
  }, [_vm._v(_vm._s(_vm.userInfo.email))]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "签名"
    }
  }, [_vm._v(_vm._s(_vm.userInfo.sign))])], 1), _vm._v(" "), _c('group', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isFriend),
      expression: "isFriend"
    }],
    staticClass: "u-card"
  }, [_c('cell', {
    attrs: {
      "title": "备注名",
      "is-link": "",
      "link": _vm.remarkLink
    }
  }, [_vm._v(_vm._s(_vm.userInfo._alias))])], 1), _vm._v(" "), (!_vm.isSelf) ? _c('group', {
    staticClass: "u-card"
  }, [_c('x-switch', {
    staticClass: "u-switch",
    attrs: {
      "title": "黑名单"
    },
    on: {
      "on-change": _vm.changeBlack
    },
    model: {
      value: (_vm.isBlack),
      callback: function($$v) {
        _vm.isBlack = $$v
      },
      expression: "isBlack"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "u-bottom"
  }, [_c('x-button', {
    attrs: {
      "type": "primary",
      "action-type": "button"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.enterChat($event)
      }
    }
  }, [_vm._v("聊天")]), _vm._v(" "), _c('x-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isFriend),
      expression: "isFriend"
    }],
    attrs: {
      "type": "primary",
      "action-type": "button"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.enterHistory($event)
      }
    }
  }, [_vm._v("历史记录")]), _vm._v(" "), _c('x-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isFriend),
      expression: "isFriend"
    }],
    attrs: {
      "type": "warn",
      "action-type": "button"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.deleteFriend($event)
      }
    }
  }, [_vm._v("删除好友")]), _vm._v(" "), _c('x-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isFriend && !_vm.isSelf),
      expression: "!isFriend && !isSelf"
    }],
    attrs: {
      "type": "warn",
      "action-type": "button"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.addFriend($event)
      }
    }
  }, [_vm._v("添加好友")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
<<<<<<< HEAD
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-060e3728", module.exports)
=======
     require("vue-hot-reload-api").rerender("data-v-111461e0", module.exports)
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
  }
}

/***/ }),

<<<<<<< HEAD
/***/ 547:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_vue-style-loader@2.0.5@vue-style-loader!./~/_css-loader@0.27.3@css-loader?sourceMap!./~/_vue-loader@11.3.4@vue-loader/lib/style-compiler?{"id":"data-v-060e3728","scoped":false,"hasInlineConfig":true}!./~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Contacts.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ 523:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-111461e0","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/NameCard.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
<<<<<<< HEAD
var content = __webpack_require__(/*! !../../~/_css-loader@0.27.3@css-loader?sourceMap!../../~/_vue-loader@11.3.4@vue-loader/lib/style-compiler?{"id":"data-v-060e3728","scoped":false,"hasInlineConfig":true}!../../~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Contacts.vue */ 496);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/_vue-style-loader@2.0.5@vue-style-loader/lib/addStylesClient.js */ 5)("3857cc09", content, false);
=======
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-111461e0","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./NameCard.vue */ 476);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 6)("76bb4b8d", content, false);
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
<<<<<<< HEAD
   module.hot.accept("!!../../node_modules/_css-loader@0.27.3@css-loader/index.js?sourceMap!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-060e3728\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Contacts.vue", function() {
     var newContent = require("!!../../node_modules/_css-loader@0.27.3@css-loader/index.js?sourceMap!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-060e3728\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Contacts.vue");
=======
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-111461e0\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NameCard.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-111461e0\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NameCard.vue");
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
//# sourceMappingURL=19.js.map