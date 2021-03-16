import { Selector, t } from 'testcafe'

class SideBarPage{
    constructor(){
        this.BtnMenu = Selector('#react-burger-menu-btn')
        this.OptionLogOut = Selector('#logout_sidebar_link')
    }

    async LogOut(){
        
        await t.click(this.BtnMenu)
        await t.click(this.OptionLogOut)        

    }
}

export default new SideBarPage()