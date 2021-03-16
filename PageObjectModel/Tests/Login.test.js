import WelcomePage from '../Pages/WelcomePage'
import LoginPage from '../Pages/LoginPage'
import MyNotesPage from '../Pages/MyNotesPage'
import {CREDENTIALS} from '../Data/Constant'

fixture('Login feature testing')
    .page `http://testapp.galenframework.com/`
    .beforeEach(async t=> {
        await t.click(WelcomePage.BtnLogin)
    })

    test('User Login Valid', async t => {

        await LoginPage.SubtmitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
        await t.expect(MyNotesPage.BtnAddNote.exists).ok();
    })   
    
    test('User Login Invalid', async t => {
        await LoginPage.SubtmitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD);    
        await t.expect(LoginPage.ErrorMessage.exists).ok();
        await t.expect(LoginPage.ErrorMessage.innerText).eql('The username or password are incorrect');
    })