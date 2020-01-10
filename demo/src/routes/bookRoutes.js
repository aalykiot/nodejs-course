const express = require('express');
const yup = require('yup');
const boom = require('@hapi/boom');

// Local imports
const bookService = require('../services/bookService');

// Build server response when internal error happens
function createServerError() {
  return boom.badImplementation().output;
}

// Book validation schema
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

const router = express.Router();

router.get('/', (_, res) => {
  bookService.get().then(books => res.json(books));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  bookService.getById(id).then(book => res.json(book));
});

router.post('/', (req, res, next) => {
  //
  const submittedBook = req.body;

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

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const submittedBookUpdates = req.body;

  schema
    .validate(submittedBookUpdates)
    .then(() => bookService.update(id, submittedBookUpdates))
    .then(updatedBook => res.json(updatedBook))
    .catch(err => {
      if (err instanceof yup.ValidationError) {
        next(boom.badRequest().output);
        return;
      }
      next(createServerError());
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  bookService.remove(id).then(removedBook => res.json(removedBook));
});

module.exports = router;
