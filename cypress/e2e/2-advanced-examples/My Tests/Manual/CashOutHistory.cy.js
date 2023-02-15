
describe('Cash Out History - test suite', () => {
   
  context('Positive', () => {
    
    context('Functional testing', () => {
      it('Full cash out single', () => {
        cy.step('Login with registered user')
        cy.step('Make a bet')
        cy.step('Make Full Cash out')
        cy.step('Login BO->Player->Account History')
        cy.step('Validate Full Cash out - Settlement credit')
      });
      it('Partial Cash out single', () => {
        cy.step('Login with registered user')
        cy.step('Make a bet')
        cy.step('Make Partial Cash out')
        cy.step('Login BO->Player->Account History')
        cy.step('Validate Partial Cash out - Settlement credit')
      });
      it('Full cash out system', () => {
        cy.step('Login with registered user')
        cy.step('Make a bet in a system')
        cy.step('?') 
      });
      it('Partial Cash out system', () => {
        cy.step('Login with registered user')
        cy.step('?')
      });
    })
    context('Cash out history in profile', () => {
      it('Full Cash out', () => {
        cy.step('Login with registered user')
        cy.step('Make a bet')
        cy.step('Open Profile modal->Bet history check bet')
        cy.step('Make Partial Cash out')
        cy.step('Open Profile modal->Bet history check bet is closed/missing')
      });
      it('Partial Cash out', () => {
        cy.step('Login with registered user')
        cy.step('Make a bet')
        cy.step('Make Partial Cash out')
        cy.step('Open Profile modal->Bet history->Cash out history')
        cy.step('Check bet by time / Stake /Cash Out amount')
      });
    })
    context('Odds change Cash Out', () => {
      it('Full Cash Out', () => {
        cy.step('')
      });
      it('Partial Cash Out', () => {
        cy.step('')
      });
    });
    context('Change Status of the Market - Cash Out', () => {
      it('Correct total pages on translated', () => {
        cy.step('')
      });
      it('Correct total pages on For translation', () => {
        cy.step('')
      });
    }) 
  })  
  context('Negative', () => {
    it('Full Cash Out under the limit', () => {
      cy.step('')
    });
    it('Partial Cash Out under the limit', () => {
      cy.step('')
    });
  })  
}) 
  
