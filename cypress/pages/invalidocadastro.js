class InvalidoPage{

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

    Nome(){
        cy.get(this.selectorsList().nomecompletoField).clear().type('Luiz')

    }

    Email(){
        cy.get(this.selectorsList().emailField).clear().type('email@test.com')

    }

    cpf(){
        cy.get(this.selectorsList().cpfField).clear().type('00655896579')

    }

    cep(){
        cy.get(this.selectorsList().cepField).clear().type(90620170)
        cy.get(this.selectorsList().buscarCepField).click()

    }

    addressNumber(){
        cy.get(this.selectorsList().addressNumberField).clear().type(1101)
        cy.get(this.selectorsList().addressDetailsField).clear().type(901)
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
export default InvalidoPage