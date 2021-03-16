import { Selector } from 'testcafe'

class InventoryPage{
    constructor(){
        this.BtnCart = Selector('.shopping_cart_link.fa-layers')
    }
}

export default new InventoryPage()