import { Selector } from 'testcafe'

class WelcomePage{
    constructor(){
        this.BtnLogin = Selector('.btn-primary.button-login')
    }
}

export default new WelcomePage()