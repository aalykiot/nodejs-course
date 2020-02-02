const chalk = require('chalk');

const info = message => {
  console.log(`${chalk.blue('INFO')}: ${message}`);
};

const warn = message => {
  console.log(`${chalk.yellow('WARN')}: ${message}`);
};

const error = (message, err = '') => {
  console.log(`${chalk.red('ERROR')}: ${message}`, err);
};

module.exports = {
  info,
  warn,
  error,
};
