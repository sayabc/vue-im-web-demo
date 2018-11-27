webpackJsonp([14],{

/***/ 343:
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./src/pages/TeamMemberCard.vue ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-6fd0861c","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./TeamMemberCard.vue */ 584)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./TeamMemberCard.vue */ 482),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-6fd0861c"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./TeamMemberCard.vue */ 557),
  /* scopeId */
  "data-v-6fd0861c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/TeamMemberCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TeamMemberCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fd0861c", Component.options)
  } else {
    hotAPI.reload("data-v-6fd0861c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 482:
/* exports provided: default */
/* all exports used */
/*!**************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/TeamMemberCard.vue ***!
  \**************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs__ = __webpack_require__(/*! ../configs */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__configs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(/*! ../utils */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils__);
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
      avatar: __WEBPACK_IMPORTED_MODULE_0__configs___default.a.defaultUserIcon,
      teamId: '',
      account: '',
      mute: false,
      selfType: 'normal'
    };
  },
  computed: {
    member() {
      var parseReg = /(\d+)-(\w+)/;
      var result = parseReg.exec(this.$route.params.member);
      var teamId = result[1];
      this.teamId = teamId;
      var account = result[2];
      this.account = account;
      var member = {};
      this.$store.state.teamMembers[teamId] && this.$store.state.teamMembers[teamId].forEach(item => {
        if (item.account === account) {
          member = Object.assign(member, item);
        }
        if (item.account === this.$store.state.userUID) {
          this.selfType = item.type;
        }
      });
      var userInfo = this.$store.state.userInfos[member.account];
      if (member.account === this.$store.state.userUID) {
        userInfo = this.$store.state.myInfo;
      }
      member.avatar = userInfo ? userInfo.avatar : member.avatar || this.avatar;
      member.alias = userInfo ? userInfo.nick : member.account || 'account';
      this.mute = !!member.mute;
      return member;
    },
    memberType() {
      if (this.member) {
        switch (this.member.type) {
          case 'owner':
            return '群主';
          case 'manager':
            return '管理员';
          case 'normal':
            return '普通成员';
        }
      }
      return '普通成员';
    },
    infoInTeam() {
      return {
        nickInTeam: this.member.nickInTeam,
        memberType: this.member.type
      };
    },
    hasSetMemberTypePermission() {
      return this.selfType === 'owner' && this.member.type !== 'owner';
    },
    hasMuteOrRemovePermission() {
      if (this.selfType === 'owner') {
        return this.member.type !== 'owner';
      }
      if (this.selfType === 'manager') {
        return this.member.type === 'normal';
      }
      return false;
    },
    isSelf() {
      return this.member.account === this.$store.state.userUID;
    },
    hasSetNickPermission() {
      return this.selfType !== 'normal' || this.isSelf;
    }
  },
  methods: {
    changeMute() {
      this.$store.dispatch('delegateTeamFunction', {
        functionName: 'updateMuteStateInTeam',
        options: {
          teamId: this.teamId,
          account: this.account,
          mute: this.mute,
          done: (error, obj) => {
            if (error) {
              this.$toast(error);
            } else {
              this.$toast(this.mute ? '已禁言' : '已取消禁言');
            }
          }
        }
      });
    },
    getUpdateCallBcak() {
      var account = this.member.account;
      var store = this.$store;
      var toast = this.$toast;

      var doneCallBack = (error, obj) => {
        if (error) {
          this.$toast(error);
        } else {
          this.$toast('更改成功');
          setTimeout(() => {
            history.go(-1);
          }, 200);
        }
        store.dispatch('hideLoading');
      };
      return function (teamId, updateKey, newValue) {
        store.dispatch('showLoading');
        let action = null;
        let opts = {};
        if (updateKey === 'nickInTeam') {
          action = 'updateNickInTeam';
          opts.account = account;
          opts.nickInTeam = newValue;
        } else if (updateKey === 'memberType') {
          action = newValue === 'manager' ? 'addTeamManagers' : 'removeTeamManagers';
          opts.accounts = [account];
        }
        store.dispatch('delegateTeamFunction', {
          functionName: action,
          options: Object.assign({
            teamId: teamId,
            done: doneCallBack
          }, opts)
        });
      };
    },
    onEditItemClick(title, inputType, updateKey, confirmCallback) {
      var updateSelfNick = this.isSelf && updateKey === 'nickInTeam';
      this.$store.dispatch('enterSettingPage', {
        title: title,
        inputType: inputType,
        updateKey: updateKey,
        teamId: this.teamId,
        updateInfoInTeam: updateSelfNick ? true : false,
        defaultValue: this.infoInTeam[updateKey],
        confirmCallback: updateSelfNick ? null : confirmCallback,
        enable: true
      });
    },
    remove() {
      this.$store.dispatch('showLoading');
      this.$store.dispatch('delegateTeamFunction', {
        functionName: 'removeTeamMembers',
        options: {
          teamId: this.teamId,
          accounts: [this.member.account],
          done: (error, obj) => {
            this.$toast(error ? error : '移除成功');
            history.go(-1);
            this.$store.dispatch('hideLoading');
          }
        }
      });
    }
  }
});

