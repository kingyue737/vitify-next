import {
  createConfigForNuxt,
  defineFlatConfigs,
} from '@nuxt/eslint-config/flat'
import playwright from 'eslint-plugin-playwright'

export default defineFlatConfigs(
  createConfigForNuxt({
    dirs: {
      // components: ['src/components'], // this will turn off multi-word component name
      pages: ['src/pages'],
      composables: ['src/composables', 'src/utils'],
      layouts: ['src/layouts'],
      plugins: ['src/plugins'],
    },
  }),
  {
    ...playwright.configs['flat/recommended'],
    files: ['e2e/**/*.{js,ts,jsx,tsx}'],
  },
  {
    rules: {
      'vue/valid-v-slot': ['error', { allowModifiers: true }],
      'vue/no-multiple-template-root': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
)
