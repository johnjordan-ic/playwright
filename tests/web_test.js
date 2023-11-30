const playwright = require('playwright');

(async () => {
    // Launch a browser
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();

    // Navigate to the website
    await page.goto('http://20.119.109.144:8080/');

    // Take a screenshot
    await page.screenshot({ path: 'capture.png' });

    // Close the browser
    await browser.close();
})();