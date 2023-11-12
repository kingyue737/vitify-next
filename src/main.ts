import { createApp, type Plugin } from 'vue'

import App from './App.vue'
import '@/assets/styles/index.css'

const app = createApp(App)

Object.values(
  import.meta.glob<Plugin>('./plugins/*.ts', {
    eager: true,
    import: 'default',
  }),
).forEach((v) => app.use(v))

app.mount('#app')
