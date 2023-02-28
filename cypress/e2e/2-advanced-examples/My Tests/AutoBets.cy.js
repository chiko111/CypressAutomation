describe("Make a 20 Bets", () => {

  let stakeIN = 100;
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.tokenplayer('testchiko1', '123456');
    cy.tokenadmin(); // Set the session as a header for subsequent requests
  });
  it("Get First Sport Event for Tomorrow and bet 20 times ", () => {
    const env = Cypress.env();
    for (let i = 0; i < 20; i++) {
      
   
    cy.request({
      url: "https://apigw-staging.efbet.tech/api/v1/sport-event/public/sport-event/program?lang=bg&range=TOMORROW&streamingOnly=false",
    }).then((response) => {
      env.odd_prematch =
        response.body[0]["sportEvents"][0]["mainMarket"]["outcomes"][0]["odds"];
      const odd_id =
        response.body[0]["sportEvents"][0]["mainMarket"]["outcomes"][0]["id"];
      Cypress.env(env);

      cy.request({
        method: "POST",
        url: "https://apigw-staging.efbet.tech/api/v1/betslip/private/placebet",
        auth: { bearer: env.tokenplayer },
        body: {
          bonusBet: false,
          channel: "MOBILE",
          outcomes: [
            {
              banker: false,
              id: odd_id,
              odds: env.odd_prematch,
              stake: stakeIN,
            },
          ],
        },
      }).then((response) => {
        cy.log("bet succeed" + stakeIN);

      
      });
    });

  }
  });
});


