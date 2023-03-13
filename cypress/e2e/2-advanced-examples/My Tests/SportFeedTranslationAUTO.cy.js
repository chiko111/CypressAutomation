describe("testing token", () => {
  beforeEach(() => {
    cy.tokenadmin();
    cy.tokenplayer("testchiko", "123456");
  });
context('Functional testing', () => {

  it("Sport translate bg", () => {
    const env = Cypress.env();
    cy
      .request({
        url:
          "https://apigw-staging.efbet.tech/api/v1/sport-event/public/sport?lang=bg&partial=true",
        auth: { bearer: env.tokenplayer }
      })
      .then(response => {
        env.response_req1 = response.body[0].name;
        env.response_id1 = response.body[0].id;
        env.response_req2 = response.body[1].name;
        env.response_id2 = response.body[1].id;
        env.response_req3 = response.body[2].name;
        env.response_id3 = response.body[2].id;
        env.response_req4 = response.body[3].name;
        env.response_id4 = response.body[3].id;

        env.catresponse_id1 = response.body[0].categories[0].id;
        env.catresponse_req1 = response.body[0].categories[0].name;
        env.catresponse_id2 = response.body[0].categories[1].id;
        env.catresponse_req2 = response.body[0].categories[1].name;
        env.catresponse_id3 = response.body[0].categories[2].id;
        env.catresponse_req3 = response.body[0].categories[2].name;
        env.catresponse_id4 = response.body[0].categories[3].id;
        env.catresponse_req4 = response.body[0].categories[3].name;

        env.trresponse_id1 = response.body[0].categories[0].tournaments[0].id;
        env.trresponse_req1 =
          response.body[0].categories[0].tournaments[0].name;
        env.trresponse_id2 = response.body[0].categories[0].tournaments[1].id;
        env.trresponse_req2 =
          response.body[0].categories[0].tournaments[1].name;
        env.trresponse_id3 = response.body[0].categories[0].tournaments[2].id;
        env.trresponse_req3 =
          response.body[0].categories[0].tournaments[2].name;

        Cypress.env(env);

        cy
          .wrap({
            id: env.catresponse_id1,
            name: env.catresponse_id1,
            translatedNames: {
              bg: env.catresponse_id1
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
            }
          })
          .then(payload => {
            const pay = payload;
            cy.request({
              method: "PUT",
              url:
                "https://apigw-staging.efbet.tech/api/v1/sport-event/admin/translate/sport",
              auth: { bearer: env.tokenadmin },
              body: [pay]
            });
          });
      });
  });
  it("Category translate bg", () => {
    const env = Cypress.env();
    cy
      .wrap({
        id: env.catresponse_id1,
        name: env.catresponse_req1,
        translatedNames: {
          bg: env.catresponse_req1
        },
        id: env.catresponse_id2,
        name: env.catresponse_req2,
        translatedNames: {
          bg: env.catresponse_req2
        },
        id: env.catresponse_id3,
        name: env.catresponse_req3,
        translatedNames: {
          bg: env.catresponse_req3
        },
        id: env.catresponse_id4,
        name: env.catresponse_req4,
        translatedNames: {
          bg: env.catresponse_req4
        }
      })
      .then(payload1 => {
        const pay1 = payload1;

        const env = Cypress.env();
        cy.request({
          method: "PUT",
          url:
            "https://apigw-staging.efbet.tech/api/v1/sport-event/admin/translate/category",
          auth: { bearer: env.tokenadmin },
          body: [pay1]
        });
      });
  });
  it("Tournament translate bg", () => {
    const env = Cypress.env();
    cy
      .wrap({
        id: env.trresponse_id1,
        name: env.trresponse_req1,
        translatedNames: {
          bg: env.trresponse_req1
        },
        id: env.trresponse_id2,
        name: env.trresponse_req2,
        translatedNames: {
          bg: env.trresponse_req2
        },
        id: env.trresponse_id3,
        name: env.trresponse_req3,
        translatedNames: {
          bg: env.trresponse_req3
        }
      })
      .then(payload2 => {
        const pay2 = payload2;

        const env = Cypress.env();
        cy
          .request({
            method: "PUT",
            url:
              "https://apigw-staging.efbet.tech/api/v1/sport-event/admin/translate/tournament",
            auth: { bearer: env.tokenadmin },
            body: [pay2]
          })
          .then(response => {});
      });
  });
  it("Sport-event translate bg", () => {
    const env = Cypress.env();
    cy
      .request({
        url: `https://apigw-staging.efbet.tech/api/v1/sport-event/public/sport-event?lang=en&tournamentId=${env.trresponse_id1}`,
        auth: { bearer: env.tokenplayer }
      })
      .then(response => {
        env.evtresponse_reqen = response.body[0].name;
        Cypress.env(env);
        
        
      })
    cy
      .request({
        url: `https://apigw-staging.efbet.tech/api/v1/sport-event/public/sport-event?lang=bg&tournamentId=${env.trresponse_id1}`,
        auth: { bearer: env.tokenplayer }
      })
      .then(response => {
        env.evtresponse_req1 = response.body[0].name;
        env.evtresponse_id1 = response.body[0].id;
        Cypress.env(env);
        cy.log(env.evtresponse_req1)
        cy.log(env.evtresponse_id1)
        cy.log(env.evtresponse_reqen)
      }), cy
      .wrap({"id":env.evtresponse_id1,"name":env.evtresponse_reqen,"translatedNames":{"bg":env.evtresponse_req1}})
      .then(payloadtr => {
        const paytr = payloadtr;
        cy.log(JSON.stringify(paytr))
        
       cy.request({
      method: "PUT",
      url:
        "https://apigw-staging.efbet.tech/api/v1/sport-event/admin/translate/sport-event",
      auth: { bearer: env.tokenadmin },
      body: [{"id":env.evtresponse_id1,"name":env.evtresponse_reqen,"translatedNames":{"bg":env.evtresponse_req1}}]
       })
    });
  });
  it("Sport, category, tournament, sport event check bg translation", () => {
    const env = Cypress.env();
    //cy.wait(200000)
    cy
      .request({
        method: "GET",
        url:
          " https://apigw-staging.efbet.tech/api/v1/sport-event/private/sport?lang=bg",
        auth: { bearer: env.tokenplayer }
      })
      .then(response => {
        const sport1 = response.body[0].name;
        const sport2 = response.body[1].name;
        const sport3 = response.body[2].name;
        const sport4 = response.body[3].name;
        const cat1 = response.body[0].categories[0].name;
        const cat2 = response.body[0].categories[1].name;
        const cat3 = response.body[0].categories[2].name;
        const cat4 = response.body[0].categories[3].name;
        const tr1 = response.body[0].categories[0].tournaments[0].name;
        const tr2 = response.body[0].categories[0].tournaments[1].name;
        const tr3 = response.body[0].categories[0].tournaments[2].name;

        expect(sport1).to.eq(env.response_req1);
        expect(sport2).to.eq(env.response_req2);
        expect(sport3).to.eq(env.response_req3);
        expect(sport4).to.eq(env.response_req4);

        expect(cat1).to.eq(env.catresponse_req1);
        expect(cat2).to.eq(env.catresponse_req2);
        expect(cat3).to.eq(env.catresponse_req3);
        expect(cat4).to.eq(env.catresponse_req4);

        expect(tr1).to.eq(env.trresponse_req1);
        expect(tr2).to.eq(env.trresponse_req2);
        expect(tr3).to.eq(env.trresponse_req3);

        cy.log(sport1 + sport2 + sport3 + sport4);
      });
  });
});
});
