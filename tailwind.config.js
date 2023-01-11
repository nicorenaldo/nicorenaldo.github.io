/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
      },
      typography: {
        DEFAULT: {
          css: {
            img:{
              'margin-top':0,
              'margin-bottom':0,
            },
            a: {
              'text-decoration': 'none',
            },
            ol:{
              'margin-top':0,
              'margin-bottom':0,
            },
            li:{
              'margin-top':0,
              'margin-bottom':0,
            },
          },
        },
      },
    },
  },

  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#007bff',
        },
      },
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#3B9AFF',
        },
      },
    ],
  },
};
