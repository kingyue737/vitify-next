import { render } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import type { ComponentMountingOptions } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import { createTestingPinia } from '@pinia/testing'

export function renderWithVuetify(
  component: Parameters<typeof render>[0],
  options: Parameters<typeof render>[1] = {},
) {
  const vuetify = createVuetify()
  return render(component, {
    ...options,
    global: {
      plugins: [vuetify, createTestingPinia()],
    },
  })
}

export function mountWithVuetify<T>(
  component: T,
  options: ComponentMountingOptions<T> = {},
): ReturnType<typeof mount<T>> {
  const vuetify = createVuetify()
  return mount(component, {
    ...(options as any),
    global: {
      plugins: [vuetify, createTestingPinia()],
    },
  })
}
