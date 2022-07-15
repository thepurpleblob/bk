import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
//import Page from '../views/Page.vue'
//import Fares from '../views/Fares.vue'
//import Plan from '../views/Plan.vue'
//import Events from '../views/Events.vue'
//import News from '../views/News.vue'
//import Thomas from '../views/Thomas.vue'
import Error404 from '../views/Error404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    //component: Home
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
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
    //component: Page,
    component: () => import(/* webpackChunkName: "page" */ '../views/Page.vue')
  },
  {
    path: '/fares',
    name: 'Fares',
    //component: Fares,
    component: () => import(/* webpackChunkName: "fares" */ '../views/Fares.vue')
  },
  {
    path: '/plan',
    name: 'Plan',
    //component: Plan,
    component: () => import(/* webpackChunkName: "plan" */ '../views/Plan.vue')
  },
  {
    path: '/news',
    name: 'News',
    //component: News,
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
  },
  {
    path: '/events',
    name: 'Events',
    //component: Events,
    component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue')
  },
  {
    path: '/thomas',
    name: 'Thomas',
    //component: Thomas,
    component: () => import(/* webpackChunkName: "thomas" */ '../views/Thomas.vue')
  },
  {
    path: '/404',
    name: 'error404',
    component: Error404,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
});

export default router
