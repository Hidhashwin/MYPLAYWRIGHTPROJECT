const { test, expect } = require('@playwright/test');
const logger = require("../utils/logger");

const config = require("../config.json");
const HomePage = require("../Pages/Homepage");
const AddTariffplan_customer_Page = require('../Pages/AddTariffplan_customer_Page');
const { getTestData } = require('../utils/excelreader');
const testData = getTestData('./testdata/testdata.xlsx', 'CustomerData');

test.describe('👤 Add tariffplan customer Flow', () => {
for (const dataRow of testData) {
test(`Add tariffplan customer: ${dataRow.Customer_ID}`, async ({ page }) => {
    await page.goto(config.baseUrl);

    const homePage = new HomePage(page);
    await homePage.clicktelecomproject();

    const addtariffplan_Cust = new AddTariffplan_customer_Page(page);
    await addtariffplan_Cust.click_add_tariffplan_to_customer_feature();
    await addtariffplan_Cust.verify_Field_text();

    //const testData = { Customer_ID: "12345" }; // Replace with actual test data
    await addtariffplan_Cust.enter_customerID(dataRow);
    await addtariffplan_Cust.click_submitButton();

    logger.info("Tariff plan added successfully for customer ID: " + testData.Customer_ID);
});
}
});
