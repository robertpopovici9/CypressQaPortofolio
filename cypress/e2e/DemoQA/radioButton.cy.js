it('radioButton Yes', () => {

    cy.visit('https://demoqa.com/radio-button');



    // select yes button
    cy.get('#yesRadio').check({ force: true });

    //verify yes button have a class
    cy.get('#yesRadio').should('have.class', 'custom-control-input');


})

it('radioButton Impressive', () => {

    cy.visit('https://demoqa.com/radio-button');


    // select impressive button
    cy.get('#impressiveRadio').check({ force: true });

    //verify Impressive button have a class
    cy.get('#impressiveRadio').should('have.class', 'custom-control-input');


})


// it('radioButton No', () => {

//     cy.visit('https://demoqa.com/radio-button');



// })