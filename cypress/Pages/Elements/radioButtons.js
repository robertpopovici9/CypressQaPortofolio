class RadioButtons  {

    radioButtonsLink() {

        cy.visit(Cypress.env("url") + "/radio-button/");
    }

    // select elements

    yesRadio() {

       return cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[2]/label');
       
       
    }
    yesRadioResult(){
        return cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/p/span');
        }

    impressiveRadio() {
        return  cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/label');
        
    }
    impressiveRadioResult(){
        return cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/p/span');
    }

    noRadio() {

        return  cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[4]/label');

    }
    
}
module.exports = new RadioButtons();