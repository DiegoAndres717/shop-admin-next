/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*{html,jsx}'],
  theme: {
    colors: {
      ...colors,
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  },
};

