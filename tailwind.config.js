/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
],
  theme: {
    extend: {
       colors: {
          dark:"#444452",
          bluec:"#007bff"
       }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
