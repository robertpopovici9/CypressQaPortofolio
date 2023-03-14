import TextBox from '../../Pages/Elements/TextBox';
describe('textBox', () => {

    //go to text box element
    beforeEach(() => {

        TextBox.textBoxLink();
    })

    it("Text box automation input", () => {

        // input elements to fields
        TextBox.insertFullname("Robert Popovici");
        TextBox.insertEmail("robert.popovici09@yahoo.com");
        TextBox.insertCurrentAddress("Iasi");
        TextBox.insertPermanentAddress("Crucea");
        TextBox.clickSubmitButton();
        TextBox.checkResult();
    })
})