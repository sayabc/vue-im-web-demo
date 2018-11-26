webpackJsonp([15],{

/***/ 328:
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./src/pages/TeamCard.vue ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-b036b63c","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./TeamCard.vue */ 527)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./TeamCard.vue */ 452),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-b036b63c"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./TeamCard.vue */ 505),
  /* scopeId */
  "data-v-b036b63c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/TeamCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TeamCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
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

/***/ 452:
/* exports provided: default */
/* all exports used */
/*!********************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/TeamCard.vue ***!
  \********************************************************************************************************************************************/
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

/***/ 482:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-b036b63c","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/TeamCard.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 4)(true);
// imports


// module
exports.push([module.i, "\n.g-body[data-v-b036b63c] {\n  margin-top: 5rem;\n  text-align: center;\n}\n.g-body div[data-v-b036b63c] {\n  margin: 1rem auto;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/TeamCard.vue"],"names":[],"mappings":";AAkGA;EACE,iBAAiB;EACjB,mBAAmB;CAKpB;AAHC;EACE,kBAAkB;CACnB","file":"TeamCard.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.g-body {\n  margin-top: 5rem;\n  text-align: center;\n  \n  div {\n    margin: 1rem auto;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 505:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-b036b63c"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/TeamCard.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
     require("vue-hot-reload-api").rerender("data-v-b036b63c", module.exports)
  }
}

/***/ }),

/***/ 527:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-b036b63c","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/TeamCard.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-b036b63c","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./TeamCard.vue */ 482);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 5)("7f4fe2ca", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b036b63c\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamCard.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b036b63c\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=15.js.map