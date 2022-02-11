import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@/assets/fonts/Moma.woff'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faEnvelope, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


console.log(process.env)

library.add(faUserSecret, faEnvelope, faPhoneSquareAlt, faFacebookSquare, faInstagramSquare, faTwitterSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
