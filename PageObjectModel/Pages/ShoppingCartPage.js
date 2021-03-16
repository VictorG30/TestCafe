import { Selector, t } from 'testcafe'

class ShoppingCartPage{
    constructor(){
        this.BtnCheckout = Selector('.btn_action.checkout_button')

    }
    async GoToCheckOut(){
        
        await t.click(this.BtnCheckout)
     
    }

}



export default new ShoppingCartPage()