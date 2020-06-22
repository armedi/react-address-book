module.exports = {
  purge: {
    content: [
      './public/index.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.tsx',
    ],
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
