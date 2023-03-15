import RadioButtons from '../../Pages/Elements/RadioButtons';

//go to text box element
beforeEach(() => {

    RadioButtons.radioButtonsLink();
})

it('check Yes radio button', () => {

    //get the element and click
    RadioButtons.yesRadio()
        .click();
    //verify the result
    RadioButtons.yesRadioResult()
        .should('exist');

})

it('check Impressive radio button', () => {

    //get the element and click
    RadioButtons.impressiveRadio()
        .click();

    //verify the result
    RadioButtons.impressiveRadioResult()
        .should('exist');
})

it('Verify if noRadio is disabled', () => {

    //get the element 
    RadioButtons.noRadio()
        .should('not.be.enabled');

})






