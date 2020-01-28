const express = require('express');
const yup = require('yup');

// Local imports
const bookService = require('../services/bookService');
const bookSchema = require('../validation/bookValidation');
const response = require('../helpers/response');
const CustomError = require('../helpers/error');

const router = express.Router();

router.get('/v1/books', (_, res, next) => {
  bookService
    .get()
    .then(bookList => res.send(response(bookList)))
    .catch(err => next(err));
});

router.get('/v1/books/:id', (req, res, next) => {
  const { id } = req.params;

  bookService
    .getById(id)
    .then(book => {
      if (!book) {
        throw new CustomError(404, 'Requested book not found');
      }
      res.send(response(book));
    })
    .catch(err => next(err));
});

router.post('/v1/books', (req, res, next) => {
  const submittedBook = req.body;

  bookSchema
    .validate(submittedBook)
    .then(() => bookService.create(submittedBook))
    .then(newBook => res.send(response(newBook)))
    .catch(err => {
      if (err instanceof yup.ValidationError) {
        next(new CustomError(422, 'Submitted book data is incorrect'));
      }
      next(err);
    });
});

router.put('/v1/books/:id', (req, res, next) => {
  const { id } = req.params;
  const submittedBookUpdates = req.body;

  bookSchema
    .validate(submittedBookUpdates)
    .then(() => bookService.update(id, submittedBookUpdates))
    .then(updatedBook => {
      if (!updatedBook) {
        throw new CustomError(404, 'Requested book for update not found');
      }
      res.send(response(updatedBook));
    })
    .catch(err => {
      if (err instanceof yup.ValidationError) {
        next(new CustomError(422, 'Submitted book data is incorrect'));
      }
      next(err);
    });
});

router.delete('/v1/books/:id', (req, res, next) => {
  const { id } = req.params;
  bookService
    .remove(id)
    .then(removedBook => {
      if (!removedBook) {
        throw new CustomError(404, 'Requested book for deletion not found');
      }
      res.send(response(removedBook));
    })
    .catch(err => next(err));
});

module.exports = router;
