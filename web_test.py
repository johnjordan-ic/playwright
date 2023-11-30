import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        # Launch the browser
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Navigate to the website
        await page.goto('http://20.119.109.144:8080/')

        # Take a screenshot
        await page.screenshot(path='capture.png')

        # Close the browser
        await browser.close()

asyncio.run(main())