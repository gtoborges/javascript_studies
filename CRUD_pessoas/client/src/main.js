// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Layout, Form } from 'bootstrap-vue/es/components'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Form)
Vue.use(Layout)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

const axios = Axios.create({
  baseURL: 'http://localhost:3000/',
  responseType: 'json',
  crossdomain: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

Vue.prototype.$http = axios

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
