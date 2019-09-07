'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting () {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the epic ${chalk.red(
          'generator-lazyfabric-force'
        )} generator!`
      )
    );
  }
};
