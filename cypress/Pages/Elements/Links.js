class Links {
    // visit basedURL


    visitLinksLink() {

        cy.visit(Cypress.env("url") + "/links/");
    }


    // select elements


    homeElement() {
        return cy.get('#simpleLink');
    }

    createdElement() {
        return cy.get('#created');
    }

    noContentElement() {
        return cy.get('#no-content');
    }

    movedElement() {
        return cy.get('#moved');
    }

    badRequestElement() {
        return cy.get('#bad-request');
    }
    unauthorizedElement() {
        return cy.get('#unauthorized');
    }

    forbiddenElement() {
        return cy.get('#forbidden');
    }
    notFoundElement() {
        return cy.get('#invalid-url');
    }

    newTabtest() {
        this.homeElement()
            .invoke('removeAttr', 'target').click();
        cy.get('[alt="Selenium Online Training"]')
            .should('have.class', 'banner-image')
    }

    apiTestLinks(){

        this.createdElement()
        .click()
        cy.get('#linkResponse').contains('Link has responded with staus 201 and status text Created').and('be.visible');

        this.noContentElement()
        .click()
        cy.get('#linkResponse').contains('Link has responded with staus 204 and status text No Content').and('be.visible');

        this.movedElement()
        .click()
        cy.get('#linkResponse').contains('Link has responded with staus 301 and status text Moved Permanently').and('be.visible');

        this.unauthorizedElement()
        .click()
        cy.get('#linkResponse').contains('Link has responded with staus 401 and status text Unauthorized').and('be.visible');

        this.badRequestElement()
        .click()
        cy.get('#linkResponse').contains('Link has responded with staus 400 and status text Bad Request').and('be.visible');

        this.forbiddenElement()
        .click()
        cy.get('#linkResponse').contains('Link has responded with staus 403 and status text Forbidden').and('be.visible');

        this.notFoundElement()
        .click()
        cy.get('#linkResponse').contains('Link has responded with staus 404 and status text Not Found').and('be.visible');
    }




}
module.exports = new Links();