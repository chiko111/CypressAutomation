/// <reference types="cypress" />

describe('Bet Factor per Player - test suite', () => {
   
  

context('Create Bet Factor', () => {
  context('Possitive', () => {
    it('On Sport', () => {
      cy.step('Navigate to Client Data modal->Additional')
      cy.step('Click Add New +')
      cy.step('Select from dropdown menu Sport (Soccer)')
      cy.step('Type Bet Factor 0,000001')
      cy.step('Click ADD')
      cy.step('visit frontpage')
      cy.step('Make bet from selected player to soccer event')
      cy.step('Navigate to backoffice check refferal properties')
      
    });
    it('On Sport/Category', () => {
      cy.step('Navigate to Client Data modal->Additional')
      cy.step('Click Add New +')
      cy.step('Select from dropdown menu Sport (Soccer)')
      cy.step('Select from dropdown menu Category (International)')
      cy.step('Type Bet Factor 0,000001')
      cy.step('Click ADD')
      cy.step('visit frontpage')
      cy.step('Make bet from selected player to international/soccer event')
      cy.step('Navigate to backoffice check refferal properties')
    });
    it('On Sport/Category/Tournament', () => {
      cy.step('Navigate to Client Data modal->Additional')
      cy.step('Click Add New +')
      cy.step('Select from dropdown menu Sport (Soccer)')
      cy.step('Select from dropdown menu Category (International)')
      cy.step('Select from dropdown menu Tournament (Euro Cup)')
      cy.step('Type Bet Factor 0,000001')
      cy.step('Click ADD')
      cy.step('visit frontpage')
      cy.step('Make bet from selected player to international/soccer event/Euro Cup')
      cy.step('Navigate to backoffice check refferal properties')
    });
  })
  context('Negative', () => {
})

  it('On Sport/Category/Tournament', () => {
    cy.step('Navigate to Client Data modal->Additional')
    cy.step('Click Add New +')
    cy.step('Select from dropdown menu Sport (Soccer)')
    cy.step('Select from dropdown menu Category (International)')
    cy.step('Select from dropdown menu Tournament (Euro Cup)')
    cy.step('Type Bet Factor 0,000001')
    cy.step('Click ADD')
    cy.step('visit frontpage')
    cy.step('Make bet from selected player to Beach Volley')
    cy.step('Navigate to backoffice check refferal properties')
  });
})
})