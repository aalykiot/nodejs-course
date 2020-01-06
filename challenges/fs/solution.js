const fs = require('fs');

fs.readFile('hello.html', (err, data) => {
  if (err) {
    console.log('Failed to read', err);
    return;
  }
  
  const contents = data.toString();

  fs.writeFile('hello-copy.html', contents, (err) => {
    if (err) {
      console.log('Failed to write', err);
      return;
    }

    console.log('Write completed!');
  });
});