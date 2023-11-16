describe('Test API GET', () => {
    it('GET-Test', () => {
        cy.request('GET', 'https://swapi.dev/api/people/1/').then((Response) => {
            expect(Response).to.have.property('status', 200)
            expect(Response.body).to.not.be.null
            expect(Response.body.films).to.have.length(4)
        })
    })


})