class Upload {

    // visit basedURL

    visitUploadLink() {

         cy.visit(Cypress.env("url") + "/upload-download/");
    }

    //getting elements

    getUploadElement() {
        return cy.get('#uploadFile');
    }

    uploadElement() {
        this.getUploadElement()
            .attachFile('someFiles.txt');
        cy.get('#uploadedFilePath').should('contain', 'someFiles.txt')

    }

    downloadButton() {
        
        cy.get('#downloadButton').should('contain', 'Download').click()
        cy.readFile('D:/Proiect/TestareCypressGit/CypressQaPortofolio/cypress/downloads/sampleFile.jpeg').should('exist');
    }


}
module.exports = new Upload();
