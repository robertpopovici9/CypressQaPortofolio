class WebTables {

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

    webTablesLink() {

        this.visitElements()

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3')
            .click()
    }

    // select elements


    searchBar() {
        return cy.xpath('//*[@id="searchBox"]');
    }

    editButton() {
        return cy.xpath('//*[@id="edit-record-1"]');
    }

    deleteButton() {
        return cy.xpath('//*[@id="delete-record-1"]');
    }

    registrationForm() {
        return
        //cy.get('#addNewRecordButton').click();

        cy.get('#firstName');
        cy.get('#lastName');
        cy.get('#userEmail');
        cy.get('#age');
        cy.get('#salary');
        cy.get('#department');
        cy.get('#submit');

    }

    addRecord() {

        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('Popovici');
        cy.get('#lastName').type('Robert');
        cy.get('#userEmail').type('robert.popovici09@yahoo.com');
        cy.get('#age').type('26');
        cy.get('#salary').type('2500');
        cy.get('#department').type('QA');
        cy.get('#submit').click();
    }

    searchRecord() {

        this.searchBar()
            .type('vega');

    }

    addAndSearchRecord() {
        this.addRecord()
        this.searchBar()
        .type('Popovici');
        

    }
}







module.exports = new WebTables();