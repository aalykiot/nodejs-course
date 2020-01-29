const http = require('http');
const fs = require('fs');
const path = require('path');
const util = require('util');

// promisify the fs.stat and fs.readFile
const stat = util.promisify(fs.stat);
const readFile = util.promisify(fs.readFile);

// create HTTP server
const server = http.createServer(async (req, res) => {
  
  // path to GET
  const p = path.join('.', req.url);

  try {

    // get path stats
    const stats = await stat(p);

    // check if path is file
    if (!stats.isFile()) {
      res.writeHead(403);
      res.end();
      return;
    }

    // try to read file
    const data = await readFile(p);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);

  } catch(err) {
    res.writeHead(err.code === 'ENOENT' ? 404 : 500);
    res.end(err.message);
  }
});

// listen on port 8888
server.listen(8888);