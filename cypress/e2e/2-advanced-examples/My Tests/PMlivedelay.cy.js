/// <reference types="cypress" />

describe('Player Management - test suite', () => {
    
});
context('Live Delay - field validation', () => {
  beforeEach(() => {
  
    cy.viewport(1920, 1080)
    cy.visit('https://backoffice-staging.efbet.tech/adm')
    cy.loginBA()
  })
 
  context('Positive', () => {
    
  
  it('Live-Delay set to 15', () => {
    
    
    cy.contains('Player Management').click({multiple: true})
    cy.get('#root > main > section.efb-container.p-0 > div > div.Sidebar_wrapper__1fkxY > div:nth-child(1) > div > div.ml-1.position-relative.Sidebar_flex2__2MF6G > input').click().type('testchiko{enter}')
    cy.get('#root > main > section.efb-container.p-0 > div > div.PlayerManager_results__Eo-Zk > div.Table_wrapper__1p14A > table > tbody > tr > td:nth-child(1)').rightclick()
    cy.contains('Additional').click()
    cy.get('#liveDelay').click().clear().type('15')
    cy.contains('APPLY').click({force: true})

  })
  it('Live-Delay set to 60', () => {
    
    
    cy.contains('Player Management').click({multiple: true})
    cy.get('#root > main > section.efb-container.p-0 > div > div.Sidebar_wrapper__1fkxY > div:nth-child(1) > div > div.ml-1.position-relative.Sidebar_flex2__2MF6G > input').click().type('testchiko{enter}')
    cy.get('#root > main > section.efb-container.p-0 > div > div.PlayerManager_results__Eo-Zk > div.Table_wrapper__1p14A > table > tbody > tr > td:nth-child(1)').rightclick()
    cy.contains('Additional').click()
    cy.get('#liveDelay').click().clear().type('60')
    cy.contains('APPLY').click({force: true})

  })
  it.only('Live-Delay is set', () => {
    cy.visit('https://staging.efbet.tech/live/soccer-120')
    cy.get('#btn-cookie-pop-up > strong').click()
    cy.get('#username').click({force: true}).type('testchiko')
    cy.get('#password').click({force: true}).type('123456')
    cy.get('#btn-login-login').click({force: true})
    cy.get('#btn-outcome-handle-outcome').click({force: true})
    

  })
  })


context('Negative', () => {
    
});

});