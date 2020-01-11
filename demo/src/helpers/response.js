module.exports = (data, statusCode = 200) => ({
  status: 'success',
  statusCode,
  data,
});
