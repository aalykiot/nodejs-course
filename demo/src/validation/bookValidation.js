const yup = require('yup');

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

module.exports = schema;
