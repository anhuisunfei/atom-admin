import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({
    y: 0
  }),
  routers: [{
    name: 'Home',
    path: '/',
    component: require('../views/Home')
  }]
})
