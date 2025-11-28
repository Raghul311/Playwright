import { test } from "@playwright/test";
test("frame handeling",async({page})=>{
    await page.goto(`https://leafground.com/frame.xhtml`);
   const frameURL1= page.frame({url:`https://leafground.com/framebutton.xhtml`});
   await frameURL1?.locator(`#Click`).click();
   await page.waitForTimeout(5000);
})