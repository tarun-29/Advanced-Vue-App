import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TopStats from '@/views/TopStats.vue'
import Seasons from '@/views/Seasons.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/batandbowl',
    name: 'Bat And Bowl',
    component : TopStats
  },
  {
    path: '/seasons',
    name: 'Seasons',
    component : Seasons
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
