/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  safelist: [
    {
      pattern: /.*/
      
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

