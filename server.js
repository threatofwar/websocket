const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 9999 });

wss.on('connection', function connection(ws, req) {
  // Capture the IP address of the client from the 'x-forwarded-for' header.
  const ip = req.headers['x-forwarded-for'].split(',')[0].trim();
  console.log('Client IP:', ip);
  ws.on('message', (message) => {
    console.log('from ' + ip + ':', message);
  });

  // Set up an error event listener for the WebSocket connection.
  ws.on('error', console.error);
});

/*
wss.on('connection', (ws) => {
  console.log('A client connected');
  
  // Send a message to the client
  ws.send('Hello from server');
  
  ws.on('message', (message) => {
    console.log('Received message from client: ', message);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
*/
console.log('WebSocket server is running on ws://localhost:9999');
