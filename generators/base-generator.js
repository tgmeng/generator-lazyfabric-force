const Generator = require('yeoman-generator');

const pkgJsonName = 'package.json';

module.exports = class extends Generator {
  _updatePackageJSON(
    content,
    from = this.templatePath(pkgJsonName),
    to = this.destinationPath(pkgJsonName),
  ) {
    const pkgJson = content || this.fs.readJSON(from);
    this.fs.extendJSON(to, pkgJson);
  }
};
