const net = require('net');

const sockets = [];

const server = net.createServer((socket) => {
  // push socket to the array
  sockets.push(socket);

  // socket send some data 
  socket.on('data', (data) => {
    for(let i = 0; i < sockets.length; i++) {
      if (sockets[i] === socket) continue;
      sockets[i].write(data);
    }
  });

  // socket disconnected
  socket.on('end', () => {
    const i = sockets.indexOf(socket);
    sockets.splice(i, 1);
  });
});

server.listen(8888);