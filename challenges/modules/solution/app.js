// export the warn, info and error functions so we can use it in logger-app.js by assigning it to the exports object.

const logger = require('./logger');

logger.info(new Date());
logger.warn('Danger! Danger!');