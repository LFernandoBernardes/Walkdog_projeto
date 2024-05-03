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

  it('Inválido Nenhum Campo Preenchido',()=>{
   // cadastroPage.Nome(chance.first())
  //  cadastroPage.Email(chance.email())
  //  cadastroPage.cpf('00638174631')
  //  cadastroPage.cep(90620170)
  //  cadastroPage.addressNumber(1101, 802)
  //  cadastroPage.AtividadeCuidar()
  //  cadastroPage.uploadDocumento() 
    cy.get('.button-register').click()
  //  cadastroPage.ConfirmaçãoCadastro()
    cadastroPage.ErroNenhumcampo()

  })

  it('Inválido Nome',()=>{
   // cadastroPage.Nome(chance.first())
    cadastroPage.Email(chance.email())
    cadastroPage.cpf('00638174631')
    cadastroPage.cep(90620170)
    cadastroPage.addressNumber(1101, 802)
    cadastroPage.AtividadeCuidar()
    cadastroPage.uploadDocumento() 
  cy.get('.button-register').click()
    cadastroPage.ErroNome()
  })

  it('Inválido Email',()=>{
     cadastroPage.Nome(chance.first())
    // cadastroPage.Email(chance.email())
     cadastroPage.cpf('00638174631')
     cadastroPage.cep(90620170)
     cadastroPage.addressNumber(1101, 802)
     cadastroPage.AtividadeCuidar()
     cadastroPage.uploadDocumento() 
   cy.get('.button-register').click()
     cadastroPage.ErroEmail()
   })

   it('Inválido Cpf',()=>{
     cadastroPage.Nome(chance.first())
     cadastroPage.Email(chance.email())
    // cadastroPage.cpf('00638174631')
     cadastroPage.cep(90620170)
     cadastroPage.addressNumber(1101, 802)
     cadastroPage.AtividadeCuidar()
     cadastroPage.uploadDocumento() 
   cy.get('.button-register').click()
     cadastroPage.ErroCpf()
   })


   it('Inválido Cep',()=>{
     cadastroPage.Nome(chance.first())
     cadastroPage.Email(chance.email())
     cadastroPage.cpf('00638174631')
    // cadastroPage.cep(90620170)
     cadastroPage.addressNumber(1101, 802)
     cadastroPage.AtividadeCuidar()
     cadastroPage.uploadDocumento() 
   cy.get('.button-register').click()
     cadastroPage.ErroCep()
   })

   it('Inválido Address',()=>{
     cadastroPage.Nome(chance.first())
     cadastroPage.Email(chance.email())
     cadastroPage.cpf('00638174631')
     cadastroPage.cep(90620170)
    // cadastroPage.addressNumber(1101, 802)
     cadastroPage.AtividadeCuidar()
     cadastroPage.uploadDocumento() 
   cy.get('.button-register').click()
     cadastroPage.ErroAddress()
   })

   it('Inválido UploadID',()=>{
     cadastroPage.Nome(chance.first())
     cadastroPage.Email(chance.email())
     cadastroPage.cpf('00638174631')
     cadastroPage.cep(90620170)
     cadastroPage.addressNumber(1101, 802)
     cadastroPage.AtividadeCuidar()
    // cadastroPage.uploadDocumento() 
   cy.get('.button-register').click()
     cadastroPage.ErroUploadfoto()
   })

})
