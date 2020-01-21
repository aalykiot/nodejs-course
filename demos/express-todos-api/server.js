const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const shortid = require('shortid');

const app = express();

let todoList = [];

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/todos', (req, res) => {
  res.send(todoList);
});

app.post('/api/todos', (req, res) => {
  const { text } = req.body;

  if (!text) {
    res.status(422).send('Body data is incorrect');
    return;
  }

  const todo = {
    id: shortid.generate(),
    text,
    completed: false,
  };

  todoList = [...todoList, todo];

  res.send(todoList);
});

app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;

  todoList = todoList.map(todo => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo;
  });

  res.send(todoList);
});

app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  todoList = todoList.filter(todo => todo.id !== id);
  res.send(todoList);
});

app.get('/', (req, res) => {
  res.send('Hello from node.js server!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
