import Vue from 'vue'
import Router from 'vue-router'
import Boss from './views/Boss.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
      component: User
    },
    {
      path: '/boss',
      component: Boss
    }
  ]
})
