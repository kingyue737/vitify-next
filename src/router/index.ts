import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layout/default.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DefaultLayout,
    },
  ],
})

export default router
