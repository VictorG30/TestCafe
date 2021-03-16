import LoginPage from '../Pages/LoginPage'
import InventoryPage from '../Pages/InventoryPage'
import {CREDENTIALS} from '../Data/Constant'
import SideBarPage from '../Pages/SideBarPage'
import ShoppingCartPage from '../Pages/ShoppingCartPage'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t=> {
        
    })

    
    
    test('Verify go to shopping cart', async t => {
        await LoginPage.LoginSubmit(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);   
        await InventoryPage.GoToCart();
        await t.expect(ShoppingCartPage.BtnCheckout.exists).ok();

    })   
    
