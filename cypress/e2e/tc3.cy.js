describe('Test case 3', () => {
    it('Verify payee name is a required field', () => {
        cy.visit('https://demo.bnz.co.nz/client/payees',{ headers: { "Accept-Encoding": "gzip, deflate" } })
        cy.get('button').contains('Add').should('be.visible').click()
        cy.get('button.js-submit.Button.Button--primary.Button--disabled').contains('Add').click()
        //Validating error message shows
        cy.get('.error-header').contains('A problem was found. Please correct the field highlighted below.')
        //Add name
        cy.get('[id="ComboboxInput-apm-name"]').type('S Goswami2').type('{enter}')
        cy.get('button.js-submit.Button.Button--primary.Button--disabled').contains('Add').click()
        //Validating error message shows
        cy.get('.error-header').contains('4 problems found. Please correct the fields highlighted below.')
        //Add account number
        cy.get('[id="apm-bank"]').type('0212340123556001')
        //Validating error message is gone
        cy.get('.error-header').should('not.exist')
        })
    })