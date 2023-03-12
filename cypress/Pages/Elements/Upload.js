class Upload{

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

    visitUploadLink() {

        this.visitElements()

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-7')
            .click()
    }

    // getting elements

    getUploadElement(){
        return cy.get('#uploadFile');
    }

    uploadElement(){
        this.getUploadElement()
        .attachFile('someFiles.txt');
        cy.get('#uploadedFilePath').should('contain', 'someFiles.txt')

    }


}
module.exports = new Upload();
