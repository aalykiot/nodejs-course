// export the warn, info and error functions so we can use it in logger-app.js by assigning it to the exports object.

const info = (message) => {
  console.log(`Info: ${message}`);
};

const warn = (message) => {
  console.log(`Warn: ${message}`);
};

const error = (message) => {
  console.log(`Error: ${message}`);
};

module.exports = {
  info,
  warn,
  error
};