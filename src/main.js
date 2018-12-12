// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// import './assets/css/reset.css'
// import './components/Toast/toast.css'

import Toast from './components/Toast/index'

Vue.config.productionTip = false

Vue.use(Toast)
// 将该方法注册到window上
Window.vueToast = Toast

// 检查rtc支持情况 挂在了window.rtcSupport
require('./sdk/rtcSupport.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
