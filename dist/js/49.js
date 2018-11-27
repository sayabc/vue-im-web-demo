webpackJsonp([49],{

/***/ 331:
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./src/pages/NameCardRemark.vue ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./NameCardRemark.vue */ 453),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-7bab74b0"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./NameCardRemark.vue */ 516),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/NameCardRemark.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NameCardRemark.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bab74b0", Component.options)
  } else {
    hotAPI.reload("data-v-7bab74b0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 453:
/* exports provided: default */
/* all exports used */
/*!**************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/NameCardRemark.vue ***!
  \**************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      alias: ''
    };
  },
  mounted() {
    let info = this.$store.state.userInfos[this.account] || {};
    this.alias = info.alias;
  },
  computed: {
    account() {
      return this.$route.params.userId;
    }
  },
  methods: {
    setAlias() {
      this.alias = this.alias.replace(/\n/g, ' ').replace(/\r/g, '');
      if (/^\s*$/.test(this.alias)) {
        // ...
      } else if (this.alias.length > 16) {
        this.$vux.alert.show({
          title: '备注不能超过16个字符'
        });
        return;
      }
      this.$store.dispatch('updateFriend', {
        account: this.account,
        alias: this.alias
      });
      window.history.go(-1);
    }
  }
});

/***/ }),

/***/ 516:
/* no static exports found */
/* all exports used */
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-7bab74b0"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/NameCardRemark.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("[ 备注名 ]")]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })]), _vm._v(" "), _c('group', {
    staticClass: "u-card"
  }, [_c('x-input', {
    staticClass: "u-ipt-default",
    attrs: {
      "type": "text",
      "required": false,
      "max": 16,
      "placeholder": "请输入备注名"
    },
    model: {
      value: (_vm.alias),
      callback: function($$v) {
        _vm.alias = $$v
      },
      expression: "alias"
    }
  }, [_c('span', {
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("备注：")])])], 1), _vm._v(" "), _c('div', [_c('x-button', {
    attrs: {
      "type": "primary",
      "action-type": "button"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.setAlias($event)
      }
    }
  }, [_vm._v("设置备注名")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7bab74b0", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=49.js.map