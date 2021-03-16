import LoginPage from '../Pages/LoginPage'
import InventoryPage from '../Pages/InventoryPage'
import {CREDENTIALS} from '../Data/Constant'
import SideBarPage from '../Pages/SideBarPage'
import ShoppingCartPage from '../Pages/ShoppingCartPage'
import { Selector, t } from 'testcafe'


fixture.only('Login feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t=> {
        await LoginPage.LoginSubmit(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    })

    
    
    test('Verify go to shopping cart', async t => {
           
        await InventoryPage.GoToCart();
        await t.expect(ShoppingCartPage.BtnCheckout.exists).ok();

    })     
    
    test('Add item to shopping cart', async t => {
           
        await InventoryPage.AddElements(1);
        await InventoryPage.GoToCart();
        const Items = await Selector('.btn_secondary.cart_button'); 
        const count = await Items.count;
        var bar = '' + count;
        await t.expect(InventoryPage.BadgeCart.innerText).eql(bar);
        await t.expect(ShoppingCartPage.BtnCheckout.exists).ok();

    })  
    
    test('Add items to shopping cart', async t => {
           
        await InventoryPage.AddAllElements();
        await InventoryPage.GoToCart();
        const Items = await Selector('.btn_secondary.cart_button'); 
        const count = await Items.count;
        var bar = '' + count;
        await t.expect(InventoryPage.BadgeCart.innerText).eql(bar);
        await t.expect(ShoppingCartPage.BtnCheckout.exists).ok();

    })   
    
