const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

// settings
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// GET /
app.get('/', (req, res) => {
  res.render('index');
});

// GET /search
app.get('/search', (req, res) => {
  res.render('search', { q: req.query.q });
});

app.listen(3000);
