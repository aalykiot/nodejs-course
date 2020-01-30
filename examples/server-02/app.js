const fs = require('fs');
const express = require('express');
const socketIO = require('socket.io');

const app = express();

// index.html
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

// passing express app to socketIO
const server = app.listen(8000);
const io = socketIO(server);

// sockets
io.on('connection', (client) => {
  // send a message to the client every 5 sec
  setInterval(() => {
    client.emit('new_message', new Date());
  }, 5000);
});
