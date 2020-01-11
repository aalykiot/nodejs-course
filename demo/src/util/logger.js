const chalk = require('chalk');

module.exports = {
  info: message => {
    console.log(`${chalk.blue('INFO')}: ${message}`);
  },
  warn: message => {
    console.log(`${chalk.yellow('WARN')}: ${message}`);
  },
  error: (message, err = '') => {
    console.log(`${chalk.red('ERROR')}: ${message}`, err);
  },
};
