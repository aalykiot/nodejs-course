const http = require('http');
const dotenv = require('dotenv');

// load .env file
dotenv.config();

const app = require('../src/app');
const logger = require('../src/util/logger');

const PORT = process.env.PORT || 3000;

function onListening() {
  logger.info(`Server listening on port ${PORT} 🚀`);
}

function onError(err) {
  logger.error('Server failed to start.', err);
}

const server = http.createServer(app);

server.listen(PORT);
server.on('listening', onListening);
server.on('error', onError);
