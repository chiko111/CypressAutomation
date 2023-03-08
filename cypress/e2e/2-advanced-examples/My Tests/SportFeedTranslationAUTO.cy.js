describe('testing token', () => {
 var soccer_en = "Soccer"
 var soccer_bg = "Футбол"
 var basketball_en = "Basketbal"
 var basketball_bg = "Баскетбол"
 var voleyball_en = "Voleyball"
 var voleyball_bg = "Волейбол"
 var tenis_en = "Tennis"
 var tenis_bg = "Тенис"
 var catbg_bg = "България"
 var catbg_en = "Bulgaria"
 var catsc_bg = "Шотландия"
 var catsc_en = "Scotland"
 var catdn_bg = "Дания"
 var catdn_en = "Denmark"
 var catas_bg = "Австралия"
 var catas_en = "Australia"

  beforeEach(() => {
    cy.tokenadmin()
    cy.tokenplayer('testchiko', '123456')
    
  })
  it("Sport translate bg", () => {
    const env = Cypress.env();
    
    cy.request({
      url: 'https://apigw-staging.efbet.tech/api/v1/sport-event/public/sport?lang=bg&partial=true',
      auth: {bearer: env.tokenplayer},
     
    }).then((response) => { 
    
      env.response_req1 = response.body[0].name
      env.response_id1 = response.body[0].id
      env.response_req2 = response.body[1].name
      env.response_id2 = response.body[1].id
      env.response_req3 = response.body[2].name
      env.response_id3 = response.body[2].id
      env.response_req4 = response.body[3].name
      env.response_id4 = response.body[3].id

      Cypress.env(env)
      
      cy.wrap({
        id: env.response_id1,
        name: env.response_req1,
        translatedNames: {
          en: env.response_req1,
          bg: 'Футбол'
        },
        id: env.response_id2,
        name: env.response_req2,
        translatedNames: {
          bg: env.response_req2
        },
        id: env.response_id3,
        name: env.response_req3,
        translatedNames: {
          bg: env.response_req3
        },
        id: env.response_id4,
        name: env.response_req4,
        translatedNames: {
          bg: env.response_req4
        },
      }).then((payload) => {
       const pay = payload
      
     
      
      
      
      
      
      // cy.log("id" + symbol + response_id1, "name" + symbol + response_req1, "translatedNames" +symbol+JSON.stringify({"en" : response_req1, "bg" : "Футбол"}))
      // cy.log("id" + symbol + response_id2, "name" + symbol + response_req2, "translatedNames" +symbol+JSON.stringify({"bg" : response_req2}))
      // cy.log("id" + symbol + response_id3, "name" + symbol + response_req3, "translatedNames" +symbol+JSON.stringify({"bg" : response_req3}))
      // cy.log("id" + symbol + response_id4, "name" + symbol + response_req4, "translatedNames" +symbol+JSON.stringify({"bg" : response_req4}))
      

    
  

    cy.request({
      method: 'PUT',
      url: 'https://apigw-staging.efbet.tech/api/v1/sport-event/admin/translate/sport',
      auth: {bearer: env.tokenadmin},
      body:[pay]
    }).then((response) => { 
    
    

    })
  })
})
  })
  it("Category translate bg", () => {
    const env = Cypress.env();
    const response_req = 
    cy.request({
      method: 'PUT',
      url: 'https://apigw-staging.efbet.tech/api/v1/sport-event/admin/translate/category',
      auth: {bearer: env.tokenadmin},
      body:[{"id":1251,"name":"Bulgaria","translatedNames":{"en":catbg_en, "bg":catbg_bg}},{"id":1213,"name":"Scotland","translatedNames":{"en":catsc_en, "bg":catsc_bg}},{"id":1215,"name":"Denmark","translatedNames":{"en":catdn_en,"bg":catdn_bg}},{"id":1222,"name":"Australia","translatedNames":{"en":catas_en,"bg":catas_bg}}]
    }).then((response) => { 
    
    

    })
  })
  it("Tournament translate bg", () => {
    const env = Cypress.env();
    const response_req = 
    cy.request({
      method: 'PUT',
      url: 'https://apigw-staging.efbet.tech/api/v1/sport-event/admin/translate/tournament',
      auth: {bearer: env.tokenadmin},
      body:[{"id":1823,"name":"First Professional League","translatedNames":{"en":"Efbet League","bg":" Ефбет лига"}}]
    }).then((response) => { 
    
    

    })
  })
  it("Sport-event translate bg", () => {
    const env = Cypress.env();
    const response_req = 
    cy.request({
      method: 'PUT',
      url: 'https://apigw-staging.efbet.tech/api/v1/sport-event/admin/translate/sport-event',
      auth: {bearer: env.tokenadmin},
      body:[{"id":852783,"name":"PFC Levski Sofia - PFC Ludogorets 1945 Razgrad","translatedNames":{"en":"PFC Levski Sofia - PFC Ludogorets 1945 Razgrad","bg":"ПФК Левски София - ПФК Лудогорец 1945 Разград"}}]
    }).then((response) => { 
    
    

    })
  })
  it("Sport, category, tournament, sport event check bg translation", () => {
    const env = Cypress.env();
    cy.wait(200000)
    cy.request({
      method: 'GET',
      url: ' https://apigw-staging.efbet.tech/api/v1/sport-event/private/sport?lang=bg',
      auth: {bearer: env.tokenplayer},
      }).then((response) => { 
    
    const sport1 = response.body[0].name
    const sport2 = response.body[1].name
    const sport3 = response.body[2].name
    const sport4 = response.body[4].name
    const cat1 = response.body[0].categories[0].name
    const cat2 = response.body[0].categories[1].name
    const cat3 = response.body[0].categories[2].name
    const cat4 = response.body[0].categories[5].name
   

    expect(sport1).to.eq(env.response_req1)
    expect(sport2).to.eq(env.response_req2)
    expect(sport3).to.eq(env.response_req3)
    expect(sport4).to.eq(env.response_req4) 

    expect(cat1).to.eq(catbg_bg)
    expect(cat2).to.eq(catsc_bg)
    expect(cat3).to.eq(catdn_bg) 
    expect(cat4).to.eq(catas_bg) 
    
    cy.log(sport1 + sport2 + sport3 + sport4)
  

  })
})

})


      

//[{"id":1215,"name":"Denmark","translatedNames":{"en":"Denmark","bg":"Дания"}},{"id":1251,"name":"Bulgaria","translatedNames":{"en":"Bulgaria"}}]






