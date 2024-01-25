import Homepage from '@/pages/homepage.vue'
import { fireEvent } from '@testing-library/vue'
import { renderWithVuetify } from '@/../test/helpers'

describe('homepage', () => {
  it('Notify correctly', async () => {
    const { getByText, getByLabelText } = renderWithVuetify(Homepage)
    getByText('Opinionated Starter Template')
    const input = getByLabelText("What's your name?")
    await fireEvent.update(input, 'kingyue')

    const button = getByText('Confirm')
    await fireEvent.click(button)

    const store = useNotificationStore()
    expect(store.addNotification).toBeCalledWith('Hi, kingyue!', 'success')
  })
})
