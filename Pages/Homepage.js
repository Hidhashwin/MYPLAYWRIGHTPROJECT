const {expect}=require('@playwright/test')
const logger = require('../utils/logger')

class Homepage{
    
constructor(page){
    this.page=page
    this.telecomproject="//a[contains(text(),'Telecom')]"
    this.logo="//img[@alt='Guru99 Demo Sites']"
}
async verifylogo(){
await expect(this.page.locator(this.logo)).toBeVisible()
}
async clicktelecomproject(){
await this.page.click(this.telecomproject)
}
}
module.exports=Homepage