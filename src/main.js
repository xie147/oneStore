// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugin/rem.js'
import iView from 'iview'
import './plugin/iview/iview.css'
import './plugin/common.css'
import store from './vuex'
Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
var app =new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
