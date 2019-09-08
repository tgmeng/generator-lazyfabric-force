
const { CLIEngine } = require('eslint');

module.exports = {
  formatCode(code) {
    const cli = new CLIEngine({
      fix: true,
    });
    const {
      results: [
        result = {},
      ] = [],
    } = cli.executeOnText(code);
    return result.output || code;
  },
};
