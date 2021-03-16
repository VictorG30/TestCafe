import { Selector, t } from 'testcafe'


class FinishPage {
    constructor(){
        this.ImgConfirm = Selector('[class="complete-header"]')

    }



}

export default new FinishPage()