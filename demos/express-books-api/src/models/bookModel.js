const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: String,
  description: {
    type: String,
    required: true,
  },
  authors: {
    type: [String],
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
});

bookSchema.set('toJSON', {
  transform: (_, { _id, __v, ...restObject }) => ({
    id: _id,
    ...restObject,
  }),
});

mongoose.model('Book', bookSchema);
