

class CheckBox {

    // visit basedURL

    CheckBoxLink() {

        cy.visit(Cypress.env("url") + "/checkbox/");
        
    }

    //Selecting elements
    selectHome(){
        return cy.xpath('//label[@for="tree-node-home"]/../button')
    }
    selectDesktop(){
        return  cy.xpath('//label[@for="tree-node-desktop"]/../button')
    }
    selectDocuments(){
        return cy.xpath('//label[@for="tree-node-documents"]/../button') 
    }
    selectWorkspace(){
        return cy.xpath('//label[@for="tree-node-workspace"]/../button')
    }
    selectOffice(){
        return  cy.xpath('//label[@for="tree-node-office"]/../button')
    }
    selectDownload(){
        return  cy.xpath('//label[@for="tree-node-downloads"]/../button')
    }

    // collapse all function
    collapseAll(){
    
        this.selectHome()
        .click()

        this.selectDesktop()
        .click();

        this.selectDocuments()
        .click();

        this.selectDownload()
        .click();

        this.selectWorkspace()
        .click();

        this.selectOffice()
        .click();

    }

    // collapse some elements function
    collapseToOffice(){
        this.selectHome().click();
        this.selectDocuments().click();
        this.selectOffice()
        .click();
    }

    getOfficeBox(){
        return cy.get('#tree-node-office');
    }
    getResult(){
        return cy.get('#result');

    }
    // checkbox function
    checkBoxes(){

        this.collapseToOffice()
        

        // verify if selected elements are checked
        cy.xpath('//*[@id="tree-node-general"] | //*[@id="tree-node-classified"] | //*[@id="tree-node-private"] | //*[@id="tree-node-public"] | //*[@id="tree-node-documents"] | //*[@id="tree-node-home"]').should('be.checked');
        
        // check result
        cy.get('#result').should('be.visible').and('have.class', 'display-result mt-4').and('be.visible');
        
        
        

    }
        
    }
    module.exports = new CheckBox();





