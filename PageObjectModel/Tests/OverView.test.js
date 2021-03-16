import LoginPage from '../Pages/LoginPage'
import InventoryPage from '../Pages/InventoryPage'
import {CREDENTIALS} from '../Data/Constant'
import {USERDATA} from '../Data/Constant'
import ShoppingCartPage from '../Pages/ShoppingCartPage'
import FinishPage from '../Pages/FinishPage'
import CheckOutPage from '../Pages/CheckOutPage'
import OverViewPage from '../Pages/OverViewPage'
import { Selector, t } from 'testcafe'



fixture('Overview feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t=> {
        await LoginPage.LoginSubmit(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    })

       

    
    test('Verify List of purchase', async t => {
          
        
        await InventoryPage.AddAllElements();
        var InventorySelectElements = await InventoryPage.GetElementsText();
        await InventoryPage.GoToCart();
        await ShoppingCartPage.GoToCheckOut();
        await CheckOutPage.FillInformation(USERDATA.USER.Name, USERDATA.USER.LastName, USERDATA.USER.Zip);
        await CheckOutPage.GoToOverview();
        var OverViewSelectElements = await InventoryPage.GetElementsText();

        await t.expect(InventorySelectElements).eql(OverViewSelectElements);





    })     
    
    test('Finish purchase', async t => {
           
        await InventoryPage.AddAllElements();
        await InventoryPage.GoToCart();
        await ShoppingCartPage.GoToCheckOut();
        await CheckOutPage.FillInformation(USERDATA.USER.Name, USERDATA.USER.LastName, USERDATA.USER.Zip);
        await CheckOutPage.GoToOverview();
        await OverViewPage.FinishPurchase();

        await t.expect(FinishPage.ImgConfirm.exists).ok();



    })  
