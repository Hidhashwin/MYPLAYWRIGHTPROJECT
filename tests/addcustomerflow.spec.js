const { test, expect } = require('@playwright/test');
const config = require("../config.json");
const logger = require('../utils/logger');
const HomePage = require("../Pages/Homepage");
const TelecomprojectPage = require("../Pages/Telecomprojectpage");
const AddcustomerPage = require("../Pages/Addcustomerpage");
const CustomerIDPage = require("../Pages/customeridpage");
const { getTestData } = require('../utils/excelreader');
const testData = getTestData('./testdata/testdata.xlsx', 'CustomerData');

test.describe('👤 Add Customer Flow', () => {
  for (const dataRow of testData) {
    test(`Add customer: ${dataRow.FirstName}`, async ({ page }) => {
      await page.goto(config.baseUrl);
      const homePage = new HomePage(page);
      await homePage.clicktelecomproject();

      const telecomPage = new TelecomprojectPage(page);
      await telecomPage.clickaddcustomeroption();

      const addCustomer = new AddcustomerPage(page);
      await addCustomer.fillallinputfields(dataRow);
      await addCustomer.clicksubmitbutton();

      const customerIDPage = new CustomerIDPage(page);
      await customerIDPage.verify_customerID_message();
      await customerIDPage.take_customerID(dataRow._rowIndex);
    });
  }
});
