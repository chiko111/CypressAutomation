describe('testing token', () => {
 let new_token1 = '' 
 let new_token2 = '' 
 let player_token = ''
 let split_text = ''
 let new_token_one = ''
 let newT = ''
 
  beforeEach(() => {
  })
  it("Login Request with post method", () => {
    cy.request({
      method: 'POST',
      url: "https://apigw-staging.efbet.tech/api/v1/administrator/public/token",
      body:{
        "password": "Aa123456!",
        "username": "refadmin1"
      }
  }).then((response) => { 
   new_token1 = response.body.access_token;
   cy.log(new_token1)
  
  const token = new_token1;
  const authorization = `bearer ${ new_token1 }`;
  cy.log(authorization)
    cy.request({
      method: 'GET',
      url: "https://apigw-staging.efbet.tech/api/v1/sport-event/admin/translate/type/SPORT?lang=BG&lang=EN&lang=EL&lang=RO&lang=TR&pageNumber=0&pageSize=25",
      headers:{
      authorization
      }
  }).then((response) => { 
    new_token2 = response.body.content;
    cy.log(new_token2)
})
  })
})
})