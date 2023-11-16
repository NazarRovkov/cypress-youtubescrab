describe('Test registration', () => {

    const USER_EMAIL = '123456@gmail.com'
    const FIRST_NAME = 'Bob'
    const LAST_NAME = 'Top'
    const PASS = 'Qq1234567'

    it('test reg positive', () => {
        cy.visit('https://grinfer.com/')

        cy.get('.sc-2aalce-3')
            .should('be.visible')
            .click()

        cy.get('#email')
            .type(USER_EMAIL)
            .should('have.value', USER_EMAIL)

        cy.get('#firstName')
            .type(FIRST_NAME)
            .should('have.value', FIRST_NAME)

        cy.get('#lastName')
            .type(LAST_NAME)
            .should('have.value', LAST_NAME)

        cy.get('#password')
            .type(PASS)
            .should('have.value', PASS)

        cy.get('.sc-p4qn9p-0')
            .should('be.visible')
            .click()


    })
})