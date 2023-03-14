import radioButtons from '../../Pages/Elements/radioButtons';

//go to text box element
beforeEach(() => {

    radioButtons.radioButtonsLink();
})

it('check Yes', () => {

    radioButtons.checkYes();
    
})

it('check Impressive',() =>{

    radioButtons.checkImpressive();
})

it('check No',() =>{

    radioButtons.checkNoRadio();
})






