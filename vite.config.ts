import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import SvgLoader from 'vite-svg-loader'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Modify from '@kingyue/rollup-plugin-modify'
import * as mdicons from '@mdi/js'
import { mapKeys, kebabCase } from 'lodash'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Modify({
      exclude: ['node_modules/**'],
      find: /\b(?<![/\w])(mdi-[\w-]+)\b(?!\.)/,
      replace: (match: string) =>
        mapKeys(mdicons, (v, k) => kebabCase(k))[match],
      sourcemap: false,
    }),
    VueRouter({ importMode: 'sync', dts: './src/typed-router.d.ts' }),
    Vue({ template: { transformAssetUrls } }),
    SvgLoader({
      svgoConfig: {
        plugins: [
          'cleanupEnableBackground',
          'removeDoctype',
          'removeMetadata',
          'removeComments',
          'removeXMLNS',
          'removeXMLProcInst',
          'sortDefsChildren',
          'convertTransform',
          {
            name: 'addClassesToSVGElement',
            params: { className: 'v-icon__svg' },
          },
        ],
      },
    }),
    Layouts(),
    Vuetify({ autoImport: true }),
    Components({ dts: './src/components.d.ts', types: [] }),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        VueRouterAutoImports,
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
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    include: ['test/**/*.test.ts', 'src/**/__tests__/*'],
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    deps: {
      inline: ['vuetify'],
    },
  },
})
