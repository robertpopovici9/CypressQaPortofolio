class Upload {

    // visit basedURL

    visitUploadLink() {

         cy.visit(Cypress.env("url") + "/upload-download/");
    }

    //getting elements

    uploadElement() {
        cy.get('#uploadFile').attachFile('someFiles.txt');

    }

    downloadButton() {
        
        cy.get('#downloadButton').should('contain', 'Download').click();
    }


}
module.exports = new Upload();
