import {expect, test} from"@playwright/test";
import credentials from "../../data/login.json"
test.describe.serial(`series launch`,async()=>{
for(let data of credentials){
test(`Leaftap login via JSON ${data.tcID}`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("#username",data.username),
    await page.getByRole("textbox",{name:"Password"}).fill(data.password);
    await page.click(".decorativeSubmit");
    await page.waitForTimeout(5000);
})}})