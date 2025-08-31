
const {test,expect}= require('@playwright/test')
const logger = require('../utils/logger')

class customeridpage{
  
    constructor(page){
        this.page=page
        this.customerid="//td[@align='center']/h3"
        this.customeridmessage="//b[text()='Please Note Down Your CustomerID']"
        this.homebutton="//a[@class='button']"
    }
    async verify_customerID_message(){
     await expect(this.page.locator(this.customeridmessage)).toBeVisible()
    }
    async take_customerID(){
    const text= await this.page.locator(this.customerid).textContent();
    console.log("Customer ID is:",text)
    logger.info("customer ID captured!")
    await this.page.locator(this.homebutton).click()
   

    }}
module.exports=customeridpage