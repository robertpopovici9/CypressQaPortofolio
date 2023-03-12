
class TextBox{

    //visit basedURL
    visitLink(){
        cy.visit('https://demoqa.com');
    }


        // visit elements link
        visitElements(){
            this.visitLink()
            cy.get('.category-cards > :nth-child(1) > :nth-child(1)')
            .click()
        }

    
    //go to textbox element

    textBoxLink(){
        
        this.visitElements()
        
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0')
        .click()    
    }



    //Select elements from TextBox
    
    selectFullName(){
        return cy.get('#userName');
    }

    selectEmail(){
        return cy.get('#userEmail');
    }

    selectCurrentAddress(){
        return cy.get('#currentAddress');
    }

    selectPermanentAddress(){
        return cy.get('#permanentAddress');
    }

    selectSubmitButton(){
        return cy.get('#submit');
    }

    //Fill text boxes

    insertFullname(){


        this.selectFullName().type('Popovici Robert')

        .should('have.value','Popovici Robert')
        .and('have.class','mr-sm-2 form-control' ); 
    
    }

    insertEmail(){

        this.selectEmail().type('robert.popovici09@yahoo.com')
        .should('have.value', 'robert.popovici09@yahoo.com')
        .and('have.class', 'mr-sm-2 form-control');
    }

    insertCurrentAddress(){

        this.selectCurrentAddress().type('Iasi')
        .should('have.value', 'Iasi')
        .and('have.class', 'form-control');
    }

    insertPermanentAddress(){

        this.selectPermanentAddress().type('Vatra-Dornei')
        .should('have.value', 'Vatra-Dornei')
        .and('have.class', 'form-control');

    }

    clickSubmitButton(){
        this.selectSubmitButton()
        .should('be.visible')
        .and('have.class', 'btn btn-primary')
        .click();
    }

    checkResult(){
        return
        cy.get('.name').should('be.visible').and('have.class', 'mb-1')
        cy.get('.email').should('be.visible').and('have.class', 'mb-1')
        cy.get('.currentAddress').should('be.visible').and('have.class', 'mb-1')
        cy.get('.permanentAddress').should('be.visible').and('have.class', 'mb-1')

    }







}
module.exports = new TextBox();