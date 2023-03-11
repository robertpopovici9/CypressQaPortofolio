
describe('textBox', () =>{


    it("Text box automation input", () => {
    

        cy.visit("http://demoqa.com/");

        cy.viewport(1600, 1024); // change resolution 

        //click on elements
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click();

        //click on text-box label
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
        
        // input username 
        cy.get('#userName').type('Robert Popovici');
        cy.get('#userName').should('have.value', 'Robert Popovici'); // verify if field have input value
        cy.get('#userName').should('have.class', 'mr-sm-2 form-control'); // verify if element have a class

        // input Email
        cy.get('#userEmail').type('robert@yahoo.com');
        cy.get('#userEmail').should('have.value', 'robert@yahoo.com'); // verify if field have input value
        cy.get('#userEmail').should('have.class', 'mr-sm-2 form-control'); // verify if element have a class

        // input current address
        cy.get('#currentAddress').type('Coltul Strazii');
        cy.get('#currentAddress').should('have.value', 'Coltul Strazii'); // verify if field have input value
        cy.get('#currentAddress').should('have.class', 'form-control'); // verify if element have a class

        

        // input permanent address
        cy.get('#permanentAddress').type('Stackoverflow');
        cy.get('#permanentAddress').should('have.value', 'Stackoverflow'); // verify if field have input value
        cy.get('#permanentAddress').should('have.class', 'form-control'); // verify if element have a class

        //click submit button
        cy.get('#submit').click();
        cy.get('[type="button"]').should('be.visible'); // verify if attribute type is visible
        cy.get('#permanentAddress').should('have.class', 'form-control'); // verify if element have a class

        
       
        
    })
  
        

         
        
    














      })