import RadioButtons from '../../Pages/Elements/RadioButtons';

//go to text box element
beforeEach(() => {

    RadioButtons.radioButtonsLink();
})

it('check Yes', () => {

    RadioButtons.checkYes();
    
})

it('check Impressive',() =>{

    RadioButtons.checkImpressive();
})

it('check No',() =>{

    RadioButtons.checkNoRadio();
})






