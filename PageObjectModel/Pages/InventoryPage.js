import { Selector, t } from 'testcafe'

class InventoryPage{
    constructor(){
        this.BtnCart = Selector('.shopping_cart_link.fa-layers')
    }

    async GoToCart(){
        await t.click(this.BtnCart)
    }
}

export default new InventoryPage()