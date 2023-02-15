describe("My Bets", () => {
  before(() => {
    cy.tokenplayer();
  });
  it("single", () => {
    cy.viewport(1920, 1080)
    let stakeIN = 100
    const env = Cypress.env();
    cy.request({
      url: "https://apigw-staging.efbet.tech/api/v1/sport-event/public/sport-event/program?lang=bg&range=TOMORROW&streamingOnly=false",
    }).then((response) => {
      env.odd_prematch = response.body[0]["sportEvents"][0]["mainMarket"]["outcomes"][0]["odds"];
      env.odd_id = response.body[0]["sportEvents"][0]["mainMarket"]["outcomes"][0]["id"];
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
              id: env.odd_id,
              odds: env.odd_prematch,
              stake: stakeIN,
            },
          ],
        },
      }).then((response) => {
        cy.log("bet succeed" + stakeIN);

        cy.request({
          url: "https://apigw-staging.efbet.tech/api/v1/betslip/private/history?openBets=true&pageNumber=0&pageSize=20&language=bg",
          auth: { bearer: env.tokenplayer },
        }).then((response) => {
          const foundBetSID = response.body;
          const BetSID = foundBetSID["betslipHistory"][0]["betId"];
          const BetSID_Outcome = foundBetSID["betslipHistory"][0]["betslipId"];
          const BetSID_OutcomeID =
            foundBetSID["betslipHistory"][0]["outcomes"][0]["outcomeId"];
          const CreateOn =
            foundBetSID["betslipHistory"][0]["outcomes"][0][
              "sportEventCreatedOn"
            ];
          cy.log(BetSID_Outcome);
          cy.log(BetSID);
          cy.log(BetSID_OutcomeID);
          cy.log(CreateOn);

          cy.request({
            method: "POST",
            url: "https://apigw-staging.efbet.tech/api/v1/sport-event/private/market/outcome/cashout",
            auth: { bearer: env.tokenplayer },
            body: [
              {
                id: BetSID_OutcomeID,
                time: CreateOn,
              },
            ],
          }).then((response) => {
            const cashOut = response.body;
            env.Codds_prematch = cashOut[BetSID_OutcomeID]["odds"];
            const feedProducerId = cashOut[BetSID_OutcomeID]["feedProducerId"];
            Cypress.env(env);

            cy.request({
              method: "GET",
              url: "https://apigw-staging.efbet.tech/api/v1/betslip/private/history?openBets=true&pageNumber=0&pageSize=1000&language=bg",
              auth: { bearer: env.tokenplayer },
            }).then((response) => {
                
  
              })

          cy.request({
            method: "PUT",
            url: "https://apigw-staging.efbet.tech/api/v1/betslip/private/cashout",
            auth: { bearer: env.tokenplayer },
            body: 
              {
                
                  "betId": BetSID,
                  "betslipId": BetSID_Outcome,
                  "currentCashout": "500"
                
              },
          }).then((response) => {
              const cashAmount =  response.body["cashoutAmount"]
              cy.log(cashAmount)
              cy.visit("https://staging.efbet.tech/?login=true")
              cy.get('#btn-cookie-pop-up').click()
              cy.get('#username-login-modal').type("testchiko")
              cy.get('#password-login-modal').type("123456")
              cy.get('#btn-login-widget-login').click().wait(10000)
              cy.contains('Моите Залози').click()
              cy.get('//*[@id="cashout-button"]/div/text()[2]').invoke('text').as('cash')

              cy.log('@cash')
            })

        });
      });
    });
  });
  })
})
