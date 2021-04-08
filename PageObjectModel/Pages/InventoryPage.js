import { Selector, t } from 'testcafe'

class InventoryPage{
    constructor(){
        this.BtnCart = Selector('.shopping_cart_link')
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
        
        let lista=new Array();
        
        const Items = await Selector('.btn_inventory'); 
        const ItemsTxt = await Selector('.inventory_item_price'); 
        
        const count = await Items.count;

            for(let i=0; i<count; i++){ 
            await t.click(Items.nth(i)); 
            lista.push(await ItemsTxt.nth(i).innerText);

            }
            
            return lista;
    }    

    async GetElementsText(){
        
        let lista=new Array();
        
        const ItemsTxt = await Selector('.inventory_item_price'); 
        const count = await ItemsTxt.count;

            for(let i=0; i<count; i++){ 
            lista.push(await ItemsTxt.nth(i).innerText);

            }
            
            return lista;
    }    

    
    async CountElements(){
        
        const Items = await Selector('.btn_secondary.cart_button'); 
        const count = await Items.count;
        var bar = '' + count;


            return bar;
    }     
    

    

}

export default new InventoryPage()