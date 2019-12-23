import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes/'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createStore } from './store/'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import TinyMCE from 'tinymce-vue-2'
import Editor from '@tinymce/tinymce-vue';

import moment from 'moment'

import Chart from 'chart.js'

import ICountUp from 'vue-countup-v2'

Vue.component('ICountUp', ICountUp)

Vue.component('multiselect', window.VueMultiselect.default)


Vue.component('editor', Editor);

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).fromNow();
  }
});

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

const store = createStore()

import './css/style.scss'

new Vue({
  store,
  router: router,
  render: h => h(App)
}).$mount('#app')
