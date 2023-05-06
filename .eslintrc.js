module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'react-app'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: [2, 'always'],
    eqeqeq: [2, 'always'],
    // 'arrow-body-style': ['error', 'always'],
    'func-names': ['error', 'always'],
    // 'no-console': [1, {'always':'error'}],
    'no-var': [2],
    'no-trailing-spaces': [2]
  }
};
