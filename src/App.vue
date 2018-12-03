<template>
  <div class="g-window">
  <!-- <div> -->
    <nav-bar v-show="showNav"></nav-bar>
    <!-- 切页动画设置 -->
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <fullscreen-img></fullscreen-img>
    <loading></loading>

    <div id="container">
      <show-call-page
        v-if="chatVoiceShowCall && !isHandUp"
      />
    </div>
    <div id="remoteContainer">
      <show-be-call-page
        v-if="chatVoiceShowBeCall && !isHandUp"
      />
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import {Group, Cell, XHeader, XInput, XTextarea, XButton, XSwitch, Datetime, ViewBox, Search,
        ButtonTab, ButtonTabItem, Divider, Actionsheet, AlertPlugin, ConfirmPlugin} from 'vux'
import Loading from './pages/components/Loading'
import FullscreenImg from './pages/components/FullscreenImg'
// ToastPlugin是对vux中的ToastPlugin在使用上的简单封装。
import ToastPlugin from './plugins/toastPlugin'

// 全局注册vux的组件
Vue.component('Group', Group)
Vue.component('Cell', Cell)
Vue.component('Datetime', Datetime)
Vue.component('ButtonTab', ButtonTab)
Vue.component('ButtonTabItem', ButtonTabItem)
Vue.component('Divider', Divider)
Vue.component('Search', Search)
Vue.component('XInput', XInput)
Vue.component('XTextarea', XTextarea)
Vue.component('XButton', XButton)
Vue.component('XHeader', XHeader)
Vue.component('XSwitch', XSwitch)
Vue.component('ActionSheet', Actionsheet)

Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)

import NavBar from './pages/components/NavBar'
import cookie from './utils/cookie'
import pageUtil from './utils/page'
import ShowCallPage from './pages/sayabc/components/ShowCallPage'
import ShowBeCallPage from './pages/sayabc/components/ShowBeCallPage'

const sessionHistory = window.sessionStorage

require('./sdk/NIM_Web_SDK_v5.8.0.js')
require('./sdk/NIM_Web_WebRTC_v5.8.0.js')
// 检查rtc支持情况 挂在了window.rtcSupport
require('./sdk/rtcSupport.js')


export default {
  data () {
    return {
      transitionName: 'forward'
    }
  },
  mounted() {
  },
  watch: {
    // 更新页面所在位置，用于判断是前进页还是后退页
    '$route' (to, from) {
      if (to && from) {
        let toPath = to.path
        let fromPath = from.path
        let count = parseInt(sessionHistory.getItem('count'))
        // 如果是导航页或者没有初始记录
        if (Number.isNaN(count)) {
          count = 1
          this.transitionName = 'forward'
        } else {
          count += 1
          let fromCount = parseInt(sessionHistory.getItem(fromPath))
          let toCount = parseInt(sessionHistory.getItem(toPath))
          if (toCount < fromCount && fromCount < count && (!pageUtil.showNav(fromPath))) {
            this.transitionName = 'backward'
            count = toCount
          } else {
            this.transitionName = 'forward'
          }
          if (pageUtil.showNav(toPath)) {
            count = 1
          }
        }
        sessionHistory.setItem(toPath, count)
        sessionHistory.setItem('count', count)
      }
    }
  },
  // 所有页面更新都会触发此函数
  updated () {
    // 提交sdk连接请求
    this.$store.dispatch('connect')
    this.$store.dispatch('updateRefreshState')
  },
  components: {
    NavBar,
    ViewBox,
    Loading,
    FullscreenImg,
    ShowCallPage,
    ShowBeCallPage
  },
  computed: {
    // 是否显示导航条
    showNav () {
      return pageUtil.showNav(this.$route.path)
      // return false
    },
    chatVoiceShowCall () {
      return this.$store.state.chatVoiceShowCall
    },
    chatVoiceShowBeCall  () {
      return this.$store.state.chatVoiceShowBeCall
    },
    isHandUp () {
      return this.$store.state.isHandUp
    }

  }
}
</script>

<style  type="text/css">
/* 覆盖全局样式 */
.vux-cell-primary {
  flex-grow: 1;
  overflow: hidden;
  padding-right: 12%;
}
.vux-label {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
#container, #remoteContainer {
  position: absolute;
  top: 0;
  z-index: 999;
}
</style>

