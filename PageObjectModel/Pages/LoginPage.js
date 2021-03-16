import { Selector, t } from 'testcafe'


class LoginPage {
    constructor(){
        this.TxtUser = Selector('#user-name')
        this.TxtPassword = Selector('#password')
        this.BtnLogin = Selector('#login-button')
        this.ErrorMessage = Selector('[data-test="error"]')
    }

    async LoginSubmit(username, password){
        
        await t.typeText(this.TxtUser, username, {paste:true})
        await t.typeText(this.TxtPassword, password,{paste:true})
        await t.click(this.BtnLogin)
    }

}

export default new LoginPage()