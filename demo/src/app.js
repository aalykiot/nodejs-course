const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Local imports
const CustomError = require('./helpers/error');

require('./config/connection');
require('./models/bookModel');

const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Express middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API routes as middleware
app.use('/api', bookRoutes);

// Express index route
app.get('/', (req, res) => {
  res.send('Express server running!');
});

// 404 error builder
app.use((req, res, next) => {
  next(new CustomError(404, 'API route not found'));
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500);
  res.send({
    status: 'error',
    statusCode: err.statusCode || 500,
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
  next();
});

// Exporting server object
module.exports = app;
