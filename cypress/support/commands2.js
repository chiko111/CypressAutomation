// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (overrides = {}) => {
  Cypress.log({
    name: 'loginViaAuth0',
  });

  const options = {
    method: 'POST',
    url: Cypress.env('auth_url'),
    body: {
      username: Cypress.env('auth_username'),
      password: Cypress.env('auth_password'),
      
    },
  };
  cy.request(options);
});
let username = "refadmin1"
let password = "Aa123456!"
Cypress.Commands.add('loginBA', (overrides = {}) => {
  Cypress.log({
    name: 'loginMBA',
  });
 
  	cy.get('#root > main > div.Login_form__3Nu7g > form > div > input:nth-child(1)').type(username)
    	cy.get('#root > main > div.Login_form__3Nu7g > form > div > input:nth-child(2)').type(password)
    	
    	cy.get('#root > main > div.Login_form__3Nu7g > form > div > button').click()


});

import 'cypress-localstorage-commands'
let user
Cypress.Commands.add('postToken', () => {
  cy.request({
    method: 'POST',
    url: Cypress.env('auth_url'),
    body:{
      username: Cypress.env('auth_username'),
      password: Cypress.env('auth_password'),
     },
      })
        .its('body')
        .then(res => {
          console.log(res)
          user = res.user
          cy.setLocalStorage('identity_token', res.jwt)
        })
    })
  Cypress.Commands.add('set_BF', (overrides = {}) => {
  Cypress.log({
    name: 'BF',
  });
  const options = {
    method: 'POST',
    url: 'https://apigw-staging.efbet.tech/api/v1/player/admin/players/19787/edit',
    body: {
      "sportEvent": {
        "liveDelay": 10,
        "betFactor": [
            {
                "id": 112,
                "entityId": 120,
                "entityType": "SPORT",
                "betFactor":999999.999999999999999999999999999999999999999999
}   
    ]}
 },
  };
  cy.request(options);
});

Cypress.Commands.add('loginADMIN', (username, password) => {
  cy.request({
      method:'POST', 
      url: Cypress.env('auth_url'),
      body: {
	username: Cypress.env('auth_username'),
      	password: Cypress.env('auth_password'),
}})
    .as('loginResponse')
    .then((response) => {
      Cypress.env('token', response.body.accessToken); // either this or some global var but remember that this will only work in one test case
      return response;
      console.log(response.body.accessToken)
    })
    .its('status')
    .should('eq', 200);
});

Cypress.Commands.add('loginPL', () => {
  cy.request({
    method: 'POST',
    url: Cypress.env('auth_url'),
    body:{
	"username": "testchiko",
	"password": "123456"
}
  }).then((resp) => {
    const token = resp.body.token
    Cypress.env('token', token)     // save the token for use elsewhere
  })
})

Cypress.Commands.add('setUserToken', () => {
  cy.window()
    .its('store')
    .invoke('getState')
    .its('me')
    .then((me) => Cypress.env('token', me.token))
  // Here, me is the user stored in redux
})
let new_token = ''
Cypress.Commands.add('loginPLNEW', (user, password) => {
  // make login call to endpoint, and push info to redux store

   cy.request({
    method: 'POST',
    url: Cypress.env('auth_url'),
    body:{
	"username": "testchiko",
	"password": "123456"
}
  }).its('body')
        .then(res => {
          console.log(res)
          new_token = res.body
	

 
})
})
Cypress.Commands.add('loginFREE', (username, password) => {
  cy.request({
    method: 'POST',
    url: Cypress.env('auth_url'),
    body: {username: 'testchiko', password: '123456'}
  }).then((response) => {
  cy.log(response.headers)
  const cookies = response.headers['set-cookie']
  Cypress.Cookies.preserveOnce(cookies)

  })
})

Cypress.Commands.add('loginUI', (overrides = {}) => {
  Cypress.log({
    name: 'loginUI',
  });
	cy.visit('https://staging.efbet.tech/?login=true')  
 	cy.get('#btn-cookie-pop-up').click()
  	cy.get('#username-login-modal').type('testchiko')
    	cy.get('#password-login-modal').type('123456')
    	cy.get('#btn-login-widget-login').click({force: true}).wait(3000)
    	


});


Cypress.Commands.add('refresh_token', (overrides = {}) => {
  Cypress.log({
    name: 'loginUI',
  });

let tokentwo = ''
let newtokenT = ''
let newtokenA = ''
cy.request({
      method: 'POST',
      url: 'https://apigw-staging.efbet.tech/api/v1/player/public/oidc/token',
      body:{
      "username": "testchiko",
      "password": "123456"
    }
      }).then((response) => { 
      newtokenT = response.body.refresh_token;
  
      const tokentwo = newtokenT;
      const aut = ''
      const authorizationR = `refreshToken ${tokentwo}`; 
      cy.log(authorizationR)
  });
  cy.request({
    method: 'POST',
    url: 'https://apigw-staging.efbet.tech/api/v1/player/public/oidc/token',
    body:{
      "username": "testchiko",
      "password": "123456",
      "refreshToken": tokentwo
    }
    }).then((response) => { 
    newtokenA = response.body.access_token;

    const token = newtokenA;
    const authorization = `Bearer ${token}`; 
});
});