/***/ }),

/***/ 531:
/* no static exports found */
/* all exports used */
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-6fd0861c","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/TeamMemberCard.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.g-body[data-v-6fd0861c]{\n}\n.g-avatar[data-v-6fd0861c]{\n  margin: 2rem auto;\n  width: 100%;\n  text-align: center;\n}\n.u-btn[data-v-6fd0861c]{\n  width: 80%;\n  margin: 1rem 10%;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/TeamMemberCard.vue"],"names":[],"mappings":";AA0LA;CAEC;AACD;EACE,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,WAAW;EACX,iBAAiB;CAClB","file":"TeamMemberCard.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.g-body{\n  \n}\n.g-avatar{\n  margin: 2rem auto;\n  width: 100%;\n  text-align: center;\n}\n.u-btn{\n  width: 80%;\n  margin: 1rem 10%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 557:
/* no static exports found */
/* all exports used */
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-6fd0861c"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/TeamMemberCard.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article p-membercard"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": {
        backText: ' '
      }
    }
  }, [_c('h1', {
    staticClass: "m-tab-top"
  }, [_vm._v("群名片")]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })]), _vm._v(" "), _c('div', {
    staticClass: "g-body"
  }, [_c('div', {
    staticClass: "g-avatar"
  }, [_c('img', {
    staticClass: "icon u-circle",
    attrs: {
      "slot": "icon",
      "width": "50",
      "height": "50",
      "src": _vm.member && _vm.member.avatar
    },
    slot: "icon"
  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.member && _vm.member.alias))])]), _vm._v(" "), _c('group', {
    staticClass: "m-group"
  }, [_c('cell', {
    attrs: {
      "title": "群昵称",
      "value": _vm.member.nickInTeam || '未设置',
      "is-link": ""
    },
    nativeOn: {
      "click": function($event) {
        return (function () { return _vm.hasSetNickPermission ? _vm.onEditItemClick('修改群昵称', 'text', 'nickInTeam', _vm.getUpdateCallBcak()) : _vm.$toast('无权限'); })($event)
      }
    }
  }), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "身份",
      "value": _vm.memberType,
      "is-link": ""
    },
    nativeOn: {
      "click": function($event) {
        return (function () { return _vm.hasSetMemberTypePermission ? _vm.onEditItemClick('身份', 'select', 'memberType', _vm.getUpdateCallBcak()) : _vm.$toast('无权限'); })($event)
      }
    }
  }), _vm._v(" "), (_vm.hasMuteOrRemovePermission) ? _c('x-switch', {
    staticClass: "u-switch",
    attrs: {
      "title": "设置禁言"
    },
    on: {
      "on-change": _vm.changeMute
    },
    model: {
      value: (_vm.mute),
      callback: function($$v) {
        _vm.mute = $$v
      },
      expression: "mute"
    }
  }) : _vm._e()], 1), _vm._v(" "), (_vm.hasMuteOrRemovePermission) ? _c('x-button', {
    staticClass: "u-btn",
    attrs: {
      "mini": "",
      "type": "warn"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.remove($event)
      }
    }
  }, [_vm._v("移出本群")]) : _vm._e()], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6fd0861c", module.exports)
  }
}

/***/ }),

/***/ 584:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-6fd0861c","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/TeamMemberCard.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-6fd0861c","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./TeamMemberCard.vue */ 531);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 6)("3c97f507", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6fd0861c\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamMemberCard.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6fd0861c\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamMemberCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=14.js.map