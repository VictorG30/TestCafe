import { Selector } from 'testcafe'

class MyNotesPage{
    constructor(){
        this.BtnAddNote = Selector('.btn-primary').withText('Add note');
    }
}

export default new MyNotesPage()