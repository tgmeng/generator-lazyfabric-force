
const ASTQuery = require('ast-query');
const Generator = require('../base-generator');
const { formatCode } = require('../util');

const babelConfig = '.babelrc.js';
const eslintConfig = '.eslintrc.js';
const jestConfig = 'jest.config.js';
const srcPath = 'src';

module.exports = class extends Generator {
  _updateESLint(file) {
    this._updatePackageJSON({
      devDependencies: {
        'babel-eslint': '^10.0.3',
      },
    });

    const src = this.fs.read(file);
    const tree = ASTQuery(src);

    tree.assignment('module.exports')
      .value()
      .key('parser').value("'babel-eslint'");

    this.fs.write(this.destinationPath(file), formatCode(tree.toString()));
  }

  _updateJest() {
    this._updatePackageJSON({
      devDependencies: {
        'babel-jest': '^24.9.0',
      },
    });
  }

  writing() {
    if (this.fs.exists(eslintConfig)) {
      this._updateESLint(eslintConfig);
    }

    if (this.fs.exists(jestConfig)) {
      this._updateJest();
    }

    this._updatePackageJSON();
    this.fs.copy(this.templatePath(babelConfig), this.destinationPath(babelConfig));
    this.fs.copy(this.templatePath(srcPath), this.destinationPath(srcPath));
  }

  install() {
    this.yarnInstall();
  }
};
