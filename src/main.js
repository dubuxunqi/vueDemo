import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueI18n from 'vue-i18n'
import "babel-polyfill"
import "./assets/js/jquery.min.js"
import "./assets/css/basic.css"
import "./assets/css/bottomAndTop.css"
import "./assets/css/deal.css"
Vue.config.productionTip = false


Vue.prototype.$ajax = axios

//国际化
import i18n from './common/lang'




/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
})
