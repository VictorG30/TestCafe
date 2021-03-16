import { Selector, t } from 'testcafe'

class InventoryPage{
    constructor(){
        this.BtnCart = Selector('.shopping_cart_link.fa-layers')
        this.BadgeCart = Selector('.shopping_cart_badge')
    }

    async GoToCart(){
        await t.click(this.BtnCart)
    }

    async AddElements(num){
        
            const navItems = await Selector('.btn_inventory'); 
             
            for(let i=0; i<num; i++){ 
            await t.click(navItems.nth(i)); 
            }
    }    
    
    async AddAllElements(){
        
        const Items = await Selector('.btn_inventory'); 
        const count = await Items.count;

            for(let i=0; i<count; i++){ 
            await t.click(Items.nth(i)); 
            }
            
    }    
    
    async CountElements(){
        
        const Items = await Selector('.btn_secondary.cart_button'); 
        const count = await Items.count;
        var bar = '' + count;


            return bar;
    }     
    

    

}

export default new InventoryPage()