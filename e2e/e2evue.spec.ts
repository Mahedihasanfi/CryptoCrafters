import { test } from '@playwright/test'

test('visits the app root url', async ({ page }) => {
await page.goto('http://localhost:5173/');
await page.getByRole('link', { name: 'Learn' }).click();
await page.getByRole('link', { name: 'News' }).click();
await page.getByRole('link', { name: 'Current Price' }).click();
await page.getByLabel('Select a coin to view the current situation:').selectOption('Qwsogvtv82FCd');
await page.getByRole('link', { name: 'Investment' }).click();
await page.getByLabel('Username:').click();
await page.getByLabel('Username:').fill('asdf');
await page.getByLabel('Password:').click();
await page.getByLabel('Password:').fill('adsasd');
await page.getByRole('button', { name: 'Login' }).click();
})
