module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    'standard'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'space-before-function-paren': ['error', 'never'],
    semi: ['error', 'always'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: ['error', 2],
    eqeqeq: 'off'
  }
};
