import { test, expect } from '@playwright/test';

test('Capture Storybook Screenshot', async ({ page }) => {
  // Open Storybook
  await page.goto('http://localhost:6006'); 

  // Wait for Storybook UI to load
  await page.waitForSelector('#storybook-explorer-menu', { timeout: 10000 });

  // Locate Storybook’s iframe
  const iframe = page.frameLocator('iframe#storybook-preview-iframe');

  // Wait for the component inside the iframe to load
  const component = iframe.locator('body');  
  await component.waitFor();

  // Take a screenshot of the component
  await expect(component).toHaveScreenshot('component-snapshot.png');
});