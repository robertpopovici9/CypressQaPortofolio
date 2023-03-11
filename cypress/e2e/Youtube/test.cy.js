describe('Foe login', () => {

    //testul numarul 1

    it ( 'Login on Dinegu world' , () => {
        cy.visit('https://ro0.forgeofempires.com');
        cy.get('#login_userid').type('traficant de pufarine');
        cy.get('#login_password').type('regulus');
        cy.get('.btn-inner').click();
        cy.get('#play_now_button').click();
        cy.get('#world_selection_list > li > .world_select_button').click();

    })

    
} )