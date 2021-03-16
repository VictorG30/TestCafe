import { Selector, t } from 'testcafe'

class CheckOutPage{
    constructor(){
        this.TxtFirstname = Selector('#first-name')
        this.TxtLastName = Selector('#last-name')
        this.TxtZip = Selector('#postal-code')
        this.BtnContinue = Selector('.btn_primary.cart_button')
        this.BtnCancel = Selector('.btn_primary.cart_button').withExactText('CANCEL')
        this.ErrorMessage = Selector('[data-test="error"]')

    }

    async GoToOverview(){
        
        await t.click(this.BtnContinue)

     
    }     
    
    async FillInformation(Fname=null, LName=null, Zip=null){
        try {
            await t.typeText(this.TxtFirstname,Fname)
            await t.typeText(this.TxtLastName,LName)
            await t.typeText(this.TxtZip,Zip)
          } catch (error) {

     
    }   
    }   
    

}

export default new CheckOutPage()