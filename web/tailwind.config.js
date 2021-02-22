module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          ae: '#253745',
        },
        red: {
          ae: '#f8485d',
          aeLight: '#ff9faa',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
