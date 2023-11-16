describe('Test autorization', () => {

    const USER_EMAIL = '123456@gmail.com'
    const PASS = 'Qq1234567'

    it('test autorization positive', () => {
        cy.visit('https://grinfer.com/')

        cy.get('.sc-2aalce-2')
            .should('be.visible')
            .click()

        cy.get('.sc-1cabfn5-0')
            .should('contain', 'Welcome back')

        cy.get('input[id="email"]')
            .type(USER_EMAIL)
            .should('have.value', USER_EMAIL)

        cy.get('input[id="password"]')
            .type(PASS)
            .should('have.value', PASS)

        cy.get('.sc-p4qn9p-0')
            .should('be.visible')
            .click()

        cy.get('.sc-nst8f5-2')
            .should('contain', 'Bob')




    })
})