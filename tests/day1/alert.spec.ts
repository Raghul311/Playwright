import { test } from "@playwright/test";
test("Alert handeling",async({page})=>{
    await page.goto(`https://leafground.com/alert.xhtml`);
    // page.on(`dialog`,async(alert)=>{
    //     await alert.accept("Raghul");

    // })
    await page.click(`(//span[text()="Show"])[5]`);
    await page.waitForTimeout(5000);
})