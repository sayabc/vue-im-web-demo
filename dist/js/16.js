webpackJsonp([16],{

/***/ 327:
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./src/pages/SysMsgs.vue ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-4871118c","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./SysMsgs.vue */ 518)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./SysMsgs.vue */ 451),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-4871118c"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./SysMsgs.vue */ 495),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/SysMsgs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SysMsgs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4871118c", Component.options)
  } else {
    hotAPI.reload("data-v-4871118c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 451:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/SysMsgs.vue ***!
  \*******************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs__ = __webpack_require__(/*! ../configs */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__configs__);
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
  // 进入该页面，文档被挂载
  mounted() {
    this.$store.dispatch('markSysMsgRead');
    this.$store.dispatch('markCustomSysMsgRead');
  },
  updated() {
    this.$store.dispatch('markSysMsgRead');
    this.$store.dispatch('markCustomSysMsgRead');
  },
  data() {
    return {
      sysType: 0, // 系统消息 0, 自定义消息 1,
      defaultAvatar: __WEBPACK_IMPORTED_MODULE_0__configs___default.a.defaultUserIcon,
      deleteIdServer: ''
    };
  },
  computed: {
    userInfos() {
      return this.$store.state.userInfos || {};
    },
    sysMsgs() {
      let sysMsgs = this.$store.state.sysMsgs.filter(msg => {
        switch (msg.type) {
          case 'addFriend':
            msg.showText = `${msg.friend.alias || msg.friend.account} 添加您为好友~`;
            msg.avatar = this.userInfos[msg.from] && this.userInfos[msg.from].avatar;
            return true;
          case 'deleteFriend':
            msg.showText = `${msg.from} 将您从好友中删除`;
            msg.avatar = this.userInfos[msg.from].avatar;
            return false;
          case 'applyTeam':
            console.log('applyTeam', msg);
            msg.showText = msg.from;
            msg.avatar = this.userInfos[msg.from] && this.userInfos[msg.from].avatar || this.defaultAvatar;
            msg.desc = `申请加入群:${this.getTeamName(msg.to)}`;
            return true;
          case 'teamInvite':
            msg.showText = msg.attach.team.name;
            msg.avatar = this.userInfos[msg.from] && this.userInfos[msg.from].avatar || this.defaultAvatar;
            msg.desc = `邀请你加入群${msg.to}`;
            return true;
          case 'rejectTeamApply':
            msg.showText = msg.attach.team.name;
            msg.desc = '管理员拒绝你加入本群';
            msg.avatar = msg.attach.team.avatar || this.defaultAvatar;
            return true;
          case 'rejectTeamInvite':
            let op = this.userInfos[msg.from];
            msg.showText = op.nick;
            msg.avatar = op.avatar || this.defaultAvatar;
            msg.desc = `${op.nick}拒绝了群${this.getTeamName(msg.to)}的入群邀请`;
            return true;
        }
        console.log(msg);
        return false;
      });
      sysMsgs.sort((msg1, msg2) => {
        // 最新的排在前
        return msg2.time - msg1.time;
      });
      return sysMsgs;
    },
    customSysMsgs() {
      let customSysMsgs = this.$store.state.customSysMsgs.filter(msg => {
        if (msg.scene === 'p2p') {
          let content = JSON.parse(msg.content);
          msg.showText = `${content.content}`;
          msg.avatar = this.userInfos[msg.from].avatar;
          return msg;
        }
        return false;
      });
      return customSysMsgs;
    },
    msgList() {
      return this.sysType === 0 ? this.sysMsgs : this.customSysMsgs;
    }

  },
  methods: {
    deleteMsg(idServer) {
      this.$store.commit('deleteSysMsgs', {
        type: this.sysType,
        idServer: idServer
      });
    },
    clearMsgs() {
      var that = this;
      this.$vux.confirm.show({
        title: '确认要清空消息吗？',
        onConfirm() {
          that.$store.dispatch('resetSysMsgs', {
            type: that.sysType
          });
        }
      });
    },
    getTeamName(teamId) {
      let team = this.$store.state.teamlist.find(team => {
        return team.teamId === teamId;
      });
      return team && team.name || '';
    },
    handleTeamApply(msg, pass) {
      let action;
      switch (msg.type) {
        case 'applyTeam':
          action = pass ? 'passTeamApply' : 'rejectTeamApply';
          break;
        case 'teamInvite':
          action = pass ? 'acceptTeamInvite' : 'rejectTeamInvite';
          break;
        default:
          return;
      }
      this.$store.dispatch('delegateTeamFunction', {
        functionName: action,
        options: {
          idServer: msg.idServer,
          teamId: msg.to,
          from: msg.from,
          done: (error, obj) => {
            console.log('handleDone', obj);
          }
        }
      });
    },
    findTeamInfo(teamId) {
      var team = this.$store.state.teamlist.find(item => {
        return item.teamId === teamId;
      });
      return team && team.name || teamId;
    },
    showDelBtn(vNode) {
      if (vNode && vNode.data && vNode.data.attrs) {
        this.deleteIdServer = vNode.data.attrs.idServer;
        this.stopBubble = true;
        setTimeout(() => {
          this.stopBubble = false;
        }, 20);
      }
    },
    hideDelBtn() {
      if (this.deleteIdServer !== null && !this.stopBubble) {
        // 用于判断是否前置状态是显示删除按钮
        this.deleteIdServer = null;
        return true;
      }
      return false;
    }
  }
});

