export {}

import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** Drawer item icon */
    icon?: string
    title?: string
  }
}
