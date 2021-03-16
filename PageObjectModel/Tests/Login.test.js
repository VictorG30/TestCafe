import LoginPage from '../Pages/LoginPage'
import InventoryPage from '../Pages/InventoryPage'
import {CREDENTIALS} from '../Data/Constant'
import SideBarPage from '../Pages/SideBarPage'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`


    test('Login User Valid', async t => {

        await LoginPage.LoginSubmit(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
        await t.expect(InventoryPage.BtnCart.exists).ok();
    })   
    
    test('Login User Invalid', async t => {
        await LoginPage.LoginSubmit(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD);    
        await t.expect(LoginPage.ErrorMessage.exists).ok();
        await t.expect(LoginPage.ErrorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service');
    })      
    

    
