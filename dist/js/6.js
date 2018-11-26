webpackJsonp([6],{

/***/ 334:
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./src/pages/TeamMsgReceiptDetail.vue ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-4b64057a","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./TeamMsgReceiptDetail.vue */ 520)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./TeamMsgReceiptDetail.vue */ 458),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-4b64057a"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./TeamMsgReceiptDetail.vue */ 497),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/TeamMsgReceiptDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TeamMsgReceiptDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b64057a", Component.options)
  } else {
    hotAPI.reload("data-v-4b64057a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 361:
/* exports provided: default */
/* all exports used */
/*!*********************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/TeamMember.vue ***!
  \*********************************************************************************************************************************************************/
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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    teamId: {
      type: String
    },
    // 是否为高级群
    advanced: {
      type: Boolean,
      default: false
    },
    // 显示全部群成员模式
    showAllMode: {
      type: Boolean,
      default: false
    },
    filterAccount: {
      type: Array
      // [account1, account2]。 若设置了，则只显示该数组中的群成员, 应用场景：群消息回执中, 对已读未读进行了分组。
    }
  },
  data() {
    return {
      removeMode: false,
      hasManagePermission: false,
      hasSearched: false
    };
  },
  mounted() {
    // 防止在此页面直接刷新，此时需要获取群成员
    var teamMembers = this.$store.state.teamMembers[this.teamId];
    if (teamMembers === undefined) {
      this.$store.dispatch('getTeamMembers', this.teamId);
    }
  },
  computed: {
    teamInfo() {
      var teamList = this.$store.state.teamlist;
      var team = teamList && teamList.find(team => {
        return team.teamId === this.teamId;
      });
      if (!team) {
        return undefined;
      }
      return team;
    },
    members() {
      var members = this.$store.state.teamMembers[this.teamId];
      var userInfos = this.$store.state.userInfos;
      var needSearchAccounts = [];
      if (members) {
        members = members.map(item => {
          var member = Object.assign({}, item); //重新创建一个对象，用于存储展示数据，避免对vuex数据源的修改
          member.valid = true; //被管理员移除后，标记为false
          if (member.account === this.$store.state.userUID) {
            member.alias = '我';
            member.avatar = this.$store.state.myInfo.avatar;
            this.isOwner = member.type === 'owner';
            this.hasManagePermission = member.type !== 'normal';
          } else if (userInfos[member.account] === undefined) {
            needSearchAccounts.push(member.account);
            member.avatar = member.avatar || this.avatar;
            member.alias = member.nickInTeam || member.account;
          } else {
            member.avatar = userInfos[member.account].avatar;
            member.alias = member.nickInTeam || userInfos[member.account].nick;
          }
          return member;
        });
        if (needSearchAccounts.length > 0 && !this.hasSearched) {
          this.hasSearched = true;
          while (needSearchAccounts.length > 0) {
            this.searchUsers(needSearchAccounts.splice(0, 150));
          }
        }
        return members;
      }
      return [];
    },
    membersInDisplay() {
      if (this.filterAccount) {
        return this.members.filter(member => {
          return !!this.filterAccount.find(account => account === member.account);
        });
      } else if (this.advanced || this.showAllMode) {
        return this.members;
      } else {
        return this.members.slice(0, this.hasInvitePermission ? 3 : 4);
      }
    },
    hasInvitePermission() {
      return this.advanced && (this.hasManagePermission || this.teamInfo && this.teamInfo.inviteMode === "all");
    }
  },
  methods: {
    searchUsers(Accounts) {
      this.$store.dispatch('searchUsers', {
        accounts: Accounts,
        done: users => {
          this.updateTeamMember(users);
        }
      });
    },
    updateTeamMember(users) {
      users.forEach(user => {
        var member = this.members.find(member => {
          return member.account === user.account;
        });
        if (member) {
          member.avatar = user.avatar;
          member.alias = member.nickInTeam || user.nick;
        }
      });
    },
    triggerRemove(e, show) {
      this.removeMode = !this.removeMode;
    },
    remove(e, member) {
      this.$store.dispatch('showLoading');
      this.$store.dispatch('delegateTeamFunction', {
        functionName: 'removeTeamMembers',
        options: {
          teamId: this.teamId,
          accounts: [member.account],
          done: (error, obj) => {
            this.$toast('移除成功');
            this.$store.dispatch('hideLoading');
          }
        }
      });
      e.cancelBubble = true;
      e.preventDefault();
    },
    onMemberClick(member) {
      location.href = this.advanced ? `#/teammembercard/${member.id}` : `#/namecard/${member.account}`;
    }
  }
});

/***/ }),

/***/ 363:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-07c4ffaa","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/TeamMember.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 4)(true);
// imports


