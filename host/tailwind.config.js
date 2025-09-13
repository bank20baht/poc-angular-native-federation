/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  safelist: [
    {
      pattern: /([a-zA-Z]+)-./,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

