const { test, expect } = require('@playwright/test');

test('example test', async ({ page }) => {
  // Launch a browser and navigate to the website
  await page.goto('http://20.119.109.144:8080/');

  // Take a screenshot
  await page.screenshot({ path: 'capture.png' });

  // Add assertions here if needed
  await expect(page).toHaveURL('http://20.119.109.144:8080/');
});