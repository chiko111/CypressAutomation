describe("Cash Out", () => {
  let sport_event = "";
  let textRO = "";
  let odd = "";
  let Codds = "";
  let odd_id = "";
  let new_token1 = "";
  let foundBetSID = "";
  let textBSI = "";
  let BetSID_Outcome = "";
  let C = "1.02002";
  let D = "-0.01000";
  let Q = "0.95000";
  let CO = "0";
  let new_token2 = "";
  let oddsrange = "";
  let stakeIN = 100;
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.tokenplayer('testchiko', '123456');
    cy.tokenadmin(); // Set the session as a header for subsequent requests
  });
  it("Get Sport Events", () => {
    const env = Cypress.env();

    cy.request({
      method: "POST",
      url: "https://apigw-staging.efbet.tech/api/v1/sport-event/public/sport-event/program?lang=bg&range=TOMORROW&streamingOnly=false",
      body: [
        120
      ]

      
    }).then((response) => {
      env.odd_prematch = response.body[0]["sportEvents"][0]["mainMarket"]["outcomes"][0]["odds"];
      const odd_id = response.body[0]["sportEvents"][0]["mainMarket"]["outcomes"][0]["id"];
      Cypress.env(env)

      cy.request({
        method: "POST",
        url: "https://apigw-staging.efbet.tech/api/v1/betslip/private/placebet",
        auth: { bearer: env.tokenplayer },
        body: {
          bonusBet: false,
          channel: "MOBILE",
          outcomes: [{ banker: false, id: odd_id, odds: env.odd_prematch, stake: stakeIN }],
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
              method: "POST",
              url: "https://apigw-staging.efbet.tech/api/v1/betslip/private/cashout",
              auth: { bearer: env.tokenplayer },
              body: {
                betslipId: BetSID_Outcome,
                id: BetSID,
                outcomes: [
                  {
                    currentOdds: env.Codds_prematch,
                    id: BetSID_OutcomeID,
                    producerId: feedProducerId,
                  },
                ],
              },
            }).then((response) => {
              cy.log(env.Codds_prematch)
              if (env.Codds_prematch < 2) {
                cy.cashoutcalculation_premach(0);
              } else {
                if (env.Codds_prematch > 2 || odd < 3) {
                  cy.cashoutcalculation_premach(1);
                } else {
                  if (env.Codds_prematch > 3 || env.Codds_prematch < 4) {
                    cy.cashoutcalculation_premach(2);
                  } else {
                    if (env.Codds_prematch > 4 || env.Codds_prematch < 5) {
                      cy.cashoutcalculation_premach(3);
                    } else {
                      if (env.Codds_prematch > 5 || env.Codds_prematch < 6) {
                        cy.cashoutcalculation_premach(4);
                      } else {
                        if (env.Codds_prematch > 6 || env.Codds_prematch < 7) {
                          cy.cashoutcalculation_premach(5);
                        } else {
                          if (env.Codds_prematch > 7 || env.Codds_prematch < 8) {
                            cy.cashoutcalculation_premach(6);
                          } else {
                            if (env.Codds_prematch > 8 || env.Codds_prematch < 9) {
                              cy.cashoutcalculation_premach(7);
                            } else {
                              if (env.Codds_prematch > 9 || env.Codds_prematch < 10) {
                                cy.cashoutcalculation_premach(8);
                              } else {
                                if (env.Codds_prematch > 10 || env.Codds_prematch < 11) {
                                  cy.cashoutcalculation_premach(9);
                                } else {
                                  if (env.Codds_prematch > 11 || env.Codds_prematch < 12) {
                                    cy.cashoutcalculation_premach(10);
                                  } else {
                                    if (env.Codds_prematch > 12 || env.Codds_prematch < 1000) {
                                      cy.cashoutcalculation_premach(11);
                                    } else {
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            });
          });
        });
      });
    });
  });
});
