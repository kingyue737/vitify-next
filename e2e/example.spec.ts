import { test, expect } from '@playwright/test'

test('example', async ({ page }) => {
  await page.goto('/')
  await page.getByText('Opinionated Starter Template').isVisible()
  await page.getByLabel("What's your name?").fill('kingyue')
  await page.getByRole('button', { name: 'Confirm', exact: true }).click()
  const locator = page.getByText('Hi, kingyue!')
  await locator.isVisible()
  await expect(locator).toBeHidden({ timeout: 6000 })
})
