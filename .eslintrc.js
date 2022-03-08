module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': 0,
    'no-undef': 0,
  },
};
