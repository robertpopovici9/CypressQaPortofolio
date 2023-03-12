import TextBox from '../../Pages/Elements/TextBox';
describe('textBox', () => {


    it("Text box automation input", () => {

        //go to text box element
        TextBox.textBoxLink();

        // input and assert input
        TextBox.insertFullname()
        TextBox.insertEmail()
        TextBox.insertCurrentAddress()
        TextBox.insertPermanentAddress()
        TextBox.clickSubmitButton();
        TextBox.checkResult();
    })
})