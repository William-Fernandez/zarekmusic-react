/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monserrat': ['Monserrat', 'sans-serif'],
      },
      colors: {
        'music-page-color': '#B1C1CC',
      },
      screens: {
        'xs': '425px',
      },
    },
  },
  plugins: [],
}

