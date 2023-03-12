

class CheckBox {

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

    CheckBoxLink() {

        this.visitElements()

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1')
            .click()
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
        this.selectOffice().click();
    }

    // checkbox function
    checkBoxes(){

        this.collapseToOffice()
        cy.get('#tree-node-office').check({force: true});
        cy.get('#result').should('be.visible')
        

    }
        
    }
    module.exports = new CheckBox();





