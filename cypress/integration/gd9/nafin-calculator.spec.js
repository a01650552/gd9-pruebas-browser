describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', () => {
    describe('Calculadora préstamo', () => {
        it('Should load 24 rows', () => {

            //visita el url
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do')

            //ingreso de los inputs tipo texto
            cy.get('#dispDate')
                .clear()
                .type('05/05/2020 {enter}')
            
            cy.get('#creditAmount')
                .clear()
                .type('20000')
            
            cy.get('#rate')
                .clear()
                .type('15')
            
            //ingreso de los inputs tipo selecta
            cy.get('#paymentMethod')
                .select('1')

            cy.get('#period')
                .select('2')

            //Click al botón calcular
            cy.contains('Calcular')
                .click()
            
            //Click al botón ahora no para quitar el mensaje y proceder con el cargado de la tabla
            cy.contains('Ahora no')
                .click()

            //Encuentra el tbody y se asegura que la cantidad de tr es igual a 24
            cy.get('#resultadosSimulador')
                .find('tbody').find('tr')
                .its('length').should('eq', 24)

        })
    })
})