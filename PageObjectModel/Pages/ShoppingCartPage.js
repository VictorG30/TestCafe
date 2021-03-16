import { Selector, t } from 'testcafe'

class ShoppingCartPage{
    constructor(){
        this.BtnCheckout = Selector('.btn_action.checkout_button')

    }


}



export default new ShoppingCartPage()