const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');

// local imports
const CustomError = require('./helpers/error');

require('./config/connection');
require('./models/bookModel');

const bookRoutes = require('./routes/bookRoutes');

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(limiter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// handle /api route
app.use('/api', bookRoutes);

// index
app.get('/', (req, res) => {
  res.send('Express server running!');
});

// 404 error builder
app.use((req, res, next) => {
  next(new CustomError(404, 'API route not found'));
});

// error handler
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

module.exports = app;
