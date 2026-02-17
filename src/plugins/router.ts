 
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:meta-layouts'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes as any),
})
