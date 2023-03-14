import TextBox from '../../Pages/Elements/TextBox';
describe('textBox', () => {


    it("Text box automation input", () => {

        //go to text box element
        TextBox.textBoxLink();

         // input and assert input
        TextBox.insertFullname("Robert Popovici");
        TextBox.insertEmail("robert.popovici09@yahoo.com");
        TextBox.insertCurrentAddress("Iasi");
        TextBox.insertPermanentAddress("Crucea");
        TextBox.clickSubmitButton();
        TextBox.checkResult();
    })
})