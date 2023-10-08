import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:meta-layouts'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes) => setupLayouts(routes),
})
