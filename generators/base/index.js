const Generator = require('../base-generator');

module.exports = class extends Generator {
  configuring() {
    ['.editorconfig', '.eslintrc.js', '.prettierrc.js', '.gitignore'].forEach(
      file => {
        this.fs.copy(this.templatePath(file), this.destinationPath(file));
      }
    );
  }

  writing() {
    this._updatePackageJSON();
  }

  install() {
    this.yarnInstall();
  }
};
