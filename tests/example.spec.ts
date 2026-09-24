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

    
  // Write a Playwright TypeScript test named TC-ATC-006 that navigates to https://academybugs.com/find-bugs/, dismisses the cookie consent banner if present, clicks the Flamingo Tshirt link, adds it to cart, opens the cart, changes the quantity from 1 to 2, clicks the update/refresh cart action, and asserts the product subtotal shows $30.28

    test('TC-ATC-006 - Update product quantity and verify subtotal', async ({ page }) => {
  await page.goto('https://academybugs.com/find-bugs/');
  await page.getByRole('button', { name: 'Functional only' }).click();
  const tutorialClose = page.getByRole('button', { name: '×' });
if (await tutorialClose.isVisible().catch(() => false)) {
  await tutorialClose.click();
}
  await page.locator('#ec_product_image_effect_4881370').getByRole('link').filter({ hasText: /^$/ }).click();
  await page.getByRole('button', { name: /add to cart/i }).click();
  await page.getByRole('link', { name: /cart/i }).click();
  await page.getByRole('spinbutton').fill('2');
  await page.getByText('UPDATE', { exact: true }).click();
  await expect(page.getByText('$30.28', { exact: true }).first()).toBeVisible();
});