import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 900,
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173',
  },
})
