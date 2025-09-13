/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  safelist: [
    {
      pattern: /([a-zA-Z]+)-./,
      
    },
    'btn',
    'btn-primary',
    'btn-secondary', 
    'btn-accent',
    'btn-info',
    'btn-success',
    'btn-warning',
    'btn-error',
    'btn-ghost',
    'btn-link',
    'btn-outline',
    'btn-active',
    'btn-disabled',
    'btn-lg',
    'btn-md',
    'btn-sm',
    'btn-xs',
    'card',
    'card-body',
    'card-title',
    'card-actions',
    'badge',
    'alert',
    'modal',
    'drawer',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

