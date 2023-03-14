import { render } from '@testing-library/vue'
import { createVuetify } from 'vuetify'
import { createTestingPinia } from '@pinia/testing'

export function renderWithVuetify(
  component: Parameters<typeof render>[0],
  options: Parameters<typeof render>[1] = {}
) {
  const vuetify = createVuetify()
  return render(component, {
    ...options,
    global: {
      plugins: [vuetify, createTestingPinia()],
    },
  })
}
