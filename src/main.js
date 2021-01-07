// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import $ from 'jquery'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use($)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  methods: {
    doCopy: function (e) {
      let selectEl = $(e.target).parents('.click-to-copy').find('.click-to-copy-text')[0]

      selectEl.select()
      document.execCommand('copy')
      alert()
    }
  },
  router,
  template: '<App/>',
  components: { App }
})
