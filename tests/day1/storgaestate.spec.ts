import {expect, test} from"@playwright/test";
test("Leaftap login",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("#username","raghulkumar311810@agentforce.com"),
    await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");
    await page.click(".decorativeSubmit");

    await page.waitForTimeout(5000);
})