/***/ }),

/***/ 473:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-4871118c","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/SysMsgs.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 4)(true);
// imports


// module
exports.push([module.i, "\n.p-sysmsgs .u-list {\n    height: 100%;\n    overflow-y: scroll;\n}\n.p-sysmsgs p {\n    word-wrap: normal;\n    word-break: break-all;\n    color: #333;\n}\n.p-sysmsgs .g-teamSys {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 100;\n    -webkit-flex-grow: 100;\n       -moz-box-flex: 100;\n        -ms-flex-positive: 100;\n            flex-grow: 100;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n       -moz-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: hidden;\n}\n.p-sysmsgs .g-teamSys .m-info {\n    -webkit-flex-shrink: 1;\n        -ms-flex-negative: 1;\n            flex-shrink: 1;\n    overflow: hidden;\n}\n.p-sysmsgs .g-teamSys .m-info .u-time {\n    color: #aaa;\n}\n.p-sysmsgs .g-teamSys .m-info .u-desc {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: #aaa;\n    font-size: 1rem;\n}\n.p-sysmsgs .g-teamSys .m-options{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-sysmsgs .g-teamSys .m-options .weui-btn.weui-btn_mini {\n    padding: 0;\n    width: 3rem;\n    height: 2rem;\n}\n.p-sysmsgs .g-teamSys .m-options .weui-btn + .weui-btn {\n    margin-top: 0;\n    margin-left: 0.5rem;\n}\n.p-sysmsgs .u-msg-state {\n    color: #aaa;\n    font-size: .9rem;\n}\n.p-sysmsgs .empty-hint{\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 5rem;\n    margin: auto;\n    text-align: center;\n}\n", "", {"version":3,"sources":["/Users/wangxudong/me/sayabc/vue-im-web-demo/src/pages/SysMsgs.vue"],"names":[],"mappings":";AA8NE;IACE,aAAa;IACb,mBAAmB;CACpB;AACD;IACE,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;CACb;AAED;IACE,qBAAc;IAAd,sBAAc;IAAd,kBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,sBAAe;IAAf,uBAAe;OAAf,mBAAe;QAAf,uBAAe;YAAf,eAAe;IACf,0BAA+B;IAA/B,uCAA+B;OAA/B,uBAA+B;QAA/B,uBAA+B;YAA/B,+BAA+B;IAC/B,0BAAoB;IAApB,4BAAoB;OAApB,uBAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,iBAAiB;CAiClB;AA/BC;IACE,uBAAe;QAAf,qBAAe;YAAf,eAAe;IACf,iBAAiB;CAYlB;AAVC;IACE,YAAY;CACb;AACD;IACE,iBAAiB;IACjB,wBAAwB;IACxB,oBAAoB;IACpB,YAAY;IACZ,gBAAgB;CACjB;AAGH;IACE,qBAAc;IAAd,sBAAc;IAAd,kBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,0BAAoB;IAApB,4BAAoB;OAApB,uBAAoB;QAApB,uBAAoB;YAApB,oBAAoB;CAYrB;AAVC;IACE,WAAW;IACX,YAAY;IACZ,aAAa;CACd;AAED;IACE,cAAc;IACd,oBAAoB;CACrB;AAGL;IACE,YAAY;IACZ,iBAAiB;CAClB;AACD;IACE,mBAAmB;IACnB,QAAQ;IACR,SAAS;IACT,UAAU;IACV,aAAa;IACb,mBAAmB;CACpB","file":"SysMsgs.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-sysmsgs {\n  .u-list {\n    height: 100%;\n    overflow-y: scroll;\n  }\n  p {\n    word-wrap: normal;\n    word-break: break-all;\n    color: #333;\n  }\n  \n  .g-teamSys {\n    display: flex;\n    flex-grow: 100;\n    justify-content: space-between;\n    align-items: center;\n    overflow: hidden;\n    \n    .m-info {\n      flex-shrink: 1;\n      overflow: hidden;\n\n      .u-time {\n        color: #aaa;\n      }\n      .u-desc {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        color: #aaa;\n        font-size: 1rem;\n      }\n    }\n\n    .m-options{\n      display: flex;\n      align-items: center;\n      \n      .weui-btn.weui-btn_mini {\n        padding: 0;\n        width: 3rem;\n        height: 2rem;\n      }\n      \n      .weui-btn + .weui-btn {\n        margin-top: 0;\n        margin-left: 0.5rem;\n      }\n    }\n  }\n  .u-msg-state {\n    color: #aaa;\n    font-size: .9rem;\n  }\n  .empty-hint{\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 5rem;  \n    margin: auto;\n    text-align: center;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 495:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-4871118c"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/SysMsgs.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  }, [_c('button-tab', {
    staticClass: "m-tab-top",
    model: {
      value: (_vm.sysType),
      callback: function($$v) {
        _vm.sysType = $$v
      },
      expression: "sysType"
    }
  }, [_c('button-tab-item', {
    staticClass: "u-tab-top"
  }, [_vm._v("系统消息")]), _vm._v(" "), _c('button-tab-item', {
    staticClass: "u-tab-top"
  }, [_vm._v("自定义消息")])], 1), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  }), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "right"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.clearMsgs($event)
      }
    },
    slot: "right"
  }, [_vm._v("清空")])], 1), _vm._v(" "), _c('div', {
    staticClass: "m-article-main p-sysmsgs"
  }, [_c('group', {
    staticClass: "u-list"
  }, [_vm._l((_vm.msgList), function(msg) {
    return [(msg.type === "applyTeam" || msg.type === "teamInvite") ? _c('cell', {
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
      key: msg.idServer,
      staticClass: "u-list-item",
      attrs: {
        "idServer": msg.idServer
      }
    }, [_c('img', {
      staticClass: "icon",
      attrs: {
        "slot": "icon",
        "width": "24",
        "src": msg.avatar
      },
      slot: "icon"
    }), _vm._v(" "), _c('div', {
      staticClass: "g-teamSys",
      attrs: {
        "slot": "child"
      },
      slot: "child"
    }, [_c('div', {
      staticClass: "m-info"
    }, [_c('span', {
      staticClass: "u-name"
    }, [_vm._v(_vm._s(msg.from))]), _vm._v(" "), _c('span', {
      staticClass: "u-time"
    }, [_vm._v(_vm._s(msg.showTime))]), _vm._v(" "), _c('p', {
      staticClass: "u-desc"
    }, [_vm._v(_vm._s(msg.desc))]), _vm._v(" "), (msg.ps) ? _c('p', {
      staticClass: "u-desc"
    }, [_vm._v(_vm._s(("留言:" + (msg.ps))))]) : _vm._e()]), _vm._v(" "), (_vm.deleteIdServer !== msg.idServer) ? _c('div', {
      staticClass: "m-options",
      attrs: {
        "slot": "default"
      },
      slot: "default"
    }, [(msg.state === "init") ? [_c('x-button', {
      attrs: {
        "type": "primary",
        "mini": true,
        "action-type": "button"
      },
      nativeOn: {
        "click": function($event) {
          _vm.handleTeamApply(msg, true)
        }
      }
    }, [_vm._v("同意")]), _vm._v(" "), _c('x-button', {
      attrs: {
        "type": "warn",
        "mini": true,
        "action-type": "button"
      },
      nativeOn: {
        "click": function($event) {
          _vm.handleTeamApply(msg, false)
        }
      }
    }, [_vm._v("拒绝")])] : _c('div', {
      staticClass: "u-msg-state"
    }, [_vm._v("\n                " + _vm._s(msg.state === 'error' ? '已过期' : msg.state === 'rejected' ? '已拒绝' : '已同意') + "\n              ")])], 2) : _vm._e()]), _vm._v(" "), _c('span', {
      staticClass: "u-tag-del",
      class: {
        active: _vm.deleteIdServer === msg.idServer
      },
      on: {
        "click": function($event) {
          _vm.deleteMsg(msg.idServer)
        }
      }
    })]) : _c('cell', {
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
      key: msg.idServer,
      staticClass: "u-list-item",
      attrs: {
        "title": msg.showText,
        "value": msg.showTime,
        "inline-desc": msg.desc,
        "idServer": msg.idServer
      }
    }, [_c('img', {
      staticClass: "icon",
      attrs: {
        "slot": "icon",
        "width": "24",
        "src": msg.avatar
      },
      slot: "icon"
    }), _vm._v(" "), _c('span', {
      staticClass: "u-tag-del",
      class: {
        active: _vm.deleteIdServer === msg.idServer
      },
      on: {
        "click": function($event) {
          _vm.deleteMsg(msg.idServer)
        }
      }
    })])]
  })], 2), _vm._v(" "), (!_vm.msgList || _vm.msgList.length < 1) ? _c('div', {
    staticClass: "empty-hint"
  }, [_vm._v("暂无任何消息")]) : _vm._e()], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4871118c", module.exports)
  }
}

/***/ }),

/***/ 518:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-4871118c","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/SysMsgs.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-4871118c","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./SysMsgs.vue */ 473);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 5)("684463cd", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4871118c\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SysMsgs.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4871118c\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SysMsgs.vue");
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