
const Generator = require('../base-generator');

module.exports = class extends Generator {
  initializing() {
    this.composeWith(require.resolve('../base'));
    this.composeWith(require.resolve('../jest'));
    this.composeWith(require.resolve('../babel'));
  }
};
