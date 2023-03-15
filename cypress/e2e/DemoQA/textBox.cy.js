import TextBox from '../../Pages/Elements/TextBox';
describe('textBox', () => {

    //go to text box element
    beforeEach(() => {

        TextBox.textBoxLink();
    })

    it("Text box automation input", () => {

        // complete the forum with data
        TextBox.insertFullname("Robert Popovici");
        TextBox.insertEmail("robert.popovici09@yahoo.com");
        TextBox.insertCurrentAddress("Iasi");
        TextBox.insertPermanentAddress("Crucea");
        TextBox.clickSubmitButton();

        //check
        TextBox.checkResult();
    })
})