import Buttons from '../../Pages/Elements/Buttons';


//go to text box element
beforeEach(() => {

    Buttons.visitButtonsLink();
})

it('Verify double click button', () => {

    //get double click button 
    Buttons.getDoubleClick()

        .dblclick();

    //verify if the text result is correct
    Buttons.getDoubleClickResult().should('have.text', 'You have done a double click');

})


it('Verify right Click button', () => {

    //get right click button 
    Buttons.getRighClick()

        .rightclick();

    //verify if the text result is correct
    Buttons.getRighClickResult()
        .should('have.text', 'You have done a right click');
})

it('Verify dinamy Click button', () => {

    //get click me button
    Buttons.getDinamicClick()

        .click()

    //verify if the text result is correct

    Buttons.getDinamicClickResult()
        .should('have.text', 'You have done a dynamic click');

})






















































































































