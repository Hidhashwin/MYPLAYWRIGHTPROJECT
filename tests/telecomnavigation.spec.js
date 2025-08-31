const { test, expect } = require('@playwright/test');
const config = require("../config.json");
const HomePage = require("../Pages/Homepage");
const TelecomprojectPage = require("../Pages/Telecomprojectpage");

test.describe('📱 Telecom Project Navigation', () => {
  test('Navigate to Telecom Project and verify logo', async ({ page }) => {
    await page.goto(config.baseUrl);
    const homePage = new HomePage(page);
    await homePage.clicktelecomproject();

    const telecomPage = new TelecomprojectPage(page);
    await telecomPage.verifycompanylogo();
  });
});
