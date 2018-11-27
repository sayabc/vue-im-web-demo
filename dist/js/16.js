webpackJsonp([16],{

<<<<<<< HEAD
/***/ 331:
=======
/***/ 337:
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./src/pages/TeamCard.vue ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
<<<<<<< HEAD
__webpack_require__(/*! !vue-loader/~/vue-style-loader!css-loader?sourceMap!../../~/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index?{"id":"data-v-4871118c","scoped":false,"hasInlineConfig":true}!../../~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector?type=styles&index=0!./SysMsgs.vue */ 558)
=======
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-b036b63c","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./TeamCard.vue */ 541)
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec

var Component = __webpack_require__(/*! ../../~/_vue-loader@11.3.4@vue-loader/lib/component-normalizer */ 2)(
  /* script */
<<<<<<< HEAD
  __webpack_require__(/*! !babel-loader!../../~/_vux-loader@1.2.9@vux-loader/src/script-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector?type=script&index=0!./SysMsgs.vue */ 462),
  /* template */
  __webpack_require__(/*! !../../~/_vue-loader@11.3.4@vue-loader/lib/template-compiler/index?{"id":"data-v-4871118c"}!../../~/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!../../~/_vux-loader@1.2.9@vux-loader/src/template-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector?type=template&index=0!./SysMsgs.vue */ 532),
=======
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./TeamCard.vue */ 462),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-b036b63c"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./TeamCard.vue */ 518),
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
  /* scopeId */
  "data-v-b036b63c",
  /* cssModules */
  null
)
<<<<<<< HEAD
Component.options.__file = "/Users/lijianjian/Desktop/workspace/vue-im-web-demo/src/pages/SysMsgs.vue"
=======
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/TeamCard.vue"
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TeamCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b036b63c", Component.options)
  } else {
    hotAPI.reload("data-v-b036b63c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 462:
/* exports provided: default */
/* all exports used */
<<<<<<< HEAD
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./~/_babel-loader@6.4.1@babel-loader/lib!./~/_vux-loader@1.2.9@vux-loader/src/script-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=script&index=0!./src/pages/SysMsgs.vue ***!
  \****************************************************************************************************************************************************************************************************/
=======
/*!********************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/TeamCard.vue ***!
  \********************************************************************************************************************************************/
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
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
  computed: {
    teamId() {
      return this.$route.params.teamId;
    },
    teamInfo() {
      return this.$store.state.searchedTeams.find(team => {
        return team.teamId === this.teamId;
      });
    },
    teamDesc() {
      if (!this.teamInfo) {
        return '';
      }
      let teamType = this.teamInfo.type === "advanced" ? "高级群" : "普通群";
      return `${teamType}:${this.teamInfo.memberNum}人`;
    }
  },
  methods: {
    applyClick() {
      var team = this.$store.state.teamlist.find(team => {
        return team.teamId === this.teamId;
      });
      if (team && team.validToCurrentUser) {
        // 查询到该群且该群对自己有效，说明已在群中
        this.$toast('已在群中');
        return;
      }
      switch (this.teamInfo.joinMode) {
        case 'rejectAll':
          this.$toast('该群禁止任何人加入');
          break;
        case 'noVerify':
          this.applyTeam();
          break;
        case 'needVerify':
          this.showConfirm();
          break;
      }
    },
    showConfirm() {
      this.$vux.confirm.prompt('限十字以内', {
        title: '请输入验证信息',
        closeOnConfirm: false,
        inputAttrs: {
          maxlength: '10'
        },
        onConfirm: msg => {
          if (msg) {
            this.applyTeam(msg);
            this.$vux.confirm.hide();
          } else {
            this.$toast('请输入验证信息');
          }
        }
      });
    },
    applyTeam(msg) {
      this.$store.dispatch('delegateTeamFunction', {
        functionName: 'applyTeam',
        options: {
          teamId: this.teamId,
          ps: msg || '',
          done: (error, obj) => {
            if (error) {
              this.$toast(error);
              return;
            }
            this.$toast(msg ? '申请成功 等待验证' : '已加入群');
            history.go(-2);
          }
        }
      });
    }

  }
});

/***/ }),

