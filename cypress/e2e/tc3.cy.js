describe('Test case 3', () => {
    it('TC3', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.visit('https://demo.bnz.co.nz/client/payees',{ headers: { "Accept-Encoding": "gzip, deflate" } })
        cy.get('button').contains('Add').click()
        cy.get('button.js-submit.Button.Button--primary.Button--disabled').contains('Add').click()
        cy.get('.error-header').contains('A problem was found. Please correct the field highlighted below.')
        cy.get('[id="ComboboxInput-apm-name"]').type('S Goswami2').type('{enter}')
        cy.get('button.js-submit.Button.Button--primary.Button--disabled').contains('Add').click()
        cy.get('.error-header').contains('4 problems found. Please correct the fields highlighted below.')
        cy.get('[id="apm-bank"]').type('0212340123556001')
        cy.get('.error-header').should('not.exist')
        })
    })