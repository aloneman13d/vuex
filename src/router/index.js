import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
