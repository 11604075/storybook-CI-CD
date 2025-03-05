import { test, expect } from '@playwright/test';

test('Capture Storybook Screenshot', async ({ page }) => {
  // Run Storybook locally before this test
  await page.goto('http://localhost:6006'); // Adjust the URL if needed

  // Wait for the Storybook UI to load
  await page.waitForSelector('#storybook-explorer-menu'); 

  // Capture screenshot of the entire Storybook UI
  await page.screenshot({ path: 'storybook-screenshot.png', fullPage: true });

  // Capture a specific component (adjust selector accordingly)
  const component = await page.$('.sb-show-main');
  await component.screenshot({ path: 'component-screenshot.png' });
});
