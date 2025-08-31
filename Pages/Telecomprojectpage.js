const {expect }=require('@playwright/test')
const logger = require("../utils/logger")

class Telecomprojectpage{
    
constructor(page){
    this.page=page
    this.addcustomer="//h3//a[text()='Add Customer']"
    this.telecomheader="//a[text()='Guru99 telecom']"
}
async verifycompanylogo(){
    await expect(this.page.locator(this.telecomheader)).toBeVisible()
}
async clickaddcustomeroption(){
    await this.page.locator(this.addcustomer).click()
}
}
module.exports=Telecomprojectpage