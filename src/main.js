// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import NProgress from 'vue-nprogress'
import {
  sync
} from 'vuex-router-sync'
import store from './store'
import router from './router'

import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
Vue.use(NProgress)

Vue.config.devtools = true

sync(store, router)
const nprogress = new NProgress({
  parent: '.nprogress-container'
})

const app = new Vue({
  router,
  store,
  nprogress,
  ...App
})

export {
  app,
  router,
  store
}
/* eslint-disable no-new */
