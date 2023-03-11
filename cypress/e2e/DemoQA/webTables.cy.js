it('search for an item in table', ()=>{

    cy.visit('https://demoqa.com/webtables');
    cy.get('#searchBox').type('vega');
})

it('search for an item in tabel and edit',()=>{

    cy.visit('https://demoqa.com/webtables');
    cy.get('#searchBox').type('vega');
    cy.get('#edit-record-1').click();
    cy.get('#department').clear().type('Quality Assurance');
    cy.get('#submit').click();

})

it('add a new record in table', ()=>{

    cy.visit('https://demoqa.com/webtables');
    cy.get('#addNewRecordButton').click();

    cy.get('#firstName').type('Popovici');
    cy.get('#lastName').type('Robert');
    cy.get('#userEmail').type('robert_cs09@yahoo.com');
    cy.get('#age').type('26');
    cy.get('#salary').type('2500');
    cy.get('#department').type('QA');
    cy.get('#submit').click();

})

it('add multiple records', ()=>{

    var genArr = Array.from({length:5},(v,k)=>k+1)
    cy.visit('https://demoqa.com/webtables');

    cy.wrap(genArr).each((index) => {
        cy.get('#addNewRecordButton').click();

    cy.get('#firstName' ).type('Popovici');
    cy.get('#lastName').type('Robert');
    cy.get('#userEmail').type('robert_cs09@yahoo.com');
    cy.get('#age').type('26');
    cy.get('#salary').type('2500');
    cy.get('#department').type('QA');
    cy.get('#submit').click();
    })

})