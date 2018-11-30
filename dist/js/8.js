webpackJsonp([8],{

/***/ 349:
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ./src/pages/old/TeamSendMsgReceipt.vue ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-44fbcd59","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./TeamSendMsgReceipt.vue */ 544)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./TeamSendMsgReceipt.vue */ 463),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-44fbcd59"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./TeamSendMsgReceipt.vue */ 518),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/TeamSendMsgReceipt.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TeamSendMsgReceipt.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44fbcd59", Component.options)
  } else {
    hotAPI.reload("data-v-44fbcd59", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 463:
/* exports provided: default */
/* all exports used */
/*!**********************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/old/TeamSendMsgReceipt.vue ***!
  \**********************************************************************************************************************************************************/
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      inputMsg: ''
    };
  },
  computed: {
    to() {
      return this.$route.params.teamId;
    }
  },
  methods: {
    sendMsg() {
      if (/^\s*$/.test(this.inputMsg)) {
        this.$vux.alert.show({
          title: '请不要发送空消息'
        });
        return;
      }
      this.$store.dispatch('sendMsg', {
        type: 'text',
        scene: 'team',
        to: this.to,
        text: this.inputMsg,
        needMsgReceipt: true
      });
      history.go(-1);
    }
  }
});

/***/ }),

/***/ 493:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-44fbcd59","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/TeamSendMsgReceipt.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.p-msg-receipt {\n  background-color: #ebeef3;\n}\n.p-msg-receipt .tip {\n  padding: 1rem;\n  color: #666;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/TeamSendMsgReceipt.vue"],"names":[],"mappings":";AAoDA;EACE,0BAA0B;CAM3B;AAJC;EACE,cAAc;EACd,YAAY;CACb","file":"TeamSendMsgReceipt.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-msg-receipt {\n  background-color: #ebeef3;\n\n  .tip {\n    padding: 1rem;\n    color: #666;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 518:
/* no static exports found */
/* all exports used */
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-44fbcd59"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/old/TeamSendMsgReceipt.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article p-msg-receipt"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": {
        backText: ' '
      }
    }
  }, [_c('h1', {
    staticClass: "m-tab-top"
  }, [_vm._v("发送已读回执消息")]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })]), _vm._v(" "), _c('div', {
    staticClass: "g-body"
  }, [_c('group', [_c('x-textarea', {
    attrs: {
      "placeholder": "输入消息内容"
    },
    model: {
      value: (_vm.inputMsg),
      callback: function($$v) {
        _vm.inputMsg = $$v
      },
      expression: "inputMsg"
    }
  }), _vm._v(" "), _c('x-button', {
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.sendMsg($event)
      }
    }
  }, [_vm._v("发送")])], 1), _vm._v(" "), _c('p', {
    staticClass: "tip"
  }, [_vm._v("\n      已读回执能力支持文本、图片、音频、视频、文件、自定义等消息类型。此处仅以文本消息作为演示，开发者可以根据具体业务场景进行功能设计。\n    ")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44fbcd59", module.exports)
  }
}

/***/ }),

/***/ 544:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-44fbcd59","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/TeamSendMsgReceipt.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-44fbcd59","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./TeamSendMsgReceipt.vue */ 493);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 6)("55160234", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-44fbcd59\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamSendMsgReceipt.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-44fbcd59\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamSendMsgReceipt.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=8.js.map