// module
exports.push([module.i, "\n.m-members[data-v-07c4ffaa] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin: 0 auto;\n  text-align: center;\n  width: 100%;\n}\n.m-members img.avatar[data-v-07c4ffaa]{\n  width: 3.8rem;\n  height: 3.8rem;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 1 auto;\n     -moz-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n}\n.m-members .u-member[data-v-07c4ffaa] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 25%;\n  margin: .5rem 0;\n}\n.m-members .u-member .remove[data-v-07c4ffaa], .m-members .u-member .manager[data-v-07c4ffaa], .m-members .u-member .owner[data-v-07c4ffaa]{\n  display: inline-block;\n  position: absolute;\n  bottom: 1.1rem;\n  right: 0;\n  width: 2rem;\n  height: 2rem;\n  background: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n  background-position: -10.3rem 0;\n  background-size: 20rem\n}\n.m-members .u-member .owner[data-v-07c4ffaa] {\n  background-position: -10.3rem -2.7rem;\n}\n.m-members .u-member .remove[data-v-07c4ffaa] {\n  top: 0;\n  bottom: auto;\n  right: 0;\n  width: 2.4rem;\n  height: 2.4rem;\n  background-position: -10.1rem -5.1rem;\n}\n.m-members .u-member span[data-v-07c4ffaa] {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.m-members.s-bg-white[data-v-07c4ffaa] {\n  background-color: white;\n}\n\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/components/TeamMember.vue"],"names":[],"mappings":";AAwKA;EACE,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,wBAAgB;MAAhB,oBAAgB;UAAhB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,YAAY;CAmDb;AAjDC;EACE,cAAc;EACd,eAAe;EACf,oBAAe;EAAf,uBAAe;KAAf,iBAAe;MAAf,mBAAe;UAAf,eAAe;CAChB;AAED;EACE,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,mBAAmB;EACnB,6BAAuB;EAAvB,8BAAuB;EAAvB,+BAAuB;KAAvB,0BAAuB;KAAvB,2BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,0BAAoB;EAApB,4BAAoB;KAApB,uBAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,WAAW;EACX,gBAAgB;CAgCjB;AA9BC;EACE,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,SAAS;EACT,YAAY;EACZ,aAAa;EACb,sEAAsE;EACtE,gCAAgC;EAChC,sBAAsB;CACvB;AACD;EACE,sCAAsC;CACvC;AAED;EACE,OAAO;EACP,aAAa;EACb,SAAS;EACT,cAAc;EACd,eAAe;EACf,sCAAsC;CACvC;AAED;EACE,gBAAgB;EAChB,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;CACrB;AAGH;EACE,wBAAwB;CACzB","file":"TeamMember.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.m-members {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  text-align: center;\n  width: 100%;\n\n  img.avatar{\n    width: 3.8rem;\n    height: 3.8rem;\n    flex: 0 1 auto;\n  }\n\n  .u-member {\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    align-items: center;\n    width: 25%;\n    margin: .5rem 0;\n\n    .remove, .manager, .owner{\n      display: inline-block;\n      position: absolute;\n      bottom: 1.1rem;\n      right: 0;\n      width: 2rem;\n      height: 2rem;\n      background: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n      background-position: -10.3rem 0;\n      background-size: 20rem\n    }\n    .owner {\n      background-position: -10.3rem -2.7rem;\n    }\n\n    .remove {\n      top: 0;\n      bottom: auto;\n      right: 0;\n      width: 2.4rem;\n      height: 2.4rem;\n      background-position: -10.1rem -5.1rem;\n    }\n\n    span {\n      max-width: 100%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n\n  &.s-bg-white{\n    background-color: white;\n  }\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 366:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-07c4ffaa"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/TeamMember.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-members",
    class: {
      "s-bg-white": _vm.advanced && !_vm.showAllMode
    }
  }, [(_vm.hasInvitePermission && !_vm.showAllMode) ? _c('a', {
    staticClass: "u-member",
    attrs: {
      "href": "#/teaminvite/" + _vm.teamId
    }
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": "http://yx-web.nos.netease.com/webdoc/h5/im/team_member_add.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("添加")])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.membersInDisplay), function(member) {
    return _c('a', {
      key: member.account,
      staticClass: "u-member",
      on: {
        "click": function($event) {
          _vm.onMemberClick(member)
        }
      }
    }, [_c('img', {
      staticClass: "avatar u-circle",
      attrs: {
        "src": member.avatar
      }
    }), _vm._v(" "), (_vm.removeMode && member.type != "owner" && member.account != _vm.$store.state.userUID) ? _c('span', {
      staticClass: "remove",
      on: {
        "click": function($event) {
          _vm.remove($event, member)
        }
      }
    }) : _vm._e(), _vm._v(" "), (member.type !== "normal") ? _c('span', {
      class: member.type === "manager" ? "manager" : "owner"
    }) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(member.alias))])])
  }), _vm._v(" "), (!_vm.advanced) ? [_c('a', {
    staticClass: "u-member",
    attrs: {
      "href": "#/teaminvite/" + _vm.teamId
    }
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": "http://yx-web.nos.netease.com/webdoc/h5/im/team_member_add.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("添加")])]), _vm._v(" "), (_vm.hasManagePermission) ? _c('div', {
    staticClass: "u-member",
    on: {
      "click": function($event) {
        _vm.triggerRemove()
      }
    }
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": "http://yx-web.nos.netease.com/webdoc/h5/im/team_member_delete.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("移除")])]) : _vm._e()] : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07c4ffaa", module.exports)
  }
}

/***/ }),

