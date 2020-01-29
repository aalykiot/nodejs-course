const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
  socket.write('hello\n');
  socket.end('world\n');
});

server.listen(8888);