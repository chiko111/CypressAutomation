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


Cypress.Commands.add('loginplayer', (user, password) => {
  cy.visit('https://staging.efbet.tech?login=true')
      cy.get('#btn-cookie-pop-up').click()
      cy.get('#username-login-modal').type(user)
      cy.get('#password-login-modal').type(password)
      cy.get('#btn-login-widget-login').click()
})


Cypress.Commands.add('tokenplayer', (user, password) => {
  const env = Cypress.env() 
  cy.request({
    method: 'POST',
    url: env.auth_url,
    body: {
      "username": env.auth_username,
      "password": env.auth_password
    }
  }).then((resp) => {
    env.tokenplayer = resp.body.access_token;
    Cypress.env(env)
  })
})

Cypress.Commands.add('tokenadmin', () => {
  const env = Cypress.env() 
  cy.request({
    method: 'POST',
    url: env.auth_url_admin,
    body: {
      "username": env.auth_username_admin,
      "password": env.auth_password_admin
    }
  }).then((response) => { 
    env.tokenadmin = response.body.access_token// save the token for use elsewhere
    Cypress.env(env)
  })
})




   
Cypress.Commands.add('cashoutcalculation', (oddint) => { 
  const env = Cypress.env() 
  cy.request({
    method: 'POST',
    url: env.auth_url_admin,
    body: {
      "username": "refadmin1",
      "password": "Aa123456!"
    }
  }).then((response) => { 
    env.tokenadmin = response.body.access_token// save the token for use elsewhere
    Cypress.env(env)
  

    cy.request({
      url: 'https://apigw-staging.efbet.tech/api/v1/betslip/admin/cashout/inplay/odds-range',
      auth:{bearer: env.tokenadmin}
      }).then((response) => { 
        const oddsrange = response.body
        let index_c = oddsrange[oddint]['c']
        let index_d = oddsrange[oddint]['d']
        let index_delta = oddsrange[oddint]['delta']
        let index_mu = oddsrange[oddint]['mu']
    cy.request({
      method: 'GET',
      url: 'https://apigw-staging.efbet.tech/api/v1/betslip/admin/cashout/param-inplay',
      auth:{bearer: env.tokenadmin}
      }).then((response) => { 
        const oddparam = response.body
        

        const rescaletedTime = (Math.PI*(Number(env.ctime))/Number(env.ttime))
        cy.log("Rescalated time", rescaletedTime)
        const Kint_cur = env.odd/env.Codds
        cy.log("K int/ K cur", Kint_cur)
        const sinA1 = Math.sin(Number(response.body[1].seriesNumber)*rescaletedTime)
        
        const sinA2 = Math.sin(Number(response.body[2].seriesNumber)*rescaletedTime)
        const sinA3 = Math.sin(Number(response.body[3].seriesNumber)*rescaletedTime)
        const sinA4 = Math.sin(Number(response.body[4].seriesNumber)*rescaletedTime)
        const sinA5 = Math.sin(Number(response.body[5].seriesNumber)*rescaletedTime)
        const sinA6 = Math.sin(Number(response.body[6].seriesNumber)*rescaletedTime)
        const sinA7 = Math.sin(Number(response.body[7].seriesNumber)*rescaletedTime)
        const sinA8 = Math.sin(Number(response.body[8].seriesNumber)*rescaletedTime)
        const sinA9 = Math.sin(Number(response.body[9].seriesNumber)*rescaletedTime)
        const sinA10 = Math.sin(Number(response.body[10].seriesNumber)*rescaletedTime)
        const sinA11 = Math.sin(Number(response.body[11].seriesNumber)*rescaletedTime)
        const sinA12 = Math.sin(Number(response.body[12].seriesNumber)*rescaletedTime)
        const sinA13 = Math.sin(Number(response.body[13].seriesNumber)*rescaletedTime)
        const sinA14 = Math.sin(Number(response.body[14].seriesNumber)*rescaletedTime)
        const sinA15 = Math.sin(Number(response.body[15].seriesNumber)*rescaletedTime)
        const sinA16 = Math.sin(Number(response.body[16].seriesNumber)*rescaletedTime)
        const sinA17 = Math.sin(Number(response.body[17].seriesNumber)*rescaletedTime)
        const sinA18 = Math.sin(Number(response.body[18].seriesNumber)*rescaletedTime)
        const sinA19 = Math.sin(Number(response.body[19].seriesNumber)*rescaletedTime)
        const sinA20 = Math.sin(Number(response.body[20].seriesNumber)*rescaletedTime)
    
        const sumAsin = (Number(sinA1)*Number(response.body[1].value))+(Number(sinA2)*Number(response.body[2].value))+(Number(sinA3)*Number(response.body[3].value))+(Number(sinA4)*Number(response.body[4].value))+(Number(sinA5)*Number(response.body[5].value))+(Number(sinA6)*Number(response.body[6].value))+(Number(sinA7)*Number(response.body[7].value))+(Number(sinA8)*Number(response.body[8].value))+(Number(sinA9)*Number(response.body[9].value))+(Number(sinA10)*Number(response.body[10].value))+(Number(sinA11)*Number(response.body[11].value))+(Number(sinA12)*Number(response.body[12].value))+(Number(sinA13)*Number(response.body[13].value))+(Number(sinA14)*Number(response.body[14].value))+(Number(sinA15)*Number(response.body[15].value))+(Number(sinA16)*Number(response.body[16].value))+(Number(sinA17)*Number(response.body[17].value))+(Number(sinA18)*Number(response.body[18].value))+(Number(sinA19)*Number(response.body[19].value))+(Number(sinA20)*Number(response.body[20].value))+(Number(response.body[0].value))
        cy.log("sum sin a*value",sumAsin)
        const cosB1 = Math.cos(Number(response.body[21].seriesNumber)*rescaletedTime)
        
        const cosB2 = Math.cos(Number(response.body[22].seriesNumber)*rescaletedTime)
        const cosB3 = Math.cos(Number(response.body[23].seriesNumber)*rescaletedTime)
        const cosB4 = Math.cos(Number(response.body[24].seriesNumber)*rescaletedTime)
        const cosB5 = Math.cos(Number(response.body[25].seriesNumber)*rescaletedTime)
        const cosB6 = Math.cos(Number(response.body[26].seriesNumber)*rescaletedTime)
        const cosB7 = Math.cos(Number(response.body[27].seriesNumber)*rescaletedTime)
        const cosB8 = Math.cos(Number(response.body[28].seriesNumber)*rescaletedTime)
        const cosB9 = Math.cos(Number(response.body[29].seriesNumber)*rescaletedTime)
        const cosB10 = Math.cos(Number(response.body[30].seriesNumber)*rescaletedTime)
        const cosB11 = Math.cos(Number(response.body[31].seriesNumber)*rescaletedTime)
        const cosB12 = Math.cos(Number(response.body[32].seriesNumber)*rescaletedTime)
        const cosB13 = Math.cos(Number(response.body[33].seriesNumber)*rescaletedTime)
        const cosB14 = Math.cos(Number(response.body[34].seriesNumber)*rescaletedTime)
        const cosB15 = Math.cos(Number(response.body[35].seriesNumber)*rescaletedTime)
        const cosB16 = Math.cos(Number(response.body[36].seriesNumber)*rescaletedTime)
        const cosB17 = Math.cos(Number(response.body[37].seriesNumber)*rescaletedTime)
        const cosB18 = Math.cos(Number(response.body[38].seriesNumber)*rescaletedTime)
        const cosB19 = Math.cos(Number(response.body[39].seriesNumber)*rescaletedTime)
        const cosB20 = Math.cos(Number(response.body[40].seriesNumber)*rescaletedTime)
    
        const  sumBcos = Number(cosB1)*Number(response.body[21].value)+Number(cosB2)*Number(response.body[22].value)+Number(cosB3)*Number(response.body[23].value)+Number(cosB4)*Number(response.body[24].value)+Number(cosB5)*Number(response.body[25].value)+Number(cosB6)*Number(response.body[26].value)+Number(cosB7)*Number(response.body[27].value)+Number(cosB8)*Number(response.body[28].value)+Number(cosB9)*Number(response.body[29].value)+Number(cosB10)*Number(response.body[30].value)+Number(cosB11)*Number(response.body[31].value)+Number(cosB12)*Number(response.body[32].value)+Number(cosB13)*Number(response.body[33].value)+Number(cosB14)*Number(response.body[34].value)+Number(cosB15)*Number(response.body[35].value)+Number(cosB16)*Number(response.body[36].value)+Number(cosB17)*Number(response.body[37].value)+Number(cosB18)*Number(response.body[38].value)+Number(cosB19)*Number(response.body[39].value)+Number(cosB20)*Number(response.body[40].value)
        cy.log("sum cos b*value", sumBcos)
    
        const sinal1 = Math.sin(Math.PI*Number(response.body[42].seriesNumber)*Number(Kint_cur)/5)
        const sinal2 = Math.sin(Math.PI*Number(response.body[43].seriesNumber)*Number(Kint_cur)/5)
        const sinal3 = Math.sin(Math.PI*Number(response.body[44].seriesNumber)*Number(Kint_cur)/5)
        const sinal4 = Math.sin(Math.PI*Number(response.body[45].seriesNumber)*Number(Kint_cur)/5)
        const sinal5 = Math.sin(Math.PI*Number(response.body[46].seriesNumber)*Number(Kint_cur)/5)
        const sinal6 = Math.sin(Math.PI*Number(response.body[47].seriesNumber)*Number(Kint_cur)/5)
        const sinal7 = Math.sin(Math.PI*Number(response.body[48].seriesNumber)*Number(Kint_cur)/5)
        const sinal8 = Math.sin(Math.PI*Number(response.body[49].seriesNumber)*Number(Kint_cur)/5)
        const sinal9 = Math.sin(Math.PI*Number(response.body[50].seriesNumber)*Number(Kint_cur)/5)
        const sinal10 = Math.sin(Math.PI*Number(response.body[51].seriesNumber)*Number(Kint_cur)/5)
        const sinal11 = Math.sin(Math.PI*Number(response.body[52].seriesNumber)*Number(Kint_cur)/5)
        const sinal12 = Math.sin(Math.PI*Number(response.body[53].seriesNumber)*Number(Kint_cur)/5)
        const sinal13 = Math.sin(Math.PI*Number(response.body[54].seriesNumber)*Number(Kint_cur)/5)
        const sinal14 = Math.sin(Math.PI*Number(response.body[55].seriesNumber)*Number(Kint_cur)/5)
        const sinal15 = Math.sin(Math.PI*Number(response.body[56].seriesNumber)*Number(Kint_cur)/5)
        const sinal16 = Math.sin(Math.PI*Number(response.body[57].seriesNumber)*Number(Kint_cur)/5)
        const sinal17 = Math.sin(Math.PI*Number(response.body[58].seriesNumber)*Number(Kint_cur)/5)
        const sinal18 = Math.sin(Math.PI*Number(response.body[59].seriesNumber)*Number(Kint_cur)/5)
        const sinal19 = Math.sin(Math.PI*Number(response.body[60].seriesNumber)*Number(Kint_cur)/5)
        const sinal20 = Math.sin(Math.PI*Number(response.body[61].seriesNumber)*Number(Kint_cur)/5)
    
        const cosbe1 = Math.cos(Math.PI*Number(response.body[62].seriesNumber)*Number(Kint_cur)/5)
        const cosbe2 = Math.cos(Math.PI*Number(response.body[63].seriesNumber)*Number(Kint_cur)/5)
        const cosbe3 = Math.cos(Math.PI*Number(response.body[64].seriesNumber)*Number(Kint_cur)/5)
        const cosbe4 = Math.cos(Math.PI*Number(response.body[65].seriesNumber)*Number(Kint_cur)/5)
        const cosbe5 = Math.cos(Math.PI*Number(response.body[66].seriesNumber)*Number(Kint_cur)/5)
        const cosbe6 = Math.cos(Math.PI*Number(response.body[67].seriesNumber)*Number(Kint_cur)/5)
        const cosbe7 = Math.cos(Math.PI*Number(response.body[68].seriesNumber)*Number(Kint_cur)/5)
        const cosbe8 = Math.cos(Math.PI*Number(response.body[69].seriesNumber)*Number(Kint_cur)/5)
        const cosbe9 = Math.cos(Math.PI*Number(response.body[70].seriesNumber)*Number(Kint_cur)/5)
        const cosbe10 = Math.cos(Math.PI*Number(response.body[71].seriesNumber)*Number(Kint_cur)/5)
        const cosbe11 = Math.cos(Math.PI*Number(response.body[72].seriesNumber)*Number(Kint_cur)/5)
        const cosbe12 = Math.cos(Math.PI*Number(response.body[73].seriesNumber)*Number(Kint_cur)/5)
        const cosbe13 = Math.cos(Math.PI*Number(response.body[74].seriesNumber)*Number(Kint_cur)/5)
        const cosbe14 = Math.cos(Math.PI*Number(response.body[75].seriesNumber)*Number(Kint_cur)/5)
        const cosbe15 = Math.cos(Math.PI*Number(response.body[76].seriesNumber)*Number(Kint_cur)/5)
        const cosbe16 = Math.cos(Math.PI*Number(response.body[77].seriesNumber)*Number(Kint_cur)/5)
        const cosbe17 = Math.cos(Math.PI*Number(response.body[78].seriesNumber)*Number(Kint_cur)/5)
        const cosbe18 = Math.cos(Math.PI*Number(response.body[79].seriesNumber)*Number(Kint_cur)/5)
        const cosbe19 = Math.cos(Math.PI*Number(response.body[80].seriesNumber)*Number(Kint_cur)/5)
        const cosbe20 = Math.cos(Math.PI*Number(response.body[81].seriesNumber)*Number(Kint_cur)/5)
    
       // const  sumalbe = Number((sinal1)*Number(response.body[42].value))+(Number(sinal2)*Number(response.body[43].value))+(Number(sinal3)*Number(response.body[44].value))+(Number(sinal4)*Number(response.body[45].value))+(Number(sinal5)*Number(response.body[46].value))+(Number(sinal6)*Number(response.body[47].value))+Number(sinal7)*Number(response.body[48].value)+Number(sinal8)*Number(response.body[49].value)+Number(sinal9)*Number(response.body[50].value)+Number(sinal10)*Number(response.body[51].value)+Number(sinal11)*Number(response.body[52].value)+Number(sinal12)*Number(response.body[53].value)+Number(sinal13)*Number(response.body[54].value)+Number(sinal14)*Number(response.body[55].value)+Number(sinal15)*Number(response.body[56].value)+Number(sinal16)*Number(response.body[57].value)+Number(sinal17)*Number(response.body[58].value)+Number(sinal18)*Number(response.body[59].value)+Number(sinal19)*Number(response.body[60].value)+Number(sinal20)*Number(response.body[61].value)+Number(cosbe1)*Number(response.body[62].value)+Number(cosbe2)*Number(response.body[63].value)+Number(cosbe3)*Number(response.body[64].value)+Number(cosbe4)*Number(response.body[65].value)+Number(cosbe5)*Number(response.body[66].value)+Number(cosbe6)*Number(response.body[67].value)+Number(cosbe7)*Number(response.body[68].value)+Number(cosbe8)*Number(response.body[69].value)+Number(cosbe9)*Number(response.body[70].value)+Number(cosbe10)*Number(response.body[71].value)+Number(cosbe11)*Number(response.body[72].value)+Number(cosbe12)*Number(response.body[73].value)+Number(cosbe13)*Number(response.body[74].value)+Number(cosbe14)*Number(response.body[75].value)+Number(cosbe15)*Number(response.body[76].value)+Number(cosbe16)*Number(response.body[77].value)+(Number(cosbe17)*Number(response.body[78].value))+(Number(cosbe18)*Number(response.body[79].value))+(Number(cosbe19)*Number(response.body[80].value))+(Number(cosbe20)*Number(response.body[81].value))+(Number(response.body[41].value))
       const  sumalbe = Number((sinal1)*Number(response.body[42].value))+(Number(sinal2)*Number(response.body[43].value))+(Number(sinal3)*Number(response.body[44].value))+(Number(sinal4)*Number(response.body[45].value))+(Number(sinal5)*Number(response.body[46].value))+(Number(sinal6)*Number(response.body[47].value))+Number(sinal7)*Number(response.body[48].value)+Number(sinal8)*Number(response.body[49].value)+Number(sinal9)*Number(response.body[50].value)+Number(sinal10)*Number(response.body[51].value)+Number(sinal11)*Number(response.body[52].value)+Number(sinal12)*Number(response.body[53].value)+Number(sinal13)*Number(response.body[54].value)+Number(sinal14)*Number(response.body[55].value)+Number(sinal15)*Number(response.body[56].value)+Number(sinal16)*Number(response.body[57].value)+Number(sinal17)*Number(response.body[58].value)+Number(sinal18)*Number(response.body[59].value)+Number(sinal19)*Number(response.body[60].value)+Number(sinal20)*Number(response.body[61].value)+Number(cosbe1)*Number(response.body[62].value)+Number(cosbe2)*Number(response.body[63].value)+Number(cosbe3)*Number(response.body[64].value)+Number(cosbe4)*Number(response.body[65].value)+Number(cosbe5)*Number(response.body[66].value)+Number(cosbe6)*Number(response.body[67].value)+Number(cosbe7)*Number(response.body[68].value)+Number(cosbe8)*Number(response.body[69].value)+Number(cosbe9)*Number(response.body[70].value)+Number(cosbe10)*Number(response.body[71].value)+Number(cosbe11)*Number(response.body[72].value)+Number(cosbe12)*Number(response.body[73].value)+Number(cosbe13)*Number(response.body[74].value)+Number(cosbe14)*Number(response.body[75].value)+Number(cosbe15)*Number(response.body[76].value)+Number(cosbe16)*Number(response.body[77].value)+(Number(cosbe17)*Number(response.body[78].value))+(Number(cosbe18)*Number(response.body[79].value))+(Number(cosbe19)*Number(response.body[80].value))+(Number(cosbe20)*Number(response.body[81].value))+(Number(response.body[41].value))
        cy.log("sum alfa+beta", sumalbe)
        const CO_in = (((Number(index_c)*Number(Kint_cur))+Number(index_d))*Math.pow((Number(sumAsin)+Number(sumBcos)), Number(index_delta))*Math.pow(Number(sumalbe), Number(index_mu)))*Number(env.stakeIN)
        cy.log(Number(CO_in))
    
      })
    })
    })
  })

  Cypress.Commands.add('cashoutcalculation_premach', (oddint_p) => { 
    const env = Cypress.env() 
    cy.request({
      method: 'POST',
      url: env.auth_url_admin,
      body: {
        "username": "refadmin1",
        "password": "Aa123456!"
      }
    }).then((response) => { 
      env.tokenadmin = response.body.access_token// save the token for use elsewhere
      Cypress.env(env)

  cy.request({
    url: 'https://apigw-staging.efbet.tech/api/v1/betslip/admin/cashout/prematch/odds-range',
    auth: {bearer: env.tokenadmin},
    }).then((response) => { 
    

      CO = ((Number(response.body[oddint_p]['c'])*(Number(env.odd_prematch)/Number(env.Codds_prematch)))+Number(response.body[oddint_p]['d']))*Number(response.body[oddint_p]['q'])
      cy.log(CO)
    })
  })
})