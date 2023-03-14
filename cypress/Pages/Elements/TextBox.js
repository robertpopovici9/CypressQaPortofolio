
class TextBox {

    // //visit basedURL

    textBoxLink() {

        cy.visit(Cypress.env("url") + "/text-box/");
    }


    //Fill text boxes

    insertFullname(userName) {


        cy.get('#userName')
            .type(userName)
            .should('have.value', userName)
            .and('have.class', 'mr-sm-2 form-control');

    }

    insertEmail(email) {

        cy.get('#userEmail')
            .type(email)
            .should('have.value', email)
            .and('have.class', 'mr-sm-2 form-control');
    }

    insertCurrentAddress(currentAddress) {

        cy.get('#currentAddress')
            .type(currentAddress)
            .should('have.value', currentAddress)
            .and('have.class', 'form-control');
    }

    insertPermanentAddress(permanentAddress) {

        cy.get('#permanentAddress')
            .type(permanentAddress)
            .should('have.value', permanentAddress)
            .and('have.class', 'form-control');

    }

    clickSubmitButton() {
        cy.get('#submit')
            .should('be.visible')
            .and('have.class', 'btn btn-primary')
            .click();
    }

    checkResult() {
        return
        cy.get('.name').should('contains', 'Name:Popovici Robert').and('have.class', 'mb-1')
        cy.get('.email').should('contains', 'Email:robert.popovici09@yahoo.com').and('have.class', 'mb-1')
        cy.get('.currentAddress').should('contains', 'Current Address :Iasi').and('have.class', 'mb-1')
        cy.get('.permanentAddress').should('contains', 'Permananet Address :Vatra-Dornei').and('have.class', 'mb-1')

    }







}
module.exports = new TextBox();