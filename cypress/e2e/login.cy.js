import CadastroPage from "../pages/cadastrovalido"

const Chance = require ('chance')

const chance = new Chance()
const cadastroPage = new CadastroPage()



describe('Walkdog ', () => {
  beforeEach(() =>{
    cy.visit('https://walkdog.vercel.app/')
    cy.get("strong").click()
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}`)

  })

  it.only('Cadastro Válido Cuidar',()=>{
    cadastroPage.Nome(chance.first())
    cadastroPage.Email(chance.email())
    cadastroPage.cpf('00638174631')
    cadastroPage.cep(90620170)
    cadastroPage.addressNumber(1101, 802)
    cadastroPage.AtividadeCuidar()
    cadastroPage.uploadDocumento() 
    cy.get('.button-register').click()
    cadastroPage.ConfirmaçãoCadastro()

  })

  it('Cadastro Válido Adestrar',()=>{
    cadastroPage.Nome()
    cadastroPage.Email()
    cadastroPage.cpf()
    cadastroPage.cep()
    cadastroPage.addressNumber()
    cadastroPage.AtividadeAdestrar()
    cadastroPage.uploadDocumento() 
    cy.get('.button-register').click()
    cadastroPage.ConfirmaçãoCadastro()

  })

  it('Cadastro Válido Cuidar + Adestrar',()=>{
    cadastroPage.Nome()
    cadastroPage.Email()
    cadastroPage.cpf()
    cadastroPage.cep()
    cadastroPage.addressNumber()
    cadastroPage.AtividadeCuidar()
    cadastroPage.AtividadeAdestrar()
    cadastroPage.uploadDocumento() 
    cy.get('.button-register').click()
    cadastroPage.ConfirmaçãoCadastro()

  })
})
