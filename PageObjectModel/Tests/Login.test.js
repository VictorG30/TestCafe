import LoginPage from '../Pages/LoginPage'
import InventoryPage from '../Pages/InventoryPage'
import {CREDENTIALS} from '../Data/Constant'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t=> {
        
    })

    test('User Login Valid', async t => {

        await LoginPage.LoginSubmit(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
        await t.expect(InventoryPage.BtnCart.exists).ok();
    })   
    
    test('User Login Invalid', async t => {
        await LoginPage.LoginSubmit(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD);    
        await t.expect(LoginPage.ErrorMessage.exists).ok();
        await t.expect(LoginPage.ErrorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service');
    })   
    
