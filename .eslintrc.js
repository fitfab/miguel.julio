module.exports = {
  parser: '@typescript-eslint/parser', // tell ESLint to use the TypeScript parser.
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],

  rules: {
    'react/react-in-jsx-scope': 'off', // Next.js does not require you to import React into each component, We can fix this by turning this rule off and adding React into our global.
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    'react/prop-types': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
  },
  globals: {
    React: 'writable', // Next.js: related to rule "react/react-in-jsx-scope"
  },

}
