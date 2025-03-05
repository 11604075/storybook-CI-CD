import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://localhost:6006',
    viewport: { width: 1280, height: 720 }, // Ensure fixed screen size
  },
  outputDir: 'tests/snapshots-diff/', // Store visual diff results here
  testDir: './tests', // Ensure Playwright looks for tests in the correct folder
});