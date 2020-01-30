const fs = require('fs');
const express = require('express');
const socketIO = require('socket.io');

const app = express();

// index.html
app.get('/', (req, res) => {
  fs.createReadStream('./index.html').pipe(res);
});

// passing express app to socketIO
const server = app.listen(8080);
const io = socketIO(server);

// sockets
io.on('connection', (client) => {
  // when a message comes from client broadcast it to all
  client.on('client:message', (data) => {
    client.broadcast.emit('server:message', { message: data.message });
  });
});