/***/ 369:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-07c4ffaa","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/TeamMember.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-07c4ffaa","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./TeamMember.vue */ 363);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 5)("c03ff526", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-07c4ffaa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamMember.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-07c4ffaa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamMember.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 373:
/* no static exports found */
/* exports used: default */
/*!*********************************************!*\
  !*** ./src/pages/components/TeamMember.vue ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-07c4ffaa","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./TeamMember.vue */ 369)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./TeamMember.vue */ 361),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-07c4ffaa"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./TeamMember.vue */ 366),
  /* scopeId */
  "data-v-07c4ffaa",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/components/TeamMember.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TeamMember.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07c4ffaa", Component.options)
  } else {
    hotAPI.reload("data-v-07c4ffaa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 458:
/* exports provided: default */
/* all exports used */
/*!********************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/TeamMsgReceiptDetail.vue ***!
  \********************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TeamMember_vue__ = __webpack_require__(/*! ./components/TeamMember.vue */ 373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TeamMember_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_TeamMember_vue__);
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
      selectIndex: 0
    };
  },
  computed: {
    teamId() {
      return (/(\d+)-(\d+)/.exec(this.$route.params.msgInfo)[1]
      );
    },
    idServer() {
      return (/(\d+)-(\d+)/.exec(this.$route.params.msgInfo)[2]
      );
    },
    readAccounts() {
      return this.$store.state.teamMsgReadsDetail.readAccounts;
    },
    unreadAccounts() {
      return this.$store.state.teamMsgReadsDetail.unreadAccounts;
    }
  },
  created() {
    this.$store.dispatch('delegateTeamFunction', {
      functionName: 'getTeamMsgReadAccounts',
      options: {
        teamMsgReceipt: {
          teamId: this.teamId,
          idServer: this.idServer
        },
        done: (error, obj, content) => {
          if (!error) {
            this.$store.commit('initMsgReceiptDetail', content);
          }
        }
      }
    });
  },
  methods: {},
  components: {
    TeamMember: __WEBPACK_IMPORTED_MODULE_0__components_TeamMember_vue___default.a
  }
});

/***/ }),

/***/ 475:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-4b64057a","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/TeamMsgReceiptDetail.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 4)(true);
// imports


// module
exports.push([module.i, "\n.m-article.p-msg-receipt {\n  background: #ebeef3;\n}\n.m-article.p-msg-receipt .select-bar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 3rem;\n  background: #fff;\n}\n.m-article.p-msg-receipt .select-bar .item {\n  height: 3rem;\n  width: 50%;\n  line-height: 3rem;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  text-align: center\n}\n.m-article.p-msg-receipt .select-bar .item.active {\n  color: #0091e4;\n  border-bottom: #0091e4 5px solid;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/TeamMsgReceiptDetail.vue"],"names":[],"mappings":";AAqEA;EACE,oBAAoB;CAqBrB;AAnBC;EACE,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,YAAY;EACZ,aAAa;EACb,iBAAiB;CAclB;AAZC;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,4BAAuB;OAAvB,uBAAuB;EACvB,kBAAmB;CAMpB;AAJC;EACE,eAAe;EACf,iCAAiC;CAClC","file":"TeamMsgReceiptDetail.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.m-article.p-msg-receipt {\n  background: #ebeef3;\n\n  .select-bar {\n    display: flex;\n    width: 100%;\n    height: 3rem;\n    background: #fff;\n    \n    .item {\n      height: 3rem;\n      width: 50%;\n      line-height: 3rem;\n      box-sizing: border-box;\n      text-align: center;\n\n      &.active {\n        color: #0091e4;\n        border-bottom: #0091e4 5px solid;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 497:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-4b64057a"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/TeamMsgReceiptDetail.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("已读回执详情")]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })]), _vm._v(" "), _c('div', {
    staticClass: "g-body"
  }, [_c('div', {
    staticClass: "select-bar"
  }, [_c('div', {
    staticClass: "item",
    class: {
      active: _vm.selectIndex === 0
    },
    on: {
      "click": function($event) {
        _vm.selectIndex = 0
      }
    }
  }, [_vm._v("\n        未读 (" + _vm._s(_vm.unreadAccounts.length) + ")\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: {
      active: _vm.selectIndex === 1
    },
    on: {
      "click": function($event) {
        _vm.selectIndex = 1
      }
    }
  }, [_vm._v("\n        已读 (" + _vm._s(_vm.readAccounts.length) + ")\n      ")])])]), _vm._v(" "), _c('team-member', {
    attrs: {
      "teamId": _vm.teamId,
      "advanced": true,
      "showAllMode": true,
      "filterAccount": _vm.selectIndex === 0 ? _vm.unreadAccounts : _vm.readAccounts
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4b64057a", module.exports)
  }
}

/***/ }),

/***/ 520:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-4b64057a","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/TeamMsgReceiptDetail.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-4b64057a","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./TeamMsgReceiptDetail.vue */ 475);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 5)("23356291", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4b64057a\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamMsgReceiptDetail.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4b64057a\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamMsgReceiptDetail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=6.js.map