const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#3D96B6',
        secondary: '#68B5B9',
        secondarydark: '#11444C',
        dark: '#0A2326',
        white: '#F2FBFC',
      },
    },
  },
  plugins: [],
};
