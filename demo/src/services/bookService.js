const mongoose = require('mongoose');

const Book = mongoose.model('Book');

module.exports = {
  get: async () => {
    const books = await Book.find({});
    return books;
  },

  create: async data => {
    const newBook = new Book(data);

    await newBook.save();
    return newBook;
  },
};
