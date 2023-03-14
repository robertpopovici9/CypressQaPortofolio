class Upload{

    // visit basedURL

    visitUploadLink() {

        cy.visit(Cypress.env("url") + "/upload-download/"); 
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
