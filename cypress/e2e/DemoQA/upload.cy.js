import Upload from "../../Pages/Elements/Upload";

it('Test file upload with file ', () => {
    
    Upload.visitUploadLink();

    Upload.uploadElement();
 })

//  it('download file in mentioned dir', () => {

//   cy.visit("https://demoqa.com/upload-download");
//   cy.xpath('//*[@id="downloadButton"]')
//     .downloadFile('Downloads', 'cypress-example.doc' );
    
//   //cy.downloadFile('#downloadButton','Downloads','cypress-example.doc')
//   })

 

