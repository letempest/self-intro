const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        cyan: colors.cyan,
        coolGray: colors.coolGray
      },
      minHeight: {
        almost: 'calc(100vh - 8rem)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
