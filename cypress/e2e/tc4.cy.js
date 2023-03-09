describe('Test case 4', () => {
    it('Verify that payees can be sorted by name', () => {
        cy.visit('https://demo.bnz.co.nz/client/payees',{ headers: { "Accept-Encoding": "gzip, deflate" } })
        cy.get('button').contains('Add').should('be.visible').click()
        //Adding new payee details
        cy.get('[id="ComboboxInput-apm-name"]').type('S Goswami').type('{enter}')
        cy.get('[id="apm-bank"]').type('0212340123456001')
        cy.get('button.js-submit.Button.Button--primary.Button--disabled').contains('Add').click()
        //Payee added successfully
        cy.get('#notification').contains('Payee added')
        //Verify list is sorted in ascending order
        cy.get('[aria-label="Sort by payee name A to Z selected. Select again to reverse order."]')
        .contains("Name")
        .should("be.visible")
        //Verify first in the list is Auckland council account
        cy.get('ul > li:nth-child(1) > div').should('have.attr','aria-label', 'Auckland Council . Account number 01-0001-0000001-001.  button')
        //Click name header
        cy.get('[aria-label="Sort by payee name A to Z selected. Select again to reverse order."]')
        .contains("Name").click()
        //Verify list is sorted in descending order
        cy.get('[aria-label="Sort by payee name Z to A selected. Select again to reverse order."]')
        .contains("Name")
        .should("be.visible")
        //Verify last in the list is Auckland council account
        cy.get('ul > li:nth-child(6) > div').should('have.attr','aria-label', 'Auckland Council . Account number 01-0001-0000001-001.  button')
        })
    })