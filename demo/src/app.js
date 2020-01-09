const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Local imports
const logger = require('./util/logger');

require('./config/connection');
require('./models/bookModel');

const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Express middleware
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API routes as middleware
app.use('/books', bookRoutes);

// Express index route
app.get('/', (req, res) => {
  res.send('Express server running!');
});

// Error handler
app.use((err, req, res, next) => {
  // Log error to console
  if (err.message) {
    logger.error(err.message);
  }

  res.status(err.statusCode || 500);
  res.send(err);
  next();
});

// Exporting server object
module.exports = app;
