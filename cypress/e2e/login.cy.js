import CadastroPage from "../pages/cadastrovalido"

const cadastroPage = new CadastroPage()


describe('Walkdog ', () => {
  beforeEach(() =>{
    cy.visit('https://walkdog.vercel.app/')
    cy.get("strong").click()
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}`)

  })

  it('Cadastro Válido Cuidar',()=>{
    cadastroPage.CadastroPage()
    cadastroPage.AtividadeCuidar()
    cadastroPage.uploadDocumento() 
    cy.get('.button-register').click()
    cadastroPage.ConfirmaçãoCadastro()

  })

  it('Cadastro Válido Adestrar',()=>{
    cadastroPage.CadastroPage()
    cadastroPage.AtividadeAdestrar()
    cadastroPage.uploadDocumento() 
    cy.get('.button-register').click()
    cadastroPage.ConfirmaçãoCadastro()

  })

  it('Cadastro Válido Cuidar + Adestrar',()=>{
    cadastroPage.CadastroPage()
    cadastroPage.AtividadeCuidar()
    cadastroPage.AtividadeAdestrar()
    cadastroPage.uploadDocumento() 
    cy.get('.button-register').click()
    cadastroPage.ConfirmaçãoCadastro()

  })
})
