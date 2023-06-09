import { createRouter, createWebHistory } from 'vue-router'
import Options from '../views/Options.vue'
import Composition from '../views/Composition.vue'

const routes = [
  {
    path: '/',
    name: 'Options',
    component: Options
  },
  {
    path: '/composition',
    name: 'Composition',
    component: Composition
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
