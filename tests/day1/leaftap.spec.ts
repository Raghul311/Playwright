import {expect, test} from"@playwright/test";
test("Leaftap login",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("#username","demosalesmanager"),
    await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");
    await page.click(".decorativeSubmit");

    await page.waitForTimeout(5000);

    await page.locator(`//a[contains(text(),"CRM/SFA")]`).click();
    await page.click(`//a[text()="Leads"]`);
    await page.click(`//a[text()="Create Lead"]`);
    await page.fill(`#createLeadForm_companyName`,"TATA"); //cname
    await page.fill(`#createLeadForm_firstName`,"Raghul"); //fname
    await page.fill(`#createLeadForm_lastName`,"Kumar"); //lname
    await page.selectOption(`#createLeadForm_dataSourceId`,{value:`LEAD_EMPLOYEE`});

//     const industry = page.locator(`#createLeadForm_industryEnumId>option`);
//     const countInd = await industry.count();

//    for(let i=0; i<countInd; i++){
//     console.log(`the index ${i} has this value ${await industry.nth(i).innerText()}`)
//    }
//    await page.waitForTimeout(10000)
await page.click(`.smallSubmit`);

const text= page.locator(`#viewLead_statusId_sp`);
await expect(text).toBeVisible();
//const text1=await text.innerText();
await expect(text).toContainText("Assigned") 
})