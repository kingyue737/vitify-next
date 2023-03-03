import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls } }),
    vuetify({ autoImport: true }),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        'vue-router',
        {
          vuetify: [
            'useTheme',
            'useRtl',
            'useLocale',
            'useDisplay',
            'useLayout',
          ],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/stores'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
