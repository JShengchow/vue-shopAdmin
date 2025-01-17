import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Login from './components/Login.vue'

import './assets/css/global.css'
import './assets/fonts/iconfont.css'

import axios from 'axios'
//请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Login,
  render: h => h(App)
}).$mount('#app')
