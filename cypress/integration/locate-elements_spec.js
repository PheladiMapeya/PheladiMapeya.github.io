describe("locate elements", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it("test elements", () => {
        cy.get('#titleH')
        cy.get('#location1')
        cy.get('#location2')
        cy.get('#location3')
        cy.get('#weatherIcon').should('be.visible')
        cy.get('#weatherIcon1').should('be.visible')
        cy.get('#weatherIcon2').should('be.visible')
        cy.get('#desc')
        cy.get('#desc1')
        cy.get('#desc2')
        cy.get('#temp-value1')
        cy.get('#temp-value2')
        cy.get('#temp-value3')
        cy.get('#temp-unit') 

    })
    it("test joburg temperature", () => {
        cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather?q=johannesburg&appid=02d9064b9ef20ab93d12b832adac539b', {
            fixture: "johannesburg-weather.json" , statusCode:200 
        })
        cy.get('#temp-value1').should('contain',21)
        cy.get('#temp-unit').should('be.visible')
    })
    it("test durban temperature", () => {
        cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather?q=durban&appid=02d9064b9ef20ab93d12b832adac539b', {
            fixture: "durban-weather.json" , statusCode:200 
        })
        cy.get('#temp-value2').should('contain',22)
        cy.get('#temp-unit').should('be.visible')
    })
    it("test capeTown temperature", () => {
        cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather?q=cape town&appid=02d9064b9ef20ab93d12b832adac539b', {
            fixture: "capeTown-weather.json" , statusCode:200 
        })
        cy.get('#temp-value3').should('contain',18)
        cy.get('#temp-unit').should('be.visible')
    })
})