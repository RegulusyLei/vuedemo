import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(MuseUI)
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
