import Links from "../../Pages/Elements/Links";

//go to text box element
beforeEach(() => {

    Links.visitLinksLink();
})


it('new tab', () => {

// handle a new tab
    Links.homeElement()
        .invoke('removeAttr', 'target')
        .click();

    Links.newPageElement()
        .should('have.class', 'banner-image')

})


it('api test links', () => {

    //Links.apiTestLinks();
    Links.createdElement()
    .click();
    Links.linkResponse()
    .should('exist');


    Links.noContentElement()
    .click();
    Links.linkResponse()
    .should('exist');

    Links.movedElement()
    .click();
    Links.linkResponse()
    .should('exist');

    Links.badRequestElement()
    .click();
    Links.linkResponse()
    .should('exist');

    Links.unauthorizedElement()
    .click();
    Links.linkResponse()
    .should('exist');

    Links.forbiddenElement()
    .click();
    Links.linkResponse()
    .should('exist');

    Links.noContentElement()
    .click();
    Links.linkResponse()
    .should('exist');

})





