module.exports = {
  env: {
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb-base',
    'prettier'
  ],
  plugins: ['import'],
  rules: {
    'no-underscore-dangle': 0
  }
};
