import radioButtons from '../../Pages/Elements/radioButtons';

it('radioButton Yes', () => {

    radioButtons.radioButtonsLink();
    radioButtons.checkYes();
    

})

it('radioButton Impressive',() =>{

    radioButtons.radioButtonsLink();
    radioButtons.checkImpressive();
})


it('radioButton No',() =>{

    radioButtons.radioButtonsLink();
    radioButtons.checkNoRadio();
})






