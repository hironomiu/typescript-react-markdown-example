module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx', './public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        600: '600px',
      },
      height: {
        600: '600px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
