Cypress.Commands.add('visit home',() => {


    const login = () => {
        cy.visit('https://walkdog.vercel.app/')
        cy.get("strong").click()
    }
  
    login()
  })