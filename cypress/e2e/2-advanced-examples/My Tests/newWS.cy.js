const env = Cypress.env() 
describe('Websocket test', () => {
  let websocket;
before(() => {
  
});
it('test', () => {
  const socket = new WebSocket("wss://apigw-staging.efbet.tech/ws-gateway");
  socket.addEventListener("open", () => {
    socket.send(
      JSON.stringify({
        connect: {
          "X-autorization": env.tokenplayer
        }
      })
    );
  });
  
  cy.wrap(socket).then(socket => {
    socket.addEventListener("message", event => {
      const message = JSON.parse(event.data);
      if (message.topic === "your-topic") {
        cy.log(event.data)// process message from topic here
      }
    });
  });
})
})




