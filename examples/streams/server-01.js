/**
 * Before running this example please run the gen.js
 * to generate the big text file that this static server serves
 */

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  // try reading big file
  fs.readFile('./big.file', (err, data) => {
    // check for errors
    if (err) throw err;

    // respond to client
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  });
});

server.listen(3000);
