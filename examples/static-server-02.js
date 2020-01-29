const http = require('http');
const fs = require('fs');
const path = require('path');

// create HTTP server
const server = http.createServer((req, res) => {
  
  // path to GET
  const p = path.join('.', req.url);

  // check whether path exists
  fs.stat(p, (err, stats) => {
    if (err) {
      res.writeHead(404);
      res.end(err.message);
      return;
    }

    // check whether path is file
    if (!stats.isFile()) {
      res.writeHead(403);
      res.end();
      return;
    }

    // try to read file
    fs.readFile(p, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(err.message);
        return;
      }
  
      res.writeHead(200, { 'Content-Type': 'plain/text' });
      res.end(data);
    });
  });
});

// listen on port 8888
server.listen(8888);