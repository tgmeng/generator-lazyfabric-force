
const Generator = require('../base-generator');

const JestTestEnv = [
  'node',
  'jsdom',
];

module.exports = class extends Generator {
  initializing() {
    this.option('testEnvironment', {
      type: String,
      desc: `Test environment (${JestTestEnv.join(' or ')})`,
    });

    this.option('coverage', {
      type: Boolean,
      desc: 'Add coverage reports',
    });
  }

  async prompting() {
    const prompts = [
      {
        type: 'list',
        name: 'testEnvironment',
        message: 'What environment do you want to use',
        choices: JestTestEnv,
        default: this.options.testEnvironment,
        when: JestTestEnv.indexOf(this.options.testEnvironment) === -1,
      },
      {
        type: 'confirm',
        name: 'coverage',
        message: 'Add coverage reports?',
        when: this.options.coverage === undefined,
      },
    ];

    const answers = await this.prompt(prompts);

    this.answers = {
      testEnvironment: this.options.testEnvironment,
      coverage: this.options.coverage,
      ...answers,
    };
  }

  writing() {
    this._updatePackageJSON();

    const jestConfigJsName = 'jest.config.js';

    this.fs.copyTpl(
      this.templatePath(jestConfigJsName),
      this.destinationPath(jestConfigJsName),
      this.answers,
    );
  }

  install() {
    this.yarnInstall();
  }
};
