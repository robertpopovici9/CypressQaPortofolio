import CheckBox, { checkBoxes } from '../../Pages/Elements/CheckBox';

//go to text box element
beforeEach(() => {

    CheckBox.CheckBoxLink();
})

it('Collapse and check "Office"', () => {

    //checking elements

    CheckBox.collapseToOffice();

    // check Office box
    CheckBox.getOfficeBox()
    .check({force: true});

    //verify the result
    CheckBox.getResult()
    .should('be.visible').and('have.class', 'display-result mt-4').and('be.visible');

})

it('collapseAllBox', () => {

    //collapse all call function

    CheckBox.collapseAll();

})



