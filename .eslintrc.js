module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'mocha'],
  env: {
    es6: true,
    mocha: true,
    node: true
  },
  rules: {
    'prettier/prettier': 'error',
    strict: 0,
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-mocha-arrows': 'error',
    'mocha/no-nested-tests': 'error',
    'mocha/no-return-and-callback': 'error',
    'mocha/no-skipped-tests': 'error',
    'prefer-arrow-callback': 0,
    'func-names': 0,
    'no-underscore-dangle': 0
  }
};
