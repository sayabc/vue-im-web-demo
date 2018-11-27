webpackJsonp([2],{

/***/ 326:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./src/pages/sayabc/Chat.vue ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-4dbb946a","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./Chat.vue */ 421)
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-4dbb946a","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=1!./Chat.vue */ 420)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./Chat.vue */ 389),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-4dbb946a"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./Chat.vue */ 410),
  /* scopeId */
  "data-v-4dbb946a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/sayabc/Chat.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Chat.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dbb946a", Component.options)
  } else {
    hotAPI.reload("data-v-4dbb946a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 389:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/sayabc/Chat.vue ***!
  \***********************************************************************************************************************************************/
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (114:4)\n\n  112 |   // },\n  113 |   computed: {\n> 114 |     ...mapState({\n      |     ^\n  115 |         sysMsgs: state => state.sysMsgs\n  116 |     }),\n  117 |     sessionId () {\n");

/***/ }),

/***/ 400:
/* no static exports found */
/* all exports used */
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-4dbb946a","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=1!./src/pages/sayabc/Chat.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.g-window .vux-header .m-tab-top {\n  width: 80%;\n  margin: 0 10%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/sayabc/Chat.vue"],"names":[],"mappings":";AAwRA;EACE,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;CACrB","file":"Chat.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.g-window .vux-header .m-tab-top {\n  width: 80%;\n  margin: 0 10%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 401:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-4dbb946a","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/sayabc/Chat.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.g-window .m-tab .m-tab-right[data-v-4dbb946a]{\n  width: 5rem;\n  right: -1rem;\n}\n.m-tab-right[data-v-4dbb946a] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n     -moz-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.m-tab-right .icon-history[data-v-4dbb946a], .m-tab-right .icon-team[data-v-4dbb946a] {\n  display: inline-block;\n  margin-right: .8rem;\n  width: 1.7rem;\n  height: 1.7rem;\n  background: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n  background-size: 20rem;\n  background-position: -5.8rem -11.3rem;\n}\n.m-tab-right .icon-team[data-v-4dbb946a]{\n  background-position: -7.9rem -11.3rem;\n}\n.invalidHint[data-v-4dbb946a] {\n  width: 100%;\n  height: 2rem;\n  line-height: 2rem;\n  text-align: center;\n  background-color: bisque;\n  color: burlywood;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/sayabc/Chat.vue"],"names":[],"mappings":";AAyPA;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,sBAA0B;EAA1B,kCAA0B;KAA1B,mBAA0B;MAA1B,mBAA0B;UAA1B,0BAA0B;CAc3B;AAZC;EACE,sBAAsB;EACtB,oBAAoB;EACpB,cAAc;EACd,eAAe;EACf,sEAAsE;EACtE,uBAAuB;EACvB,sCAAsC;CACvC;AACD;EACE,sCAAsC;CACvC;AAEH;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,iBAAiB;CAClB","file":"Chat.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.g-window .m-tab .m-tab-right{\n  width: 5rem;\n  right: -1rem;\n}\n.m-tab-right {\n  display: flex;\n  justify-content: flex-end;\n\n  .icon-history, .icon-team {\n    display: inline-block;\n    margin-right: .8rem;\n    width: 1.7rem;\n    height: 1.7rem;\n    background: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n    background-size: 20rem;\n    background-position: -5.8rem -11.3rem;\n  }\n  .icon-team{\n    background-position: -7.9rem -11.3rem;\n  }\n}\n.invalidHint {\n  width: 100%;\n  height: 2rem;\n  line-height: 2rem;\n  text-align: center;\n  background-color: bisque;\n  color: burlywood;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 410:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-4dbb946a"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/sayabc/Chat.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit"
  }, [_c('div', {
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
  }), _vm._v(" "), _c('div', {
    staticClass: "m-chat-call-main"
  }, [_c('be-call', {
    attrs: {
      "sysMsgs": _vm.sysMsgs
    }
  }), _vm._v(" "), _c('call')], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "container"
    }
  }, [_vm._v("\n      #container\n    ")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "remoteContainer"
    }
  }, [_vm._v("\n      #remoteContainer\n    ")])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4dbb946a", module.exports)
  }
}

/***/ }),

/***/ 420:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-4dbb946a","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=1!./src/pages/sayabc/Chat.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-4dbb946a","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=1!./Chat.vue */ 400);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 6)("6e4c4216", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4dbb946a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Chat.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4dbb946a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Chat.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 421:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-4dbb946a","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/sayabc/Chat.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-4dbb946a","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./Chat.vue */ 401);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 6)("a708aa2c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4dbb946a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Chat.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4dbb946a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Chat.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=2.js.map