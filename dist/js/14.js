webpackJsonp([14],{

/***/ 343:
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./src/pages/old/TeamInvite.vue ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-69338f7a","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./TeamInvite.vue */ 551)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./TeamInvite.vue */ 457),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-69338f7a"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./TeamInvite.vue */ 524),
  /* scopeId */
  "data-v-69338f7a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/TeamInvite.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TeamInvite.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69338f7a", Component.options)
  } else {
    hotAPI.reload("data-v-69338f7a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 457:
/* exports provided: default */
/* all exports used */
/*!**************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/old/TeamInvite.vue ***!
  \**************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"../utils/pinyin\"");
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
      selected: [],
      showActionSheet: false,
      menus: {
        menu1: '创建讨论组',
        menu2: '创建高级群'
      }
    };
  },
  computed: {
    frinedList() {
      var teamMember = this.$store.state.teamMembers && this.$store.state.teamMembers[this.teamId];
      var list = this.$store.state.friendslist.map(item => {
        var friend = Object.assign({}, item);
        let account = friend.account;
        let thisAttrs = this.userInfos[account];
        let alias = thisAttrs.alias ? thisAttrs.alias.trim() : '';
        friend.alias = alias || thisAttrs.nick || account;
        friend.pinyin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_pinyin__["getPinyin"])(friend.alias, '').toUpperCase();
        friend.checked = false;

        if (teamMember) {
          teamMember.forEach(item => {
            if (friend.account === item.account) {
              friend.ingroup = true;
            }
          });
        }
        return friend;
      });
      list.sort((a, b) => {
        return a.pinyin < b.pinyin ? -1 : a.pinyin > b.pinyin ? 1 : 0;
      });
      return list;
    },
    friendsGroups() {
      var map = Object.create(null);
      this.frinedList.forEach(friend => {
        var firstLetter = friend.pinyin[0];
        var firstLetter = firstLetter >= 'A' && firstLetter <= 'Z' ? firstLetter : '#';
        if (map[firstLetter] === undefined) {
          map[firstLetter] = [];
        }
        map[firstLetter].push(friend);
      });
      var groups = [];
      for (const key in map) {
        groups.push({
          letter: key,
          arr: map[key]
        });
      }
      return groups;
    },
    userInfos() {
      return this.$store.state.userInfos;
    },
    teamId() {
      return this.$route.params.teamId;
    }
  },
  methods: {
    itemClick(friend) {
      if (!friend.ingroup) {
        friend.checked = !friend.checked;
        if (friend.checked) {
          this.selected.push(friend);
        } else {
          this.selected.splice(this.selected.indexOf(friend), 1);
        }
        this.$forceUpdate();
        this.$nextTick(() => {
          this.$refs.avators.scrollLeft = this.$refs.avators.scrollWidth;
        });
      }
    },
    unSelect(friend) {
      friend.checked = false;
      this.selected.splice(this.selected.indexOf(friend), 1);
      this.$forceUpdate();
    },
    onNext() {
      if (this.selected.length < 1) {
        this.$toast('未选择成员');
        return;
      }
      if (this.teamId === "0") {
        // 创建群模式
        this.showActionSheet = true;
      } else {
        // 添加新成员
        this.addMembers();
      }
    },
    addMembers() {
      this.$store.dispatch('showLoading');
      var accounts = this.selected.map(friend => {
        return friend.account;
      });
      this.$store.dispatch('delegateTeamFunction', {
        functionName: 'addTeamMembers',
        options: {
          teamId: this.teamId,
          accounts: accounts,
          done: (error, obj) => {
            this.$store.dispatch('hideLoading');
            if (error) {
              this.$toast(error);
              return;
            }
            this.$toast('邀请成员成功');
            setTimeout(() => {
              window.history.go(-1);
            }, 200);
          }
        }
      });
    },
    onActionClick(key) {
      var type,
          name,
          accounts = this.selected.map(friend => {
        return friend.account;
      });
      switch (key) {
        case "menu1":
          type = 'normal';
          name = '讨论组';
          break;
        case "menu2":
          type = 'advanced';
          name = '高级群';
          break;
        default:
          // cancle
          return;
      }
      this.$store.dispatch('showLoading');
      this.$store.dispatch('delegateTeamFunction', {
        functionName: 'createTeam',
        options: {
          type: type,
          name: name,
          avatar: '',
          accounts: accounts,
          done: (error, obj) => {
            if (error) {
              this.$toast('创群失败' + error);
            }
            if (!error) {
              if (history.replaceState) {
                // 改变当前页路由的hash值为联系人页，这样从会话页返回时，不再回到邀请页
                history.replaceState(null, null, '#/contacts');
              } else {
                history.go(-1);
              }
              setTimeout(() => {
                location.href = `#/chat/team-${obj.team.teamId}`;
                this.$store.dispatch('hideLoading');
              }, 20);
            }
          }
        }
      });
    }
  }
});

/***/ }),

