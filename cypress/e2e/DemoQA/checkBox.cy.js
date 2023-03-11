it ( 'checkbox' , () => {


    //change resolution 
    cy.viewport(1368, 768);

    // // go to address
     cy.visit('https://demoqa.com/checkbox');

    // //collapse home label
    // cy.get('.rct-collapse-btn').click({ multiple: true });

    // //collapse all
    // cy.xpath('//button[@class="rct-collapse rct-collapse-btn"]').eq(1).click();
    // cy.xpath('//button[@class="rct-collapse rct-collapse-btn"]').eq(2).click();
    // cy.xpath('//button[@class="rct-collapse rct-collapse-btn"]').eq(3).click();
    // cy.xpath('//button[@class="rct-collapse rct-collapse-btn"]').eq(4).click();
    // cy.xpath('//button[@class="rct-collapse rct-collapse-btn"]').eq(5).click();


    // // check labels
    // cy.xpath('//span[@class="rct-title"]').eq(3).should('contain', 'Commands').click();
    // cy.xpath('//span[@class="rct-title"]').eq(8).should('contain', 'Veu').click();
    // cy.xpath('//span[@class="rct-title"]').eq(10).should('contain', 'Public').click();
    // cy.xpath('//span[@class="rct-title"]').eq(15).should('contain', 'Word File.doc').click();
    // cy.get('#result').should('exist');

    cy.xpath('//label[@for="tree-node-home"]/../button').click();
    cy.xpath('//label[@for="tree-node-downloads"]/../button').click();








    

})



