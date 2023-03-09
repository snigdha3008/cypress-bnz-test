describe('Test case 5', () => {
it('TC5', () => {

cy.visit('https://demo.bnz.co.nz/client/payments',{ headers: { "Accept-Encoding": "gzip, deflate" } })
cy.get('[data-testid="from-account-chooser"]').should('be.visible').click()
//Add Everyday account in From account chooser
cy.get('button').contains('Everyday').click()
cy.get('[data-testid="to-account-chooser"]').click()
cy.get('[data-testid="to-account-accounts-tab"]').click()
//Add Bills account in To account chooser
cy.get('button').contains('Bills').click()
//Transfer $500
cy.get('[data-monitoring-label="Transfer Form Amount"]').type(500).type('{enter}')
//Verify transfer is successful
cy.get('#notification').contains('Transfer successful')
})
})