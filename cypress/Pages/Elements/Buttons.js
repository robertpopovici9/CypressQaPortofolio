class Buttons {

// visit basedURL

visitButtonsLink() {

    cy.visit(Cypress.env("url") + "/buttons/");
       
}

// select elements

    getDoubleClick(){

        return cy.xpath('//*[@id="doubleClickBtn"]');
        
    }
    getDinamicClick() {
        
        //return cy.findByText('Click Me');
        return cy.xpath('/html/body/div[2]/div/div/div[2]/div[2]/div[2]/div[3]/button');
    }

    getRighClick(){
        return cy.xpath('//*[@id="rightClickBtn"]');
    }
    
    // get result message
    
    getDoubleClickResult(){
        return cy.get('#doubleClickMessage');
    }

    getRighClickResult(){
        return cy.get('#rightClickMessage');
    }

    getDinamicClickResult(){
        return cy.get('#dynamicClickMessage');
    }


}
module.exports = new Buttons();