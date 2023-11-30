const playwright = require('playwright');

(async () => {
    // Launch a browser
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();

    // Navigate to the website
    await page.goto('https://example.com');

    // Take a screenshot
    await page.screenshot({ path: 'example.png' });

    // Close the browser
    await browser.close();
})();