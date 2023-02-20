const env = Cypress.env();
//import WebSocket from 'ws';
var WebSocketClient = require('websocket').client;

describe('Websocket test', () => {
  before(() => {
    cy.tokenplayer();
    cy.tokenadmin()
   cy.withdraw("50")
  });

  it('test', () => {
   cy.loginplayer('testchiko', '123456')
   

    //const WebSocket = require('ws');
    
    // Import the 'ws' library to handle WebSocket connections
   

    // Define the WebSocket endpoint to connect to
    const wsEndpoint = 'wss://apigw-staging.efbet.tech/ws-gateway';
    const topic = 'private/playerId.19787';
    

    // Define the headers to send in the initial message
    const headers = {
      'heart-beat':'4000,10000',
      'accept-version': '1.0, 1.1, 1.2',
      'x-authorization': env.tokenplayer
    };

    // Define the special symbol to send in the initial message
        var specialSymbol = "\x00";
    
        
        // Create a new WebSocket instance and connect to the endpoint
        const WebSocketClient = new WebSocket(wsEndpoint)

        // Listen for the 'open' event to know when the connection is established
        WebSocketClient.addEventListener('open', () => {
          // Send the initial message with headers and special symbol
          
          const initialMessage = 
`CONNECT
accept-version:1.0,1.1,1.2
heart-beat:4000,10000
X-Authorization:Bearer ${env.tokenplayer}

${specialSymbol}`

          WebSocketClient.send(initialMessage)
        

              

// Add event listener for the "connected" message
WebSocketClient.addEventListener('message', (event) => {
  const message = event.data;
  if (message.startsWith('CONNECTED')) {
    
    // Subscribe to the specified topic
    const subscribeMessage = 
`SUBSCRIBE
id:sub-0
destination:/topic/private/playerId.19787 

${specialSymbol}`
    WebSocketClient.send(subscribeMessage);
  }
});

// Open the WebSocket connection

  



  
  // Listen for incoming messages on the subscribed topic
  WebSocketClient.addEventListener('message', (event) => {
    const message = (event.data);

    if (message.command === 'MESSAGE' && message.headers.destination === '/topic/private/playerId.19787') {
      // Do something with the message
      cy.log('Received message:', message.body);
    }
  });
});
  })
  
})

