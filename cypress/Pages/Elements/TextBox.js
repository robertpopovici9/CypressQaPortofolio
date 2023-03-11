class TextBox{

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








}
module.exports = new TextBox();