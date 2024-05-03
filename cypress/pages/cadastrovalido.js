
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
            successring: ".swal2-success-ring"

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

 

}

export default CadastroPage