const {test,expect }=require('@playwright/test')
const logger = require('../utils/logger')
const { getTestData } = require('../utils/excelreader');    
const config = require("../config.json");

const HomePage=require("../Pages/Homepage")
const AddcustomerPage=require("../Pages/Addcustomerpage")
const Telecomprojectpage=require("../Pages/Telecomprojectpage")
const customeridpage=require("../Pages/customeridpage")
// ✅ Load Excel data
const testData = getTestData('./testdata/testdata.xlsx', 'CustomerData');

// ✅ Loop through each row and generate a test
for (const dataRow of testData) {   
test(`Add customer: ${dataRow.FirstName}`, async ({page})=>{
    logger.info ("Starting test: Verify Guru99 home screen")
    await page.goto(config.baseUrl)
    logger.info(`Navigated to ${config.baseUrl}`);

    const Homepage=new HomePage(page)
    await Homepage.verifylogo()
    await Homepage.clicktelecomproject()

    const Telecomproject=new Telecomprojectpage(page)
    await Telecomproject.verifycompanylogo()
    await Telecomproject.clickaddcustomeroption()

    const Addcustomer=new AddcustomerPage(page)
    await Addcustomer.verifyaddcustomerheader()
    await Addcustomer.fillallinputfields(dataRow)
    await Addcustomer.clicksubmitbutton()

    const getcustomerid=new customeridpage(page)
    await getcustomerid.verify_customerID_message()
    await getcustomerid.take_customerID()
    logger.info("Test completed successfully")
})
}