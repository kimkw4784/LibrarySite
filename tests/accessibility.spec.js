const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

test.describe('Web Accessibility Tests', () => {
  test('Homepage should not have any automatically detectable accessibility violations', async ({ page }) => {
    // Assuming Vite is running on localhost:5173
    await page.goto('http://localhost:5173/');

    // Wait for network to be somewhat idle or just load
    await page.waitForLoadState('networkidle');

    // Run axe accessibility check
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    // Attach results to test report for debugging (optional)
    await test.info().attach('accessibility-scan-results', {
      body: JSON.stringify(accessibilityScanResults, null, 2),
      contentType: 'application/json'
    });

    // Check for violations
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
