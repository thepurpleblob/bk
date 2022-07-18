import Vue from 'vue'
import VueRouter from 'vue-router'
import ErrorPage404 from '../views/ErrorPage404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomePage.vue')
  },
  {
    path: '/page/:slug',
    name: 'Page',
    component: () => import(/* webpackChunkName: "page" */ '../views/PageOther.vue')
  },
  {
    path: '/fares',
    name: 'FaresTimes',
    component: () => import(/* webpackChunkName: "fares" */ '../views/FaresTimes.vue')
  },
  {
    path: '/plan',
    name: 'PlanVisit',
    component: () => import(/* webpackChunkName: "plan" */ '../views/PlanVisit.vue')
  },
  {
    path: '/news',
    name: 'NewsItems',
    component: () => import(/* webpackChunkName: "news" */ '../views/NewsItems.vue')
  },
  {
    path: '/events',
    name: 'EventsList',
    component: () => import(/* webpackChunkName: "events" */ '../views/EventsList.vue')
  },
  {
    path: '/thomas',
    name: 'ThomasEvent',
    component: () => import(/* webpackChunkName: "thomas" */ '../views/ThomasEvent.vue')
  },
  {
    path: '/404',
    name: 'error404',
    component: ErrorPage404,
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
