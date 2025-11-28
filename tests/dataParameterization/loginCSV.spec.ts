import {expect, test} from"@playwright/test";
import {parse} from "csv-parse/sync"
import fs from "fs"

test.describe.serial("test",async()=>{
let records: any[]= parse(fs.readFileSync(`data/login.csv`),{columns:true,skip_empty_lines:true})
for(let data of records){
test(`Leaftap login via CSV ${data.tcID}`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("#username",data.username as string),
    await page.getByRole("textbox",{name:"Password"}).fill(data.password as string);
    await page.click(".decorativeSubmit");
    await page.waitForTimeout(5000);
})}})