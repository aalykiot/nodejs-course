const mongoose = require('mongoose');

const Book = mongoose.model('Book');

exports.get = async () => {
  const books = await Book.find({});
  return books;
};

exports.getById = async id => {
  const book = await Book.findById(id);
  return book;
};

exports.create = async data => {
  const newBook = new Book(data);
  await newBook.save();
  return newBook;
};

exports.update = async (id, data) => {
  const updatedBook = await Book.findByIdAndUpdate(id, data, { new: true });
  return updatedBook;
};

exports.remove = async id => {
  const removedBook = await Book.findByIdAndRemove(id);
  return removedBook;
};
