import { test, expect } from '@playwright/test';
test('TC-ATC-005 - Add a single product to the cart successfully', async ({ page }) => {
  await page.goto('https://academybugs.com/');
  await page.getByRole('button', { name: 'Functional only' }).click({ force: true });
  await page.getByRole('button', { name: '×' }).click();
  await page.getByRole('link', { name: 'Find Bugs' }).click();
  await page.locator('#ec_product_image_effect_4881370').getByRole('link').filter({ hasText: /^$/ }).click();
  await expect(page.getByText('$15.14', { exact: true }).first()).toHaveText('$15.14');
  await page.getByRole('button', { name: /add to cart/i }).click();
  await page.getByRole('link', { name: /cart/i }).click();
  await expect(page.getByRole('link', { name: 'Flamingo Tshirt' })).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  await expect(page.getByText('$15.14', { exact: true }).first()).toBeVisible();
  });