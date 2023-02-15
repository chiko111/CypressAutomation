describe('testing token', () => {
 let new_token1 = '' 
 let player_token = ''
 let tokeNN = ''
 let newW = ''
 let textT = ''
 let mm = ''
 let userid = ''
 let authorization = ''
 
  beforeEach(() => {
    
    
  })
  it("test", () => {
    cy.request({
      method: 'POST',
      url: 'https://apigw-staging.efbet.tech/api/v1/administrator/public/token',
      body:{
    "username": "refadmin1",
    "password": "Aa123456!"
    }
    }).then((response) => { 
    new_token1 = response.body.access_token;
    cy.log(new_token1)
  
    const token = new_token1;
    const response_req = [{"id":49,"name":"Ski Alps","translatedNames":{"en":"Alpine Skiing"}}]
    const authorization = `Bearer ${token}`;
    //const bod_req_two = 'lang=BG&lang=EN&lang=EL&lang=RO&lang=TR&pageNumber=0&pageSize=25'
    cy.log(authorization)
    
   

    
    cy.request({
      method: 'GET',
      url: 'https://apigw-staging.efbet.tech/api/v1/betslip/admin/cashout/prematch/odds-range',
      headers: {
        Authorization: authorization
      }
      }).then((response) => { 
        const oddsrange = response.body
        //const textRO = JSON.stringify(foundOutcome)
        let index_c = oddsrange[0]['c']
        let index_d = oddsrange[0]['d']
        let index_q = oddsrange[0]['q']
       
        cy.log(index_c)
        cy.log(index_d)
        cy.log(index_q)
      
  
      })

    })
  })
})



  
      








