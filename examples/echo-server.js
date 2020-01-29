const net = require('net');

const server = net.createServer((socket) => {

  socket.write('hello\n');
  socket.write('world\n');

  socket.on('data', (data) => {
    socket.write(data);
  });

});

server.listen(8888);