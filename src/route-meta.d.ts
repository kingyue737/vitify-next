import 'vue-router'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    icon?: string
    title?: string
    subtitle?: string
    drawerIndex?: number
  }
}
