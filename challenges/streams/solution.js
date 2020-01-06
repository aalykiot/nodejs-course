// Instead of manually listening for the 'readable' event on the Readable stream,

// let's use pipe to read from the file, 'origin.txt' and write directly to the file, 'destination.txt'.
const fs = require('fs');

const origin = fs.createReadStream('origin.txt');
const destination = fs.createWriteStream('destination.txt');

origin.pipe(destination);