<<<<<<< HEAD
/***/ 507:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_css-loader@0.27.3@css-loader?sourceMap!./~/_vue-loader@11.3.4@vue-loader/lib/style-compiler?{"id":"data-v-4871118c","scoped":false,"hasInlineConfig":true}!./~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./src/pages/SysMsgs.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/_css-loader@0.27.3@css-loader/lib/css-base.js */ 4)(true);
=======
/***/ 494:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-b036b63c","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/TeamCard.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 5)(true);
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n.p-sysmsgs .u-list {\n    height: 100%;\n    overflow-y: scroll;\n}\n.p-sysmsgs p {\n    word-wrap: normal;\n    word-break: break-all;\n    color: #333;\n}\n.p-sysmsgs .g-teamSys {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 100;\n    -webkit-flex-grow: 100;\n       -moz-box-flex: 100;\n        -ms-flex-positive: 100;\n            flex-grow: 100;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n       -moz-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: hidden;\n}\n.p-sysmsgs .g-teamSys .m-info {\n    -webkit-flex-shrink: 1;\n        -ms-flex-negative: 1;\n            flex-shrink: 1;\n    overflow: hidden;\n}\n.p-sysmsgs .g-teamSys .m-info .u-time {\n    color: #aaa;\n}\n.p-sysmsgs .g-teamSys .m-info .u-desc {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: #aaa;\n    font-size: 1rem;\n}\n.p-sysmsgs .g-teamSys .m-options{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-sysmsgs .g-teamSys .m-options .weui-btn.weui-btn_mini {\n    padding: 0;\n    width: 3rem;\n    height: 2rem;\n}\n.p-sysmsgs .g-teamSys .m-options .weui-btn + .weui-btn {\n    margin-top: 0;\n    margin-left: 0.5rem;\n}\n.p-sysmsgs .u-msg-state {\n    color: #aaa;\n    font-size: .9rem;\n}\n.p-sysmsgs .empty-hint{\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 5rem;\n    margin: auto;\n    text-align: center;\n}\n", "", {"version":3,"sources":["/Users/lijianjian/Desktop/workspace/vue-im-web-demo/src/pages/SysMsgs.vue"],"names":[],"mappings":";AA8NE;IACE,aAAa;IACb,mBAAmB;CACpB;AACD;IACE,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;CACb;AAED;IACE,qBAAc;IAAd,sBAAc;IAAd,kBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,sBAAe;IAAf,uBAAe;OAAf,mBAAe;QAAf,uBAAe;YAAf,eAAe;IACf,0BAA+B;IAA/B,uCAA+B;OAA/B,uBAA+B;QAA/B,uBAA+B;YAA/B,+BAA+B;IAC/B,0BAAoB;IAApB,4BAAoB;OAApB,uBAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,iBAAiB;CAiClB;AA/BC;IACE,uBAAe;QAAf,qBAAe;YAAf,eAAe;IACf,iBAAiB;CAYlB;AAVC;IACE,YAAY;CACb;AACD;IACE,iBAAiB;IACjB,wBAAwB;IACxB,oBAAoB;IACpB,YAAY;IACZ,gBAAgB;CACjB;AAGH;IACE,qBAAc;IAAd,sBAAc;IAAd,kBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,0BAAoB;IAApB,4BAAoB;OAApB,uBAAoB;QAApB,uBAAoB;YAApB,oBAAoB;CAYrB;AAVC;IACE,WAAW;IACX,YAAY;IACZ,aAAa;CACd;AAED;IACE,cAAc;IACd,oBAAoB;CACrB;AAGL;IACE,YAAY;IACZ,iBAAiB;CAClB;AACD;IACE,mBAAmB;IACnB,QAAQ;IACR,SAAS;IACT,UAAU;IACV,aAAa;IACb,mBAAmB;CACpB","file":"SysMsgs.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-sysmsgs {\n  .u-list {\n    height: 100%;\n    overflow-y: scroll;\n  }\n  p {\n    word-wrap: normal;\n    word-break: break-all;\n    color: #333;\n  }\n  \n  .g-teamSys {\n    display: flex;\n    flex-grow: 100;\n    justify-content: space-between;\n    align-items: center;\n    overflow: hidden;\n    \n    .m-info {\n      flex-shrink: 1;\n      overflow: hidden;\n\n      .u-time {\n        color: #aaa;\n      }\n      .u-desc {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        color: #aaa;\n        font-size: 1rem;\n      }\n    }\n\n    .m-options{\n      display: flex;\n      align-items: center;\n      \n      .weui-btn.weui-btn_mini {\n        padding: 0;\n        width: 3rem;\n        height: 2rem;\n      }\n      \n      .weui-btn + .weui-btn {\n        margin-top: 0;\n        margin-left: 0.5rem;\n      }\n    }\n  }\n  .u-msg-state {\n    color: #aaa;\n    font-size: .9rem;\n  }\n  .empty-hint{\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 5rem;  \n    margin: auto;\n    text-align: center;\n  }\n}\n"],"sourceRoot":""}]);
=======
exports.push([module.i, "\n.g-body[data-v-b036b63c] {\n  margin-top: 5rem;\n  text-align: center;\n}\n.g-body div[data-v-b036b63c] {\n  margin: 1rem auto;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/TeamCard.vue"],"names":[],"mappings":";AAkGA;EACE,iBAAiB;EACjB,mBAAmB;CAKpB;AAHC;EACE,kBAAkB;CACnB","file":"TeamCard.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.g-body {\n  margin-top: 5rem;\n  text-align: center;\n  \n  div {\n    margin: 1rem auto;\n  }\n}\n"],"sourceRoot":""}]);
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec

