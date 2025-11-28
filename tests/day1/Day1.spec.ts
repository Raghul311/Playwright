import {test} from "@playwright/test";
test(`Interview prep`, async({page})=>{
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();

    await page.goto(`https://playwright.dev/docs/writing-tests`);
    await page.waitForTimeout(5000);
})