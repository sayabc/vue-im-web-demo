<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import cookie from "./utils/cookie";
import md5 from "./utils/md5";
import Utils from "./utils/index";

export default {
  name: "App",
  mounted() {
    let accountId = 'a81'
    // 存cookie当前的uid和sdktoken
    cookie.delCookie('uid')
    cookie.delCookie('sdktoken')

    cookie.setCookie("uid", accountId);
    cookie.setCookie("sdktoken", md5('123456'));

    // 同步updateAccount 并且开始 SDK 连接工作
    // this.$store.commit('updateAccount', accountId)
    this.$store.dispatch('connect')
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
