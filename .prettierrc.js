module.exports = {
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 4,
  useTabs: false,
  bracketSpacing: true,
  overrides: [
    {
      files: ['*.json', '.prettierrc.js', '.stylelintrc.js', '.eslintrc.js'],
      options: {
        tabWidth: 2,
      },
    },
  ],
}
