import { Selector, t } from 'testcafe'

class OverViewPage{
    constructor(){
        this.BtnFinish = Selector('.btn_action,cart_button')


    }

 
    
    async FillInformation(Fname=null, LName=null, Zip=null){
        try {
            await t.typeText(this.TxtFirstname,Fname)
            await t.typeText(this.TxtLastName,LName)
            await t.typeText(this.TxtZip,Zip)
          } catch (error) {

     
    }   
    }   

    async FinishPurchase(){
        
        await t.click(this.BtnFinish)

     
    }    
    

}

export default new OverViewPage()