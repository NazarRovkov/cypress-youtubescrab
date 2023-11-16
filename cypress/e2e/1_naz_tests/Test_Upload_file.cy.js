describe('Test Grinfer', function () {
    it('Test Grinfer btn', () => {
        cy.visit('https://grinfer.com/')
        cy.viewport(1920, 1080)
        cy.get('.sc-286flp-1').should('be.visible').click()
        cy.get(':nth-child(1) > .sc-8lxa00-9').should('be.visible').click()
    })
})