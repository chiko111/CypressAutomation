describe("Test with session", () => {
  let new_token1 = ''
  let newW = ''
  let sport_name = 'Баскетбол'
  let newtokenT = ''
  let tokentwo = ''
  let authorizationR = ''
  let newtokenA = ''
  beforeEach(() => {
      // Retrieve the session from local storage
      //const session = JSON.parse(localStorage.getItem("session"));
      cy.viewport(1920, 1080)
      // Set the session as a header for subsequent requests
      //cy.loginUI( (req) => {
      //  req.headers["session"] = session;
      //  return req;
    //});
  });
  it("Change translation of Sport/Basketball",()=>{
    cy.request({
      method: 'POST',
      url: 'https://apigw-staging.efbet.tech/api/v1/administrator/public/token',
      body:{
      "username": "refadmin1",
      "password": "Aa123456!"
    }
      }).then((response) => { 
      new_token1 = response.body.access_token;
  
      const token = new_token1;
      const response_req = [{id: 8, name: "Basketball", translatedNames: {en: "Basketball", bg: sport_name}}]
      const authorization = `Bearer ${token}`;
    //const bod_req_two = 'lang=BG&lang=EN&lang=EL&lang=RO&lang=TR&pageNumber=0&pageSize=25'
      
    cy.request({
      method: 'POST',
      url: 'https://apigw-staging.efbet.tech/api/v1/player/public/oidc/token',
      body:{
      "username": "testchiko",
      "password": "123456"
    }
      }).then((response) => { 
      new_token1 = response.body.access_token;
  
      const token = new_token1;
      const authorization = `Bearer ${token}`;
    
   
      cy.request({
      method: 'PUT',
      url: 'https://apigw-staging.efbet.tech/api/v1/sport-event/admin/translate/type/SPORT',
      headers:{
        'Content-Type': 'application/json',
        Authorization: authorization
      },
      body: response_req
      }).then((response) => { 
      newW = response.body;
      //cy.wait(120000)
    })
    cy.refresh_token()
  })
})
  
  it("Check exist translation on Basketball", () => {
      cy.visit("https://staging.efbet.tech/program");
      cy.reload();
      cy.loginUI();  
      const session = JSON.parse(localStorage.getItem("session"));
      cy.refresh_token( (req) => {
      req.headers["session"] = session;
      return req;})
      cy.xpath('/html/body/div[1]/div[3]/div[1]/section/nav/ul/button[3]/li').should("have.text", sport_name)
  });



  
})
