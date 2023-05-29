/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './redux/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      typography: {
        DEFAULT: {
          css: {
            img: {
              'margin-top': 0,
              'margin-bottom': 0,
            },
            a: {
              'text-decoration': 'none',
            },
            ol: {
              'margin-top': 0,
              'margin-bottom': 0,
            },
            li: {
              'margin-top': 0,
              'margin-bottom': 0,
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
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#3B9AFF',
          background: '#131516',
        },
      },
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#007BFF',
          background: '#FFFFFF',
        },
      },
    ],
  },
};
