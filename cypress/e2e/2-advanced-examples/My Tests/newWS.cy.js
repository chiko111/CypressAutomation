const env = Cypress.env() 
describe('Websocket test', () => {
  let websocket;
before(() => {
  
});
it('test', () => {
  const socket = new WebSocket("ws://localhost:8080/your-socket-endpoint");
  socket.addEventListener("open", () => {
    socket.send(
      JSON.stringify({
        headers: {
          "x-authorization": "your-token"
        }
      })
    );
  });
  
  cy.wrap(socket).then(socket => {
    socket.addEventListener("message", event => {
      const message = JSON.parse(event.data);
      if (message.topic === "your-topic") {
        // process message from topic here
      }
    });
  });
})
})




