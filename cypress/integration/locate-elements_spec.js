describe("locate elements", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it("test elements", () => {
        cy.get('#titleH')
        cy.get('#searchCity')
        cy.get('#search-button')
        cy.get('#location')
        cy.get('#temp-value')
        cy.get('#temp-unit') 
        cy.get('#weatherIcon').should('be.visible')
        cy.get('#description')

    })
    it("test location", () => {
        cy.get('#searchCity').should('be.visible')
        cy.get('#searchCity').type('pretoria')
        cy.get('#search-button').click()
        cy.get('#location').should('contain', 'Pretoria')
        cy.get('#temp-value').should('contain',19)
        cy.get('#temp-unit').should('be.visible')
        cy.get('#weatherIcon').should('be.visible')
        cy.get('#description').should('be.visible')

    })
    it("showcase eror message", () => {
        cy.get('#searchCity').type('prtoria')
        cy.get('#search-button').click()
        // cy.contains('City Not Found').should('be.visible')
    })
})