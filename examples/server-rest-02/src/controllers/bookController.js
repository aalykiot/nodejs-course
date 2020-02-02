const service = require('../services/bookService');
const schema = require('../validation/bookSchema');
const response = require('../helpers/response');
const CustomError = require('../helpers/error');

exports.getAll = async (req, res, next) => {
  try {
    // get books from service
    const books = await service.get();
    // send response
    res.send(response(books));
  } catch (err) {
    // forward error to express
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  // get id from url
  const { id } = req.params;

  try {
    const book = await service.getById(id);
    // handle book not found
    if (!book) {
      next(new CustomError(404, 'Requested book not found'));
      return;
    }
    // send response
    res.send(response(book));
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  // get data from body
  const submittedBook = req.body;

  const isValid = await schema.isValid(submittedBook);
  // handle book validation error
  if (!isValid) {
    next(new CustomError(422, 'Submitted book data is incorrect'));
    return;
  }

  try {
    // create new book
    const newBook = await service.create(submittedBook);
    res.send(newBook);
  } catch (err) {
    // forward error to express
    next(err);
  }
};

exports.update = async (req, res, next) => {
  // get data from url and body
  const { id } = req.params;
  const submittedBookUpdates = req.body;

  const isValid = await schema.isValid(submittedBookUpdates);
  // handle book validation error
  if (!isValid) {
    next(new CustomError(422, 'Submitted book data is incorrect'));
    return;
  }

  try {
    const updatedBook = await service.update(id, submittedBookUpdates);
    // handle book not found error
    if (!updatedBook) {
      next(new CustomError(404, 'Requested book for update not found'));
      return;
    }
    res.send(response(updatedBook));
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  // get id from url
  const { id } = req.params;

  try {
    const removedBook = await service.remove(id);
    // handle book not found
    if (!removedBook) {
      next(new CustomError(404, 'Requested book for deletion not found'));
      return;
    }

    res.send(response(removedBook));
  } catch (err) {
    next(err);
  }
};
