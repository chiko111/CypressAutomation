const env = Cypress.env();
//import WebSocket from 'ws';

var WebSocketClient = require("websocket").client;

describe("Websocket test", () => {
  before(() => {
    cy.tokenplayer("testchiko1", "123456");
    cy.tokenadmin();

    //cy.withdraw("10")
  });

  it("test", () => {
    //cy.loginplayer('testchiko', '123456')

    // Define the WebSocket endpoint to connect to
    const wsEndpoint = "wss://apigw-staging.efbet.tech/ws-gateway";

    // Define the special symbol to send in the initial message
    let specialSymbol = "\x00";

    // Create a new WebSocket instance and connect to the endpoint
    const WebSocketClient = new WebSocket(wsEndpoint);

    // Listen for the 'open' event to know when the connection is established
    WebSocketClient.addEventListener("open", () => {
      // Send the initial message with headers and special symbol

      const initialMessage = `CONNECT
accept-version:1.0,1.1,1.2
heart-beat:4000,10000
X-Authorization:Bearer ${env.tokenplayer}

${specialSymbol}`;

      WebSocketClient.send(initialMessage);

      // Add event listener for the "connected" message
      WebSocketClient.addEventListener("message", event => {
        const message = event.data;
        if (message.startsWith("CONNECTED")) {
          cy.log("Connected", event.data);
          // Subscribe to the specified topic
          const subscribeMessage = `SUBSCRIBE
id:sub-0
destination:/topic/public/betslip/max-bet-takeout

${specialSymbol}`;

          const subscribeMessage1 = `SUBSCRIBE
id:sub-1
destination:/topic/private/playerId.${env.playerId} 

${specialSymbol}`;

          const subscribeMessage2 = `SUBSCRIBE
id:sub-2
destination:/topic/private/betslip/cashout/restriction/playerId.${env.playerId}

${specialSymbol}`;

          const subscribeMessage3 = `SUBSCRIBE
id:sub-3
destination:/topic/private/betslip-settlement/playerId.${env.playerId}

${specialSymbol}`;
          const subscribeMessage4 = `SUBSCRIBE
id:sub-4
destination:/topic/private/betslip/cashout/systemBetTypeConfig

${specialSymbol}`;
          const subscribeMessage5 = `SUBSCRIBE
id:sub-5
destination:/topic/public/sportevent/cashout

${specialSymbol}`;
          const subscribeMessage6 = `SUBSCRIBE
id:sub-6
destination:/topic/private/sportevent/cashout/config

${specialSymbol}`;

          const subscribeMessage7 = `SUBSCRIBE
id:sub-7
destination:/topic/private/betslip/playerId.${env.playerId}

${specialSymbol}`;

          WebSocketClient.send(subscribeMessage);
          WebSocketClient.send(subscribeMessage1);
          WebSocketClient.send(subscribeMessage2);
          WebSocketClient.send(subscribeMessage3);
          WebSocketClient.send(subscribeMessage4);
          WebSocketClient.send(subscribeMessage5);
          WebSocketClient.send(subscribeMessage6);
          WebSocketClient.send(subscribeMessage7);
          

          let timerId = 0;

          function keepAlive(timeout = 20000) {
            if (webSocketClient.readyState == webSocketClient.OPEN) {
              webSocket.send("1");
            }
            timerId = setTimeout(keepAlive, timeout);
          }

          function cancelKeepAlive() {
            if (timerId) {
              clearTimeout(timerId);
            }
          }
        }
        cy.placebetprematch("1", "100");
   
        if (message.startsWith('MESSAGE')) {
          cy.log("New", event.data);
        }
    });
    
        
      });
    })

    
      

  });

