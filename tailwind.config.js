const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend Deca', ...fontFamily.sans]
      },
      colors: {
        'app-primary': colors.red[700],
      },
      backgroundColor: {
        primary: colors.slate[800],
        secondary: colors.slate[700]
      },
      textColor: {
        primary: colors.white,
        secondary: colors.gray[300]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    require('prettier-plugin-tailwindcss'),
  ],
}
