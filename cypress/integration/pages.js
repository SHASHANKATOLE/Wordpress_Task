


export class Wordpress {

    visit() {
        cy.visit('https://test-setup.com/cypressarpit/wp-login.php')
    }

    login(username, password) {
        cy.get('#user_login').type(username)
        cy.get('#user_pass').type(password)
        cy.get('#wp-submit').click()

    }
    //check the backend was properly reached
    backend() {
        cy.get('.wrap h1').should('have.text', 'Dashboard')
    }

    settings_page() {
        cy.get('.wp-menu-name').eq(11).click()
        cy.url().should('include', 'options-general')
        cy.get('.wrap h1').should('have.text', 'General Settings')
    }

    advanced_ads_page() {
        cy.get('.wp-menu-name').eq(7).click()
        cy.get('.wp-heading-inline').should('be.visible')

    }
    advanced_ads_list(){
        cy.get('.wp-menu-name').eq(5).click()
        cy.get('.wp-submenu.wp-submenu-wrap >li').eq(16).click()
        cy.get('.colspanchange').should('be.visible')
        cy.url().should('include','advanced_ads')
    }
}
