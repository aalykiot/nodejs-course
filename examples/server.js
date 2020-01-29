const http = require('http');

// create HTTP server
const server = http.createServer();

// Handler for requests
const handler = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'plain/text' });
  res.write('hello, world');
  res.end();
};

// handle requests with handler
server.on('request', handler);

// listen on port 8888
server.listen(8888);