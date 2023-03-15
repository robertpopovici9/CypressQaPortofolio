import Upload from "../../Pages/Elements/Upload";

beforeEach(() => {

    cy.visit(Cypress.env("url") + "/upload-download/");

})

it('Test file upload with file ', () => {

    //get the element and upload a file
    Upload.uploadElement()
        
    //verify if the result
    cy.get('#uploadedFilePath').should('contain', 'someFiles.txt')
})

it('download file in mentioned dir', () => {
    
    //download the file

    Upload.downloadButton()
        
    
    //verify if the downloaded file exist in the correct path
    cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');

})



