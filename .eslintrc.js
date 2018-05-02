module.exports = {
    env: {
      es6: true,
      node: true,
      'jest/globals': true,
    },
    plugins: ['jest', 'import'],
    extends: [
      'eslint:recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:jest/recommended',
    ],
    rules: {
      'import/first': 'error',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
    },
  };
  