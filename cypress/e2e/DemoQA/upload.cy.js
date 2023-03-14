import Upload from "../../Pages/Elements/Upload";

beforeEach(()=>{

    cy.visit(Cypress.env("url") + "/upload-download/");

})

// it('Test file upload with file ', () => {
    
//     //upload file and verify result
//     Upload.uploadElement();
//  })

 it('download file in mentioned dir', () => {
    //download file and verify path /cypress/downloads
  
    Upload.downloadButton();

  })

 

