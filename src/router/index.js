import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page from '../views/Page.vue'
import Fares from '../views/Fares.vue'
import Plan from '../views/Plan.vue'
import Events from '../views/Events.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/page/:slug',
    name: 'Page',
    component: Page,
  },
  {
    path: '/fares',
    name: 'Fares',
    component: Fares,
  },
  {
    path: '/plan',
    name: 'Plan',
    component: Plan,
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
