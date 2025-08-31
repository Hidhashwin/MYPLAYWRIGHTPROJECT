const { test, expect } = require('@playwright/test');
const logger = require('../utils/logger');
const config = require("../config.json");
const HomePage = require("../Pages/Homepage");

test.describe('🏠 Home Page Tests', () => {
  test('Verify Guru99 home screen and logo', async ({ page }) => {
    logger.info("Starting home page test");
    await page.goto(config.baseUrl);
    const homePage = new HomePage(page);
    await homePage.verifylogo();
  });
});
