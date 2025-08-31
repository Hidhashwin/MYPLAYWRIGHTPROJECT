const{test, expect}= require('@playwright/test')
const logger = require('../utils/logger')

class Addcustomerpage{
    
constructor(page){
    this.page=page
    this.addcustomerheader="//h1[text()='Add Customer']"
    this.doneradiobutton="//label[@for='done']"
    this.pendingradiobutton="//label[@for='pending']"
    this.firstname="#fname"
    this.lastname="#lname"
    this.email="#email"
    this.address="//*[@placeholder='Enter your address']"
    this.mobilenumber="#telephoneno"
    this.submitbutton="//input[@name='submit']"
    this.resetbutton="//input[@type='reset']"
}
async verifyaddcustomerheader(){
await expect(this.page.locator(this.addcustomerheader)).toBeVisible()
}
async fillallinputfields(data){
    /*await this.page.click(this.doneradiobutton)
    await this.page.fill(this.firstname,"Gopal")
    await this.page.fill(this.lastname,"krishnan")
    await this.page.fill(this.email,"Gopu@gmail.com")   
    await this.page.fill(this.address,"testaddress")
    await this.page.fill(this.mobilenumber,"8077654632")*/
    
    await this.page.click(this.doneradiobutton)
    await this.page.fill(this.firstname, data.FirstName)
    await this.page.fill(this.lastname, data.LastName)
    await this.page.fill(this.email, data.Email)    
    await this.page.fill(this.address, data.Address)
    await this.page.fill(this.mobilenumber, data.Mobile.toString())

}
async clicksubmitbutton(){
    await this.page.click(this.submitbutton)
}
}
module.exports=Addcustomerpage