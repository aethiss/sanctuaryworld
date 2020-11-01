// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  rules: {
    semi: [2, 'never'],
    'no-console': 'warn',
  },
  plugins: ['react'],
  env: {
    jest: true,
  },
}
