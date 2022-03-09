import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCalendar from 'v-calendar'
import VModal from 'vue-js-modal'
//import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/scss/bkr.scss'
import 'bootstrap/dist/js/bootstrap.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faEnvelope, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as VueGoogleMaps from 'vue2-google-maps'


console.log(process.env)

library.add(faUserSecret, faEnvelope, faPhoneSquareAlt, faFacebookSquare, faInstagramSquare, faTwitterSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VCalendar)
Vue.use(VModal)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDIcGs1SKninCuIGgHuLVY4Z0nGDzo3hWQ',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
