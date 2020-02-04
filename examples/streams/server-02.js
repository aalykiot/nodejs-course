/**
 * Before running this example run the gen.js file
 * to generate the big text file that this static server serves
 */

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  // create read steam and pipe it to response
  fs.createReadStream('./big.file').pipe(res);
});

server.listen(3000);