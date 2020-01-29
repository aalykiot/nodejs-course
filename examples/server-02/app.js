const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // create read stream
  const stream = fs.createReadStream('./index.html');

  // handle stream error
  stream.on('error', (err) => {
    res.status(400).json({ error: err.message });
  });

  // pipe stream data to response
  stream.pipe(res);
});

app.listen(8000);