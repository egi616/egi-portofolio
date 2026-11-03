/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: 'oklch(64.5% 0.246 16.439)',
        dark: 'oklch(20.8% 0.042 265.755)',
        secondary: 'oklch(55.4% 0.046 257.417)'
      },
      screens: {
        '2xl': '1920px',
      }
    },
  },
  plugins: [],
}

