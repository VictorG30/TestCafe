import WelcomePage from '../Pages/WelcomePage'
import LoginPage from '../Pages/LoginPage'

fixture('Login feature testing')
    .page `http://testapp.galenframework.com/`

    test('User Login', async t => {
        await t
            .click(WelcomePage.BtnLogin)
            .typeText(LoginPage.TxtUser, "testuser@example.com")
            .typeText(LoginPage.TxtPassword, "test123")
            .click(LoginPage.BtnLogin)

    })