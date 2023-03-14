class radioButtons  {


    

    radioButtonsLink() {

        cy.visit(Cypress.env("url") + "/radio-button/");
    }

    // select elements

    yesRadio() {

       return cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[2]/label');
       
       
    }

    impressiveRadio() {
        return  cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/label');
        
        //

    }

    noRadio() {

        return  cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[4]/label');

    }

    // check radio buttons
    checkYes() {

        this.yesRadio()
            //.should('have.class', 'custom-control-input')
            .click();
    }

    checkImpressive() {
        this.impressiveRadio()
            
            .click();
    }

    checkNoRadio() {
        this.noRadio()
        .should('not.be.enabled');
    }

}
module.exports = new radioButtons();