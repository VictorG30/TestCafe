import { Selector } from 'testcafe'

class LoginPage {
    constructor(){
        this.TxtUser = Selector('input[name="login.username"]')
        this.TxtPassword = Selector('input[name="login.password"]')
        this.BtnLogin = Selector('.btn-primary.button-login')
        this.ErrorMessage = Selector('#login-error-message')
    }
}

export default new LoginPage()