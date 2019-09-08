module.exports = {
  extends: ['eslint:recommended', 'airbnb-base'],
  env: {
    jest: true,
    node: true,
  },
  rules: {
    'no-underscore-dangle': 0,
  },
};
