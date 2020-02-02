const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// local imports
const routes = require('./routes');

const app = express();

// middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// api routes
app.get('/api/todos', routes.getAll);
app.post('/api/todos', routes.create);
app.put('/api/todos/:id', routes.update);
app.delete('/api/todos/:id', routes.remove);

// default route
app.get('/', routes.sayHello);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
