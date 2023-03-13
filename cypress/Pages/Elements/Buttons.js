class Buttons {

// visit basedURL
visitLink() {
    cy.visit('https://demoqa.com');
}

// visit elements link
visitElements() {
    this.visitLink()
    cy.get('.category-cards > :nth-child(1) > :nth-child(1)')
        .click()
}

visitButtonsLink() {

    this.visitElements()

    cy.get(':nth-child(1) > .element-list > .menu-list > #item-4')
        .click()
}

// select elements

    getDoubleClick(){

        return cy.xpath('//*[@id="doubleClickBtn"]');
        
    }

    getClickMe() {
        
        //return cy.findByText('Click Me');
        return cy.xpath('/html/body/div[2]/div/div/div[2]/div[2]/div[2]/div[3]/button');
    }

    getRighClick(){
        return cy.xpath('//*[@id="rightClickBtn"]');
    }

    //click double click button

    clickDoubleClickButton(){

        this.getDoubleClick()
        .dblclick();
        cy.xpath('//*[@id="doubleClickMessage"]').should('have.text','You have done a double click');
    }

    clickRighClickButton(){
        this.getRighClick()
        .rightclick();
        cy.xpath('//*[@id="rightClickMessage"]').should('have.text', 'You have done a right click');
    }

    clickMe(){

        this.getClickMe()
        .click();
        cy.xpath('//*[@id="dynamicClickMessage"]').should('have.text', 'You have done a dynamic click');
    }


    

    


}
module.exports = new Buttons();