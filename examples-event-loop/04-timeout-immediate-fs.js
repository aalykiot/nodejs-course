const fs = require('fs');

fs.readFile('./02-timeout-immediate', () => {

  setTimeout(() => {
    console.log('timer!');
  }, 0);
  
  setImmediate(() => {
    console.log('immediate!');
  });

});