const { test, expect } = require('@playwright/test');
const logger = require('../utils/logger');

class AddTariffplan_customer_Page {
    constructor(page) {
        this.page = page;
        this.add_tariffplan_to_customer = "text=Add Tariff Plan to Customer";
        this.enter_your_customerID_text = "//h3[text()='Enter Your Customer ID']";
        this.enter_enter_customerID_textbox = "#customer_id";
        this.submit_button = "//input[@name='submit']";
    }

    async click_add_tariffplan_to_customer_feature() {
        await this.page.waitForSelector(this.add_tariffplan_to_customer, { state: 'visible', timeout: 10000 });
        await this.page.locator("text=Add Tariff Plan to Customer").nth(0).click();

    }

    async verify_Field_text() {
        await expect(this.page.locator(this.enter_your_customerID_text)).toBeVisible();
    }

    async enter_customerID(data) {
        await this.page.fill(this.enter_enter_customerID_textbox, data.Customer_ID);
    }

    async click_submitButton() {
        await this.page.click(this.submit_button);
    }
}

// ✅ This is the corrected export statement
module.exports = AddTariffplan_customer_Page;