import LoginPage from '../Pages/LoginPage'
import InventoryPage from '../Pages/InventoryPage'
import {CREDENTIALS, USERDATA} from '../Data/Constant'
import SideBarPage from '../Pages/SideBarPage'
import ShoppingCartPage from '../Pages/ShoppingCartPage'
import { Selector, t } from 'testcafe'
import CheckOutPage from '../Pages/CheckOutPage'
import OverViewPage from '../Pages/OverViewPage'


fixture('ChekOut feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t=> {
        await LoginPage.LoginSubmit(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    })

          
    
    test('ChekOut missing data name', async t => {
           
        await InventoryPage.AddElements(1);
        await InventoryPage.GoToCart();
        await ShoppingCartPage.GoToCheckOut();
        await CheckOutPage.GoToOverview();

        await t.expect(CheckOutPage.ErrorMessage.exists).ok();
        await t.expect(CheckOutPage.ErrorMessage.innerText).eql('Error: First Name is required');


    })    
    
    test('ChekOut missing data Last Name', async t => {
           
        await InventoryPage.AddElements(1);
        await InventoryPage.GoToCart();
        await ShoppingCartPage.GoToCheckOut();
        await CheckOutPage.FillInformation(USERDATA.USER.Name);
        await CheckOutPage.GoToOverview();

        await t.expect(CheckOutPage.ErrorMessage.exists).ok();
        await t.expect(CheckOutPage.ErrorMessage.innerText).eql('Error: Last Name is required');


    })   
    
    test('ChekOut missing data Zip Code', async t => {
           
        await InventoryPage.AddElements(1);
        await InventoryPage.GoToCart();
        await ShoppingCartPage.GoToCheckOut();
        await CheckOutPage.FillInformation(USERDATA.USER.Name, USERDATA.USER.LastName);
        await CheckOutPage.GoToOverview();

        await t.expect(CheckOutPage.ErrorMessage.exists).ok();
        await t.expect(CheckOutPage.ErrorMessage.innerText).eql('Error: Postal Code is required');


    })   
    
    test('ChekOut complete information', async t => {
           
        await InventoryPage.AddElements(1);
        await InventoryPage.GoToCart();
        await ShoppingCartPage.GoToCheckOut();
        await CheckOutPage.FillInformation(USERDATA.USER.Name, USERDATA.USER.LastName, USERDATA.USER.Zip);
        await CheckOutPage.GoToOverview();

        await t.expect(OverViewPage.BtnFinish.exists).ok();



    })  
    