// exports


/***/ }),

<<<<<<< HEAD
/***/ 532:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_vue-loader@11.3.4@vue-loader/lib/template-compiler?{"id":"data-v-4871118c"}!./~/_vux-loader@1.2.9@vux-loader/src/before-template-compiler-loader.js!./~/_vux-loader@1.2.9@vux-loader/src/template-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=template&index=0!./src/pages/SysMsgs.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ 518:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-b036b63c"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/TeamCard.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": {
        backText: ' '
      }
    }
  }, [_c('h1', {
    staticClass: "m-tab-top"
  }, [_vm._v("加入群")]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })]), _vm._v(" "), _c('div', {
    staticClass: "g-body"
  }, [_c('img', {
    staticClass: "icon u-circle",
    attrs: {
      "slot": "icon",
      "width": "50",
      "height": "50",
      "src": _vm.teamInfo && _vm.teamInfo.avatar
    },
    slot: "icon"
  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.teamInfo && _vm.teamInfo.name))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.teamDesc))]), _vm._v(" "), _c('div', {
    staticClass: "u-bottom"
  }, [_c('x-button', {
    attrs: {
      "type": "primary",
      "action-type": "button"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.applyClick($event)
      }
    }
  }, [_vm._v("申请加入")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
<<<<<<< HEAD
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4871118c", module.exports)
=======
     require("vue-hot-reload-api").rerender("data-v-b036b63c", module.exports)
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
  }
}

/***/ }),

<<<<<<< HEAD
/***/ 558:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/_vue-style-loader@2.0.5@vue-style-loader!./~/_css-loader@0.27.3@css-loader?sourceMap!./~/_vue-loader@11.3.4@vue-loader/lib/style-compiler?{"id":"data-v-4871118c","scoped":false,"hasInlineConfig":true}!./~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./src/pages/SysMsgs.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ 541:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-b036b63c","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/TeamCard.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
<<<<<<< HEAD
var content = __webpack_require__(/*! !../../~/_css-loader@0.27.3@css-loader?sourceMap!../../~/_vue-loader@11.3.4@vue-loader/lib/style-compiler?{"id":"data-v-4871118c","scoped":false,"hasInlineConfig":true}!../../~/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./SysMsgs.vue */ 507);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/_vue-style-loader@2.0.5@vue-style-loader/lib/addStylesClient.js */ 5)("19b364f5", content, false);
=======
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-b036b63c","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./TeamCard.vue */ 494);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 6)("7f4fe2ca", content, false);
>>>>>>> f13db2cbf7455f9174af6b28f29edc07a0d35aec
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
<<<<<<< HEAD
   module.hot.accept("!!../../node_modules/_css-loader@0.27.3@css-loader/index.js?sourceMap!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4871118c\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./SysMsgs.vue", function() {
     var newContent = require("!!../../node_modules/_css-loader@0.27.3@css-loader/index.js?sourceMap!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4871118c\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./SysMsgs.vue");
=======
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b036b63c\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamCard.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b036b63c\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamCard.vue");
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
//# sourceMappingURL=16.js.map