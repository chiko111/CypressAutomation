describe("Cash Out", () => {
  let stakeIN = "100";
  Cypress.env("stakeIN", stakeIN);
  beforeEach(() => {
    cy.tokenplayer();
    cy.tokenadmin();
    cy.viewport(1920, 1080);
  });
  it("Get Sport Events", () => {
    const env = Cypress.env()
    cy.request({
      url: "https://apigw-staging.efbet.tech/api/v1/sport-event/private/tournament/live?lang=bg&pageNumber=0&pageSize=50&sportId=120",
      auth: { bearer: env.tokenplayer },
    }).then((response) => {
      const foundOutcome = response.body.content;
      const textRO = JSON.stringify(foundOutcome);
      const odd =
        foundOutcome[0]["sportEvents"][0]["markets"]["2"]["outcomes"][0][
          "odds"
        ];
      const odd_id =
        foundOutcome[0]["sportEvents"][0]["markets"]["2"]["outcomes"][0]["id"];
      cy.log(odd_id);
      Cypress.env("odd", odd);

      cy.request({
        method: "POST",
        url: "https://apigw-staging.efbet.tech/api/v1/betslip/private/placebet",
        auth: { bearer: env.tokenplayer },
        body: {
          bonusBet: false,
          channel: "MOBILE",
          outcomes: [{ banker: false, id: odd_id, odds: odd, stake: stakeIN }],
        },
      }).then((response) => {
        cy.log("bet succeed " + stakeIN);

        cy.request({
          url: "https://apigw-staging.efbet.tech/api/v1/betslip/private/history?openBets=true&pageNumber=0&pageSize=20&language=bg",
          auth: { bearer: env.tokenplayer },
        }).then((response) => {
          const foundBetSID = response.body;
          const BetSID = foundBetSID["betslipHistory"][0]["betId"];
          const BetSID_Outcome = foundBetSID["betslipHistory"][0]["betslipId"];
          const BetSID_OutcomeID = foundBetSID["betslipHistory"][0]["outcomes"][0]["outcomeId"];
          const CreateOn = foundBetSID["betslipHistory"][0]["outcomes"][0]["sportEventCreatedOn"];
          const sportEventID = foundBetSID["betslipHistory"][0]["outcomes"][0]["sportEventId"]
          cy.log(BetSID_Outcome);
          cy.log(BetSID);
          cy.log(BetSID_OutcomeID);
          cy.log(CreateOn);
          cy.log(sportEventID)

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
            const Codds = cashOut[BetSID_OutcomeID]["odds"];
            const feedProducerId = cashOut[BetSID_OutcomeID]["feedProducerId"];

            Cypress.env("Codds", Codds);
            if(feedProducerId > 1){cy.log("This isn't correct use formula for prematch")}
            

            cy.request({
              method: "POST",
              url: "https://apigw-staging.efbet.tech/api/v1/sport-event/private/cashout/time",
              auth: { bearer: env.tokenplayer },
              body: [sportEventID],
            }).then((response) => {
              const foundTime = response.body;
              const ctime = foundTime["sportEvents"][0]["currentTime"];
              const ttime = foundTime["sportEvents"][0]["totalTime"];
              Cypress.env("ctime", Number(ctime));
              Cypress.env("ttime", Number(ttime));

              cy.log(Number(ctime));
              cy.log(Number(ttime));

              cy.request({
                method: "POST",
                url: "https://apigw-staging.efbet.tech/api/v1/betslip/private/cashout",
                auth: { bearer: env.tokenplayer },
                body: {
                  betslipId: BetSID_Outcome,
                  id: BetSID,
                  outcomes: [
                    {
                      currentOdds: Codds,
                      id: BetSID_OutcomeID,
                      producerId: feedProducerId,
                      timeCurrent: ctime,
                      timeTotal: ttime,
                    },
                  ],
                },
              }).then((response) => {
                if (odd < 2) {
                  cy.cashoutcalculation(0);
                } else {
                  if (odd > 2 || odd < 3) {
                    cy.cashoutcalculation(1);
                  } else {
                    if (odd > 3 || odd < 4) {
                      cy.cashoutcalculation();
                    } else {
                      if (odd > 4 || odd < 5) {
                        cy.cashoutcalculation(2);
                      } else {
                        if (odd > 5 || odd < 6) {
                          cy.cashoutcalculation(3);
                        } else {
                          if (odd > 6 || odd < 7) {
                            cy.cashoutcalculation();
                          } else {
                            if (odd > 7 || odd < 8) {
                              cy.cashoutcalculation(4);
                            } else {
                              if (odd > 8 || odd < 9) {
                                cy.cashoutcalculation();
                              } else {
                                if (odd > 9 || odd < 10) {
                                  cy.cashoutcalculation(5);
                                } else {
                                  if (odd > 10 || odd < 11) {
                                    cy.cashoutcalculation(6);
                                  } else {
                                    if (odd > 11 || odd < 12) {
                                      cy.cashoutcalculation(7);
                                    } else {
                                      if (odd > 12 || odd < 1000) {
                                        cy.cashoutcalculation(8);
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
});
