

describe('wordpress validate functionality', () => {

    beforeEach('Login functionality', () => {

        cy.visit('https://test-setup.com/cypressarpit/wp-login.php')
        cy.get('#user_login').type('arpit')
        cy.get('#user_pass').type('shashank@137')
        cy.get('#wp-submit').click()

        //check the backend was properly reached
        cy.get('.wrap h1').should('have.text', 'Dashboard')

    })
    it('check the right destination is reached', () => {
        cy.get('.wp-menu-name').eq(11).click()
        cy.url().should('include','options-general')
        cy.get('.wrap h1').should('have.text', 'General Settings')


    })

    it('test item should navigate in our plugin Advanced Ads', () => {
        cy.get('.wp-menu-name').eq(7).click()
        cy.get('.wp-heading-inline').should('be.visible')
    })

    it('Advanced Ads ad list', () => {
        cy.get('.wp-menu-name').eq(5).click()
        cy.get('.wp-submenu.wp-submenu-wrap >li').eq(16).click()
        cy.get('.colspanchange').should('be.visible')
        cy.url().should('include','advanced_ads')
    })

})