describe('Test case 1', () => {
it('TC1', () => {
cy.visit('https://demo.bnz.co.nz/client',{ headers: { "Accept-Encoding": "gzip, deflate" } })
cy.get('button').contains('Menu').click()
cy.get(' li.js-main-menu-payees').click()
cy.get('h1 > span').contains('Payees')
})
})