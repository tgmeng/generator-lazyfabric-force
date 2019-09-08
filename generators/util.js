
const path = require('path');
const { CLIEngine } = require('eslint');

module.exports = {
  formatCode(code) {
    const cli = new CLIEngine({
      fix: true,
      cwd: path.join(__dirname, '..'),
    });
    const {
      results: [
        result = {},
      ] = [],
    } = cli.executeOnText(code);
    return result.output || code;
  },
};
