describe('Notification Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('Add and delete notification', () => {
    const store = useNotificationStore()
    store.addNotification('A notification!')
    expect(store.notificationCount).toBe(1)
    store.delNotification(0)
    expect(store.notifications.length).toBe(0)
  })

  it('Notification utils', () => {
    const store = useNotificationStore()
    Notify.error('Error notification')
    const notification = store.notifications.at(-1)
    expect(notification!.text).toBe('Error notification')
    expect(notification!.type).toBe('error')
  })
})

export {}
