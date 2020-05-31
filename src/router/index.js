import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/pie',
    name: 'Pie',
    component: () => import('../views/Pie.vue')
  },
  {
    path: '/scatter',
    name: 'Scatter',
    component: () => import('../views/Scatter.vue')
  },
  {
    path: '/radar',
    name: 'Radar',
    component: () => import('../views/Radar.vue')
  },
  {
    path: '/gauge',
    name: 'Gauge',
    component: () => import('../views/Gauge.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/Map.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