/***/ 500:
/* no static exports found */
/* all exports used */
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-69338f7a","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/TeamInvite.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)(true);
// imports


// module
exports.push([module.i, "\n.p-teaminvite[data-v-69338f7a] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-top: 0;\n}\n.p-teaminvite .m-tab[data-v-69338f7a] {\n  position: relative;\n}\n.p-teaminvite .m-list[data-v-69338f7a] {\n  position: relative;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n     -moz-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.p-teaminvite .m-list .check-icon[data-v-69338f7a]{\n  margin-right: 0.8rem;\n}\n.p-teaminvite .m-list .icon[data-v-69338f7a]{\n  margin-right: 0.5rem;\n}\n.p-teaminvite .m-selected[data-v-69338f7a] {\n  display: inherit;\n  height: 5rem;\n  background-color: black;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n     -moz-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.p-teaminvite .m-selected .avators[data-v-69338f7a] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0 1rem;\n     -moz-box-flex: 1;\n      -ms-flex: 1 0 1rem;\n          flex: 1 0 1rem;\n  overflow-x: scroll;\n}\n.p-teaminvite .m-selected .avators img[data-v-69338f7a] {\n  margin: .5rem;\n}\n.p-teaminvite .m-selected .avators[data-v-69338f7a]::-webkit-scrollbar {\n  display: none;\n}\n.p-teaminvite .m-selected .btn[data-v-69338f7a] {\n  width: 6rem;\n  height: 2.5rem;\n  margin: auto .3rem;\n  padding: 0;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n.p-teaminvite .m-group .checked-grey[data-v-69338f7a], .p-teaminvite .m-group .checked-blue[data-v-69338f7a], .p-teaminvite .m-group .unchecked[data-v-69338f7a]{\n  display: inline-block;\n  width: 1.4rem;\n  height: 1.4rem;\n  background-size: 20rem;\n  background-image: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n  background-position: -5rem .2rem;\n}\n.p-teaminvite .m-group .checked-blue[data-v-69338f7a] {\n  background-position: -3.7rem -2.95rem;\n}\n.p-teaminvite .m-group .unchecked[data-v-69338f7a] {\n  background-position: -5.15rem -2.95rem;\n}\n.p-teaminvite .m-group em[data-v-69338f7a]{\n  display: block;\n  position: relative;\n  padding-left: 1rem;\n}\n.p-teaminvite .m-group .weui-cell[data-v-69338f7a]:before {\n  border-top: none;\n}\n.p-teaminvite .m-group em[data-v-69338f7a]:after, .p-teaminvite .m-group .weui-cell[data-v-69338f7a]:after {\n  content: \" \";\n  position: absolute;\n  left: 70px;\n  right: 15px;\n  bottom: 0;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n     -moz-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n     -moz-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.p-teaminvite .m-group em[data-v-69338f7a]:after {\n  left: 15;\n  right: 15;\n}\n.p-teaminvite .m-group +.m-group[data-v-69338f7a] {\n  margin-top: 1.1rem;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/old/TeamInvite.vue"],"names":[],"mappings":";AAuMA;EACE,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;EAAvB,+BAAuB;KAAvB,0BAAuB;KAAvB,2BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,eAAe;CA2FhB;AA1FC;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,oBAAa;EAAb,qBAAa;KAAb,iBAAa;MAAb,qBAAa;UAAb,aAAa;CASd;AAPC;EACE,qBAAqB;CACtB;AAED;EACE,qBAAqB;CACtB;AAEH;EACE,iBAAiB;EACjB,aAAa;EACb,wBAAwB;EACxB,0BAAoB;EAApB,4BAAoB;KAApB,uBAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,0BAA+B;EAA/B,uCAA+B;KAA/B,uBAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;CAuBhC;AArBC;EACE,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,oBAAe;EAAf,uBAAe;KAAf,iBAAe;MAAf,mBAAe;UAAf,eAAe;EACf,mBAAmB;CASpB;AAHC;EACE,cAAc;CACf;AAND;EACE,cAAc;CACf;AAOH;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,uBAAe;MAAf,qBAAe;UAAf,eAAe;CAChB;AAMD;EACE,sBAAsB;EACtB,cAAc;EACd,eAAe;EACf,uBAAuB;EACvB,4EAA4E;EAC5E,iCAAiC;CAClC;AAED;EACE,sCAAsC;CACvC;AAED;EACE,uCAAuC;CACxC;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,iCAAiC;EACjC,eAAe;EACf,iCAAyB;KAAzB,8BAAyB;UAAzB,yBAAyB;EACzB,+BAAuB;KAAvB,4BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,SAAS;EACT,UAAU;CACX;AA3CD;EACE,mBAAmB;CACpB","file":"TeamInvite.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-teaminvite {\n  display: flex;\n  flex-direction: column;\n  padding-top: 0;\n  .m-tab {\n    position: relative;\n  }\n  .m-list {\n    position: relative;\n    flex-grow: 1;\n\n    .check-icon{\n      margin-right: 0.8rem;\n    }\n\n    .icon{\n      margin-right: 0.5rem;\n    }\n  }\n  .m-selected {\n    display: inherit;\n    height: 5rem;\n    background-color: black;\n    align-items: center;\n    justify-content: space-between;\n\n    .avators {\n      display: flex;\n      flex: 1 0 1rem;\n      overflow-x: scroll;\n\n      &::-webkit-scrollbar{\n        display: none;\n      }\n\n      img {\n        margin: .5rem;\n      }\n    }\n\n    .btn {\n      width: 6rem;\n      height: 2.5rem;\n      margin: auto .3rem;\n      padding: 0;\n      flex-shrink: 0;   \n    }\n  }\n  .m-group {\n    & +.m-group{\n      margin-top: 1.1rem;\n    }\n    .checked-grey, .checked-blue, .unchecked{\n      display: inline-block;\n      width: 1.4rem;\n      height: 1.4rem;\n      background-size: 20rem;\n      background-image: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n      background-position: -5rem .2rem;\n    }\n\n    .checked-blue {\n      background-position: -3.7rem -2.95rem;\n    }\n\n    .unchecked {\n      background-position: -5.15rem -2.95rem;\n    }\n\n    em{\n      display: block;\n      position: relative;\n      padding-left: 1rem;\n    }\n    .weui-cell:before {\n      border-top: none;\n    }\n    em:after, .weui-cell:after {\n      content: \" \";\n      position: absolute;\n      left: 70px;\n      right: 15px;\n      bottom: 0;\n      height: 1px;\n      border-bottom: 1px solid #D9D9D9;\n      color: #D9D9D9;\n      transform-origin: 0 100%;\n      transform: scaleY(0.5);\n    }\n    em:after {\n      left: 15;\n      right: 15;\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 524:
/* no static exports found */
/* all exports used */
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-69338f7a"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/old/TeamInvite.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article p-teaminvite"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": {
        backText: ' '
      }
    }
  }, [_c('h1', {
    staticClass: "m-tab-top"
  }, [_vm._v("邀请成员")]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })]), _vm._v(" "), _c('div', {
    staticClass: "m-list"
  }, _vm._l((_vm.friendsGroups), function(group) {
    return _c('div', {
      key: group.letter,
      staticClass: "m-group"
    }, [_c('em', [_vm._v(_vm._s(group.letter))]), _vm._v(" "), _vm._l((group.arr), function(friend) {
      return _c('cell', {
        key: friend.account,
        attrs: {
          "title": friend.alias
        },
        nativeOn: {
          "click": function($event) {
            _vm.itemClick(friend)
          }
        }
      }, [_c('span', {
        ref: "checkIcon",
        refInFor: true,
        staticClass: "check-icon",
        class: friend.ingroup ? "checked-grey" : (friend.checked ? "checked-blue" : "unchecked"),
        attrs: {
          "slot": "icon"
        },
        slot: "icon"
      }), _vm._v(" "), _c('img', {
        staticClass: "icon u-circle",
        attrs: {
          "slot": "icon",
          "width": "25",
          "height": "25",
          "src": _vm.userInfos[friend.account].avatar
        },
        slot: "icon"
      })])
    })], 2)
  })), _vm._v(" "), _c('div', {
    staticClass: "m-selected"
  }, [_c('div', {
    ref: "avators",
    staticClass: "avators"
  }, [_vm._l((_vm.selected), function(friend) {
    return _c('img', {
      key: friend.account,
      staticClass: "u-circle",
      attrs: {
        "width": "30",
        "height": "30",
        "src": _vm.userInfos[friend.account].avatar
      },
      on: {
        "click": function($event) {
          _vm.unSelect(friend)
        }
      }
    })
  }), _vm._v(" "), _c('img', {
    attrs: {
      "width": "30",
      "height": "30",
      "src": "http://yx-web.nos.netease.com/webdoc/h5/im/team_invite_dot_avatar.png"
    }
  })], 2), _vm._v(" "), _c('x-button', {
    staticClass: "btn",
    attrs: {
      "type": "primary",
      "mini": true,
      "action-type": "button"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.onNext($event)
      }
    }
  }, [_vm._v(_vm._s(("确认(" + (_vm.selected.length) + ")")))])], 1), _vm._v(" "), _c('action-sheet', {
    attrs: {
      "menus": _vm.menus,
      "show-cancel": ""
    },
    on: {
      "on-click-menu": _vm.onActionClick
    },
    model: {
      value: (_vm.showActionSheet),
      callback: function($$v) {
        _vm.showActionSheet = $$v
      },
      expression: "showActionSheet"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-69338f7a", module.exports)
  }
}

/***/ }),

/***/ 551:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-69338f7a","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/old/TeamInvite.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-69338f7a","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./TeamInvite.vue */ 500);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 6)("53afd9a1", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-69338f7a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamInvite.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-69338f7a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamInvite.vue");
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