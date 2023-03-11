import TextBox from '../../Pages/Elements/TextBox';
describe('textBox', () =>{


    it("Text box automation input", () => {
    
        cy.viewport(1600, 1024); // change resolution 
        cy.visit("http://demoqa.com/");

        //click on elements
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click();

        //click on text-box label
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
        
        
        // input and assert input
        
        TextBox.insertFullname();
        TextBox.insertEmail();
        TextBox.insertCurrentAddress();
        TextBox.insertPermanentAddress();
        TextBox.clickSubmitButton();

        
       
        
    })
  
        

         
        
    














      })