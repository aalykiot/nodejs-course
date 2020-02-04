const http = require('http');
const fs = require('fs');

// create HTTP server
const server = http.createServer((req, res) => {
  
  // path to GET
  const p = '.' + req.url;

  // try to read file
  fs.readFile(p, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end(err.message);
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  });
});

// listen on port 8888
server.listen(8888);