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
  async mounted() {
    // 从url params 取值  accountId 为当前登录人的id，isTeacher 是否是老师端登陆
    let accountId = Utils.getUrlParam('accountId');
    let isTeacher = Utils.getUrlParam('isTeacher');
    let token = Utils.getUrlParam('token');
    this.$store.commit('isTeacher',isTeacher);
    this.$store.commit('accountId',accountId);

    //let cookieUid = cookie.readCookie('uid')

    if(accountId) {

      // 存cookie当前的uid和sdktoken
      cookie.setCookie("uid", accountId);
      cookie.setCookie("sdktoken", accountId);
      cookie.setCookie("token", token);

      // 同步updateAccount 并且开始 SDK 连接工作
      this.$store.commit('updateAccount', accountId)
      this.$store.dispatch('connect')
    }else{
      this.$toast && this.$toast.center('Check the current url is correct!')
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
