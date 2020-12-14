import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap'
import mavonEditor from 'mavon-editor'

// css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../public/statics/css/lora.css'
import '../public/statics/css/open_sans.css'
import "mavon-editor/dist/css/index.css"

// js
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './axios.js'
import './permission.js'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
