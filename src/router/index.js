import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Session from '@/pages/session/Index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/teacherim',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/teacherim/sayabc/session',
      name: 'Session',
      component: Session
    }
  ]
})
