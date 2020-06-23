const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './public/index.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.tsx',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        light: { raw: '(prefers-color-scheme: light)' },
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    function ({ addBase, config }) {
      addBase({
        body: {
          color: config('theme.colors.gray.800'),
          backgroundColor: config('theme.colors.cool-gray.100'),
        },
        '@screen dark': {
          body: {
            color: config('theme.colors.gray.100'),
            backgroundColor: config('theme.colors.black'),
          },
        },
      })
    },
  ],
}
