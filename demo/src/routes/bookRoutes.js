const express = require('express');
const yup = require('yup');
const boom = require('@hapi/boom');

// Local imports
const bookService = require('../services/bookService');

// Build server response when internal error happens
function createServerError() {
  return boom.badImplementation().output;
}

const router = express.Router();

router.get('/', (_, res) => {
  bookService
    .get()
    .then(books => res.json(books))
    .catch(() => {}); // Todo
});

router.get('/:id', (req, res) => {
  // Todo
});

router.post('/', (req, res, next) => {
  //
  const submittedBook = req.body;

  console.log(req.body);

  const schema = yup.object().shape({
    title: yup.string().required(),
    subtitle: yup.string(),
    description: yup.string().required(),
    authors: yup
      .array()
      .of(yup.string())
      .required(),
    isbn: yup.string().required(),
  });

  schema
    .validate(submittedBook)
    .then(() => bookService.create(submittedBook))
    .then(newBook => res.json(newBook))
    .catch(err => {
      if (err instanceof yup.ValidationError) {
        next(boom.badRequest().output);
        return;
      }
      next(createServerError());
    });
});

router.put('/:id', (req, res) => {
  // Todo
});

router.delete('/:id', (req, res) => {
  // Todo
});

module.exports = router;
