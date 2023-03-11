// it('Test file upload with valid file extension', () => {
    

//     cy.visit("https://demoqa.com/upload-download")
//     //upload the file
//     cy.get('#uploadFile').attachFile('someFiles.txt')
    
//     //assert the file
//     cy.get('#uploadedFilePath').should('contain', 'someFiles.txt')
//  })

 it('download file in mentioned dir', () => {

    cy.downloadFile('#downloadButton','Downloads','cypress-example.doc')
  })

 

