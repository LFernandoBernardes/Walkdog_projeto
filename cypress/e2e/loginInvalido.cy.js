import CadastroPage from "../pages/cadastrovalido"


const cadastroPage = new CadastroPage()


describe('Walkdog ', () => {
  beforeEach(() =>{
    cy.visit('https://walkdog.vercel.app/')
    cy.get("strong").click()
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}`)

  })

  it('Nome Invalido',()=>{
    cadastroPage.Nome()
    cadastroPage.Email()
    cadastroPage.cpf()
    cadastroPage.cep()
    cadastroPage.addressNumber()
    cadastroPage.AtividadeCuidar()
    cadastroPage.uploadDocumento() 
    cy.get('.button-register').click()
    cadastroPage.ConfirmaçãoCadastro()

  })
})