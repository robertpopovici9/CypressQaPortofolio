class WebTables {

    // visit basedURL

    webTablesLink() {

        cy.visit(Cypress.env("url") + "/webtables/"); 
    }

    // select elements


    searchBar() {
        return cy.xpath('//*[@id="searchBox"]');
    }

    editButton() {
        return cy.xpath('//*[@id="edit-record-1"]').click(

        );
    }

    deleteButton() {
        return cy.xpath('//*[@id="delete-record-1"]').click();
    }

    registrationForm() {
        return cy.get('#addNewRecordButton').click();



    }

    // registration form elements

    addFirstName(firstName){
        cy.get('#firstName')
            .type(firstName)
            .should('have.value', firstName)
    }
    addLastName(lastName){
        cy.get('#lastName')
        .type(lastName)
        .should('have.value', lastName)
    }

    addEmail(email){
        cy.get('#userEmail')
        .type(email)
        .should('have.value', email)
    }

    addAge(age){
        cy.get('#age')
        .type(age)
        .should('have.value', age)
    }

    addSalary(salary){
        cy.get('#salary')
        .type(salary)
        .should('have.value', salary)
    }

    addDepartament(departament){
        cy.get('#department')
        .type(departament)
        .should('have.value', departament)
    }

    clickSubmit(){
        cy.get('#submit').click();
    }

    // add a record function
    addRecord(firstName, lastName, email, age, salary, departament) {

        
        this.addFirstName(firstName);
        this.addLastName(lastName);
        this.addEmail(email);
        this.addAge(age);
        this.addSalary(salary);
        this.addDepartament(departament);
        this.clickSubmit();
    }

    // search function
    search(search,){

        this.searchBar(search)
        .type(search);
        
    }

    // edit function
    edit(edit){

        cy.xpath('//*[@id="edit-record-1"]').click();
        cy.xpath('//*[@id="lastName"]')
        .should('have.value', "Vega")
        .clear()
        .type(edit);
        cy.get('#submit').click();
        cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[2]/div[1]/div/div[2]').contains('Robert');
    }

    

    
}







module.exports = new WebTables();