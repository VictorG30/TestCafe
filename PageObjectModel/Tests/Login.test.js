import WelcomePage from '../Pages/WelcomePage'
import LoginPage from '../Pages/LoginPage'
import MyNotesPage from '../Pages/MyNotesPage'
import {CREDENTIALS} from '../Data/Constant'

fixture('Login feature testing')
    .page `http://testapp.galenframework.com/`

    test('User Login Valid', async t => {
        await t
            .click(WelcomePage.BtnLogin)
            .typeText(LoginPage.TxtUser, CREDENTIALS.VALID_USER.USERNAME)
            .typeText(LoginPage.TxtPassword, CREDENTIALS.VALID_USER.PASSWORD)
            .click(LoginPage.BtnLogin)
    
        await t.expect(MyNotesPage.BtnAddNote.exists).ok();
    })   
    
    test('User Login Invalid', async t => {
        await t
            .click(WelcomePage.BtnLogin)
            .typeText(LoginPage.TxtUser, CREDENTIALS.INVALID_USER.USERNAME)
            .typeText(LoginPage.TxtPassword, CREDENTIALS.INVALID_USER.PASSWORD)
            .click(LoginPage.BtnLogin)
    
        await t.expect(LoginPage.ErrorMessage.exists).ok();
        await t.expect(LoginPage.ErrorMessage.innerText).eql('The username or password are incorrect');
    })