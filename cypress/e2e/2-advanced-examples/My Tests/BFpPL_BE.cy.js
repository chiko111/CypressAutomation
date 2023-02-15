describe('testing token', () => {
 let new_token1 = '' 
 let player_token = ''
 let tokeNN = ''
 let newW = ''
 let textT = ''
 let mm = ''
 let userid = ''
 
 
  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: Cypress.env('auth_url'),
      body:{
    "username": "testchiko1",
    "password": "123456"
    }
    }).then((response) => { 
    new_token1 = response.body.access_token;
    cy.log(new_token1)
  
    const token = new_token1;
    const authorization = `bearer ${ new_token1 }`;
    cy.log(authorization)
    cy.request({
      method: 'GET',
      url: 'https://apigw-staging.efbet.tech/api/v1/casino-backoffice/private/games/liveGames',
      headers:{
      authorization
      }
    }).then((response) => { 
    player_token = response.body.playerToken;
    cy.log(player_token)
    cy.visit('https://integrations01-backoffice.betgames.tv/back/user/login')
    cy.get('#valid > fieldset > div.loginRow.noborder > div.loginInput').type('efbet_com2@betgames.tv')
    cy.get('#valid > fieldset > div:nth-child(2) > div.loginInput').type('8cW1BjyHPO')
    cy.get('#submit').click()
    cy.xpath('/html/body/div[3]/div[1]/form[5]/fieldset/div/div[2]/div[1]/input').type(player_token)
    cy.xpath('/html/body/div[3]/div[1]/form[5]/fieldset/div/input').click({force: true})
    cy.contains('xml response').click()
    cy.xpath('/html/body/div[3]/div[1]/div[7]/pre/text()').invoke('text').should('have.length.gt', 37).as('token')
      cy.get('@token').then(textT  => {  
          let nn = textT.split('<')[17];
          let mm = nn.replace('new_token>', '')
          Cypress.env('ll', mm) 
      })
    })
       
  })

})
  

    it("Get Balance", () => {
    cy.visit('https://integrations01-backoffice.betgames.tv/back/user/login')
    //cy.get('#valid > fieldset > div.loginRow.noborder > div.loginInput').type('efbet_com2@betgames.tv')
    //cy.get('#valid > fieldset > div:nth-child(2) > div.loginInput').type('8cW1BjyHPO')
    //cy.get('#submit').click()
    const tot = Cypress.env('ll')
    cy.log(tot)
    cy.xpath('/html/body/div[3]/div[1]/form[6]/fieldset/div/div[2]/div[1]/input').type(tot)
    cy.xpath('/html/body/div[3]/div[1]/form[6]/fieldset/div/input').click({force: true})
    })
    it("Transaction bet pay in", () => {
      cy.visit('https://integrations01-backoffice.betgames.tv/back/user/login')
      //cy.get('#valid > fieldset > div.loginRow.noborder > div.loginInput').type('efbet_com2@betgames.tv')
      //cy.get('#valid > fieldset > div:nth-child(2) > div.loginInput').type('8cW1BjyHPO')
      //cy.get('#submit').click()
      const token = Cypress.env('ll')
      cy.log(token)
      cy.xpath('/html/body/div[3]/div[1]/form[7]/fieldset/div/div[2]/div[1]/input').type(token)
      cy.xpath('/html/body/div[3]/div[1]/form[7]/fieldset/div/input').click({force: true})
    })
    it("Transaction bet pay out", () => {
      cy.visit('https://integrations01-backoffice.betgames.tv/back/user/login')
      //cy.get('#valid > fieldset > div.loginRow.noborder > div.loginInput').type('efbet_com2@betgames.tv')
      //cy.get('#valid > fieldset > div:nth-child(2) > div.loginInput').type('8cW1BjyHPO')
      //cy.get('#submit').click()
      const tokenH = Cypress.env('ll')
      cy.log(tokenH)
      const userid = '20353'
      cy.xpath('/html/body/div[3]/div[1]/form[8]/fieldset/div/div[2]/div[1]/input').clear().type(userid)
      cy.xpath('/html/body/div[3]/div[1]/form[8]/fieldset/div/div[3]/div[1]/input').type(tokenH)
      cy.xpath('/html/body/div[3]/div[1]/form[8]/fieldset/div/input').click({force: true})
    })
    it("Transaction bet subscription pay in", () => {
      cy.visit('https://integrations01-backoffice.betgames.tv/back/user/login')
      //cy.get('#valid > fieldset > div.loginRow.noborder > div.loginInput').type('efbet_com2@betgames.tv')
      //cy.get('#valid > fieldset > div:nth-child(2) > div.loginInput').type('8cW1BjyHPO')
      //cy.get('#submit').click()
      const tokenJ = Cypress.env('ll')
      cy.log(tokenJ)
      const userid = '20353'
      //cy.xpath('/html/body/div[3]/div[1]/form[8]/fieldset/div/div[2]/div[1]/input').clear().type(userid)
      cy.xpath('/html/body/div[3]/div[1]/form[9]/fieldset/div/div[2]/div[1]/input').type(tokenJ)
      cy.xpath('/html/body/div[3]/div[1]/form[9]/fieldset/div/input').click({force: true})
    })
    it("Combination bet pay in", () => {
      cy.visit('https://integrations01-backoffice.betgames.tv/back/user/login')
      //cy.get('#valid > fieldset > div.loginRow.noborder > div.loginInput').type('efbet_com2@betgames.tv')
      //cy.get('#valid > fieldset > div:nth-child(2) > div.loginInput').type('8cW1BjyHPO')
      //cy.get('#submit').click()
      const tokenKK = Cypress.env('ll')
      cy.log(tokenKK)
      const userid = '20353'
      //cy.xpath('/html/body/div[3]/div[1]/form[8]/fieldset/div/div[2]/div[1]/input').clear().type(userid)
      cy.xpath('/html/body/div[3]/div[1]/form[10]/fieldset/div/div[2]/div[1]/input').type(tokenKK)
      cy.xpath('/html/body/div[3]/div[1]/form[10]/fieldset/div/div[5]/div[1]/input').clear().type("12345")
      cy.xpath('/html/body/div[3]/div[1]/form[10]/fieldset/div/input').click({force: true})
    })
    it("Combination bet pay out", () => {
      cy.visit('https://integrations01-backoffice.betgames.tv/back/user/login')
      //cy.get('#valid > fieldset > div.loginRow.noborder > div.loginInput').type('efbet_com2@betgames.tv')
      //cy.get('#valid > fieldset > div:nth-child(2) > div.loginInput').type('8cW1BjyHPO')
      //cy.get('#submit').click()
      const tokenR = Cypress.env('ll')
      cy.log(tokenR)
      const userid = '20353'
      cy.xpath('/html/body/div[3]/div[1]/form[11]/fieldset/div/div[2]/div[1]/input').clear().type(userid)
      cy.xpath('/html/body/div[3]/div[1]/form[11]/fieldset/div/div[3]/div[1]/input').type(tokenR)
      cy.xpath('/html/body/div[3]/div[1]/form[11]/fieldset/div/div[4]/div[1]/input').clear().type("12345")
      cy.xpath('/html/body/div[3]/div[1]/form[11]/fieldset/div/input').click({force: true})
    })
    it("Promo pay out", () => {
      cy.visit('https://integrations01-backoffice.betgames.tv/back/user/login')
      //cy.get('#valid > fieldset > div.loginRow.noborder > div.loginInput').type('efbet_com2@betgames.tv')
      //cy.get('#valid > fieldset > div:nth-child(2) > div.loginInput').type('8cW1BjyHPO')
      //cy.get('#submit').click()
      const tokenQ = Cypress.env('ll')
      cy.log(tokenQ)
      const userid = '20353'
      cy.xpath('/html/body/div[3]/div[1]/form[12]/fieldset/div/div[2]/div[1]/input').clear().type(userid)
      cy.xpath('/html/body/div[3]/div[1]/form[12]/fieldset/div/div[3]/div[1]/input').type(tokenQ)
      //cy.xpath('/html/body/div[3]/div[1]/form[11]/fieldset/div/div[4]/div[1]/input').clear().type("12345")
      cy.xpath('/html/body/div[3]/div[1]/form[12]/fieldset/div/input').click({force: true})
    })
      

  })






