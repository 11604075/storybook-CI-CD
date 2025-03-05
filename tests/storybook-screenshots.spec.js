import { test, expect } from '@playwright/test';

test('Capture Storybook Screenshot', async ({ page }) => {
  // Open Storybook
  await page.goto('http://localhost:6006'); 

  // Wait for Storybook UI to load
  await page.waitForSelector('#storybook-explorer-menu', { timeout: 10000 });

  // Locate Storybook’s preview iframe
  const iframe = page.frameLocator('iframe#storybook-preview-iframe');

  // Wait for the component to be visible inside the iframe
  const component = iframe.locator('body');
  await component.waitFor();

  // Capture a screenshot and compare it with the baseline
  await expect(component).toHaveScreenshot({ maxDiffPixels: 20 });

});