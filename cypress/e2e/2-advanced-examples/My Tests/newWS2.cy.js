const env = Cypress.env();
var Stomp = require('@stomp/stompjs');

describe('Websocket test', () => {
  before(() => {
    cy.tokenplayer();
  });

  it('test', () => {

    var url = "ws://localhost:15674/ws";
    var client = Stomp.client(url);


  })
})