class Buttons{

    
    elements ={


        clickMe : () => cy.findByText('Click Me'),
        }



        getClickMe(){
            console.log('Merge butonul')
            return cy.findByText('Click Me');


        }


    getMessage (){
        return 'hello';
    }

    clickClickMe(){
        this.getClickMe().click();
    }
    

}
module.exports = new locator();