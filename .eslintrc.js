const { isProd } = require('./param')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {},
  extends: ['standard', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  globals: {
    gtag: true,
    dataLayer: true,
    gsap: true,
    dat: true,
    Swiper: true,
    YT: true,
    GA_ID: true,
    GTM_ID: true,
  },
  rules: {
    'no-console': isProd ? 'error' : 'off',
    'no-debugger': isProd ? 'error' : 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'no-new': 0,
    'no-lonely-if': 0,
    'no-unused-vars': 'warn',
    'lines-between-class-members': 0,
    'import/order': 0,
    'unicorn/number-literal-case': 0,
    'object-shorthand': 'warn',
    'prettier/prettier': 'warn',
    'prefer-const': 'warn',
    'standard/no-callback-literal': 0,
  },
}
