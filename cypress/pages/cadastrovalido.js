
class CadastroPage{

    selectorsList (){
        const selectors ={
            nomecompletoField: "[placeholder='Nome completo']",
            emailField: "[placeholder='E-mail']",
            cpfField: "[placeholder='CPF somente números']",
            cepField: "[placeholder='CEP']",
            buscarCepField: "[value='Buscar CEP']",
            addressNumberField: "[placeholder='Número']",
            addressDetailsField: "[placeholder='Complemento']",
            atividadeCuidarField: "[alt='Cuidar']",
            atividadeAdestrarField: "[alt='Adestrar']",
            uploadDocumentoField: ".dropzone",
            successring: ".swal2-success-ring",
            erroalertField: '.alert-error'
            

          }

        return selectors
    }

    Nome(name){
        cy.get(this.selectorsList().nomecompletoField).clear().type(name)

    }

    Email(email){
        cy.get(this.selectorsList().emailField).clear().type(email)

    }

    cpf(cpf){
        cy.get(this.selectorsList().cpfField).clear().type(cpf)

    }

    cep(cep){
        cy.get(this.selectorsList().cepField).clear().type(cep)
        cy.get(this.selectorsList().buscarCepField).click()

    }

    addressNumber(number, details){
        cy.get(this.selectorsList().addressNumberField).clear().type(number)
        cy.get(this.selectorsList().addressDetailsField).clear().type(details)
    }

    AtividadeCuidar(){
        cy.get(this.selectorsList().atividadeCuidarField).click()
    }

    AtividadeAdestrar(){
        cy.get(this.selectorsList().atividadeAdestrarField).click()
    }

    uploadDocumento(){
        cy.get(this.selectorsList().uploadDocumentoField).selectFile('./cypress/fixtures/Drive.png',{ action: 'drag-drop' })
    }

    ConfirmaçãoCadastro(){
        cy.get(this.selectorsList().successring).should('be.visible')
    }

    ErroNenhumcampo(){
        cy.get('.alert-error').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(1) > .alert-error').should('be.visible')
        cy.get(':nth-child(2) > .alert-error').should('be.visible')
        cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .alert-error').should('be.visible')
        cy.get(':nth-child(4) > :nth-child(1) > .alert-error').should('be.visible')
        cy.get('form > :nth-child(7)').should('be.visible')    
    }

    ErroNome(){
        cy.get('.alert-error').should('be.visible') 
    }

    ErroEmail(){
        cy.get(':nth-child(3) > :nth-child(1) > .alert-error').should('be.visible')
    }

    ErroCpf(){
        cy.get(':nth-child(2) > .alert-error').should('be.visible')
    }

    ErroCep(){
        cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .alert-error').should('be.visible')
    }

    ErroAddress(){
        cy.get(':nth-child(4) > :nth-child(1) > .alert-error').should('be.visible')
    }

    ErroUploadfoto(){
        cy.get('form > :nth-child(7)').should('be.visible') 
    }
 

}

export default CadastroPage