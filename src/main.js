import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCalendar from 'v-calendar'
import VModal from 'vue-js-modal'
import VueLogger from 'vuejs-logger';
//import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/scss/bkr.scss'
import 'bootstrap/dist/js/bootstrap.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faEnvelope, faPhoneSquareAlt, faTicketAlt, faCalendarAlt, faGlobe, faPoundSign } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faUserSecret,
    faEnvelope,
    faPhoneSquareAlt,
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faTicketAlt,
    faCalendarAlt,
    faGlobe,
    faPoundSign,
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const isProduction = process.env.NODE_ENV === 'production';
Vue.use(VueLogger, {
  isEnabled: true,
  logLevel : isProduction ? 'error' : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true
});

Vue.config.productionTip = false

Vue.use(VCalendar)
Vue.use(VModal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
