const shortid = require('shortid');

// array to store todos
let todos = [];

exports.sayHello = (req, res) => res.send('Hello from node.js server!');

exports.getAll = (req, res) => res.send(todos);

exports.create = (req, res) => {
  // get text from body
  const { text } = req.body;
  // if error respond with an http error
  if (!text) {
    res.status(422).send('Body data is incorrect');
    return;
  }
  // create todo object
  const todo = {
    id: shortid.generate(),
    text,
    completed: false,
  };
  // add todo to list
  todos = [...todos, todo];
  // send todos as response
  res.send(todos);
};

exports.update = (req, res) => {
  // get id from url
  const { id } = req.params;
  // update todo
  todos = todos.map(t => {
    if (t.id === id) {
      return {
        ...t,
        completed: !t.completed,
      };
    }
    return t;
  });
  res.send(todos);
};

exports.remove = (req, res) => {
  const { id } = req.params;
  todos = todos.filter(t => t.id !== id);
  res.send(todos);
};
