import { Selector, t } from 'testcafe'


class LoginPage {
    constructor(){
        this.TxtUser = Selector('input[name="login.username"]')
        this.TxtPassword = Selector('input[name="login.password"]')
        this.BtnLogin = Selector('.btn-primary.button-login')
        this.ErrorMessage = Selector('#login-error-message')
    }

    async SubtmitLoginForm(username, password){
        
        await t.typeText(this.TxtUser, username, {paste:true})
        await t.typeText(this.TxtPassword, password,{paste:true})
        await t.click(this.BtnLogin)
    }

}

export default new LoginPage()