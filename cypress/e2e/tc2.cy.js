describe('Test case 2', () => {
    it('TC2', () => {
        cy.visit('https://demo.bnz.co.nz/client/payees',{ headers: { "Accept-Encoding": "gzip, deflate" } })
        cy.get('button').contains('Add').click()
        cy.get('[id="ComboboxInput-apm-name"]').type('S Goswami').type('{enter}')
        cy.get('[id="apm-bank"]').type('0212340123456001')
        cy.get('button.js-submit.Button.Button--primary.Button--disabled').contains('Add').click()
        cy.get('#notification').contains('Payee added')
        })
    })