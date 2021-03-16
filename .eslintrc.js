module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-use-before-define': 1,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/prefer-function-type': 2,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
