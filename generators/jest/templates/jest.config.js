// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // The directory where Jest should output its coverage files
  <%_ if (coverage) { _%>
  coverageDirectory: 'coverage',
  <%_ } else { _%>
  // coverageDirectory: null,
  <%_ } _%>
  // The test environment that will be used for testing
  testEnvironment: '<%= testEnvironment %>',
};
