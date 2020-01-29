const mongoose = require('mongoose');

const Book = mongoose.model('Book');

const get = async () => {
  const books = await Book.find({});
  return books;
};

const getById = async id => {
  const book = await Book.findById(id);
  return book;
};

const create = async data => {
  const newBook = new Book(data);
  await newBook.save();
  return newBook;
};

const update = async (id, data) => {
  const updatedBook = await Book.findByIdAndUpdate(id, data, { new: true });
  return updatedBook;
};

const remove = async id => {
  const removedBook = await Book.findByIdAndRemove(id);
  return removedBook;
};

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};
