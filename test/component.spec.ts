import { describe, expect, it } from 'vitest'
import DialogConfirm from '@/components/DialogConfirm.vue'
import { mountWithVuetify } from './helpers'
import { VCard } from 'vuetify/components'

describe('component DialogConfirm.vue', () => {
  it('should not open', async () => {
    const wrapper = mountWithVuetify(DialogConfirm)
    expect(wrapper.text()).toBe('')
  })

  it('should open and close', async () => {
    const wrapper = mountWithVuetify(DialogConfirm)
    wrapper.vm.open('message')
    await nextTick()
    const cardWrapper = wrapper.getComponent(VCard)
    expect(cardWrapper.text()).toContain('message')
    expect(cardWrapper.html()).toMatchSnapshot()
    expect(cardWrapper.find('button').exists()).toBe(true)

    await cardWrapper.find('button').trigger('click')
    await nextTick()
    expect(cardWrapper.isVisible()).toBe(false)
  })
})
