<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import cookie from "./utils/cookie";
import md5 from "./utils/md5";
import Utils from "./utils/index";

function login() {
  //自动登陆
  // 本demo做一次假登录
  // 真实场景应在此向服务器发起ajax请求
  let sdktoken = md5("123456");
  // 服务端帐号均为小写
  cookie.setCookie("uid", this.temAccountName.toLowerCase());
  cookie.setCookie("sdktoken", sdktoken);
}

export default {
  name: "App",
  data () {
    return {
      temAccountName: ''
    }
  },
  async mounted() {
    // 从url params 取值  accountId 为当前登录人的id
    let accountId = Utils.getUrlParam('accountId')
    let cookieUid = cookie.readCookie('uid')

    if(accountId || cookieUid) {

      // demo 和 测试 : 1. demo  2. 测试 uid = sdktoken='33773'  '190682
      // let uid = accountId || cookieUid || '33773'
      // let sdktoken = accountId || cookieUid
      let uid = '190682'
      let sdktoken = '190682'

      let demoUid = accountId || cookieUid
      let demoSdkToken = md5("123456")

      // 存cookie当前的uid和sdktoken
      cookie.setCookie("uid", uid);
      cookie.setCookie("sdktoken", sdktoken);
      // cookie.setCookie("uid", demoUid.toLowerCase()); // for demo
      // cookie.setCookie("sdktoken", demoSdkToken); // for demo

      // 同步updateAccount 并且开始 SDK 连接工作
      this.$store.commit('updateAccount', uid)
      this.$store.dispatch('connect')
    }else{
      vueToast && vueToast.center('Check the current url is correct!')
      console.error('Url with accountId or cookie should has uid!')
    }

  }
};
</script>

<style lang='less'>

@import './assets/css/reset.css';
@import './components/Toast/toast.css';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
