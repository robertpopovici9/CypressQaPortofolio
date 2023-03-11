describe('Following links will send an api call',()=>{


    // it('Test for Created link', ()=>{

    //     // visit website
    //     cy.visit('https://demoqa.com/links');

    //     cy.get('#created').click();

    //     cy.get('#linkResponse').contains('Link has responded with staus 201 and status text Created').and('be.visible'); // verify link response for api call

        

    //     cy.get('#no-content').click();
    //     cy.get('#linkResponse').contains('Link has responded with staus 204 and status text No Content').and('be.visible'); // verify link response for api call
    
        

    //     cy.get('#moved').click();
    //     cy.get('#linkResponse').contains('Link has responded with staus 301 and status text Moved Permanently').and('be.visible'); // verify link response for api call
        
       

    //     cy.get('#bad-request').click();
    //     cy.get('#linkResponse').contains('Link has responded with staus 400 and status text Bad Request').and('be.visible'); // verify link response for api call
        
       
    //     cy.get('#unauthorized').click();
    //     cy.get('#linkResponse').contains('Link has responded with staus 401 and status text Unauthorized').and('be.visible'); // verify link response for api call
        
        

    //     cy.get('#forbidden').click();
    //     cy.get('#linkResponse').contains('Link has responded with staus 403 and status text Forbidden').and('be.visible'); // verify link response for api call

        
    //     cy.get('#invalid-url').click();
    //     cy.get('#linkResponse').contains('Link has responded with staus 404 and status text Not Found').and('be.visible');
    //  })

     it('new tab', ()=>{
        
            cy.visit('https://demoqa.com/links')
            cy.get('#dynamicLink').invoke('removeAttr', 'target').click()
            
            cy.get('[alt="Selenium Online Training"]')
                .should('have.class', 'banner-image')
    


     })





})