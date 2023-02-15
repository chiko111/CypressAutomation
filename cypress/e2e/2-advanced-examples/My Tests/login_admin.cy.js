import 'cypress-localstorage-commands'
let user

    before(() => {
      cy.postToken()
      cy.saveLocalStorage()
    })
  
    beforeEach(() => {
      cy.restoreLocalStorage()
    })
  
    after(() => {
      // quit and close browser
    })
  
    describe('loginNEW', () => {
      it.only('should login', () => {
        cy.getLocalStorage('identity_token').should('exist')
        cy.getLocalStorage('identity_token').then(token => {
          console.log('Identity token', token)
        })
  
        cy.visit('https://backoffice-staging.efbet.tech/adm/pm')
  
      })
  
    });