const env = Cypress.env();
import WebSocket from 'ws';

describe('Websocket test', () => {
  before(() => {
  
  });

  it('test', () => {
    // Import the 'ws' library to handle WebSocket connections
    const WebSocket = require('ws');

    // Define the WebSocket endpoint to connect to
    const wsEndpoint = 'wss://apigw-staging.efbet.tech/ws-gateway:443';
    const topic = 'private/playerId.19787';
    cy.tokenplayer();

    // Define the headers to send in the initial message
    const headers = {
      'x-authorization': env.tokenplayer,
      'accept-version': '1.0, 1.1, 1.2',
      'heart-beat':'4000,10000'
    };

    // Define the special symbol to send in the initial message
    const specialSymbol = 'null';
    
    describe('WebSocket test', () => {
      beforeEach(
        cy.visit('https://staging.efbet.tech/').wait(3000)
      )
      it('Connects to WebSocket and subscribes to a topic', () => {
        cy.visit('https://staging.efbet.tech/')
        cy.contains('Разбрах').click()
        // Create a new WebSocket instance and connect to the endpoint
        const ws = new WebSocket(wsEndpoint);

        // Listen for the 'open' event to know when the connection is established
        ws.addEventListener('open', () => {
          // Send the initial message with headers and special symbol
          const initialMessage = JSON.stringify({
            headers: headers,
            specialSymbol: specialSymbol
          });
          ws.send(initialMessage);

          // Subscribe to the specified topic
          const subscribeMessage = JSON.stringify({
            command: 'subscribe',
            destination: `/topic/${topic}`,
            id: 'sub-0',
            specialSymbol
          });
          ws.send(subscribeMessage);
        });

        // Listen for incoming messages on the subscribed topic
        ws.addEventListener('message', (event) => {
          const message = JSON.parse(event.data);
          if (message.command === 'MESSAGE' && message.headers.destination === `/topic/${topic}`) {
            // Do something with the message
            cy.log('Received message:', message.body);
          }
        });
      });
    });
  });
});


