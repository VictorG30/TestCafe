import LoginPage from '../Pages/LoginPage'
import InventoryPage from '../Pages/InventoryPage'
import {CREDENTIALS} from '../Data/Constant'
import SideBarPage from '../Pages/SideBarPage'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t=> {
        
    })

    
    
    test('LogOut User', async t => {
        await LoginPage.LoginSubmit(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);   
        await SideBarPage.LogOut();
        await t.expect(LoginPage.BtnLogin.exists).ok();

    })   
    
