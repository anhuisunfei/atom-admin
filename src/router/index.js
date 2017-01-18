import Vue from 'vue'
import Router from 'vue-router'
import elements from './elements'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
    name: 'Dashboard',
    path: '/',
    component: require('../views/Home')
  }, elements]
})
