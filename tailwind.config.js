/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'transparentbg':'rgba(1,0,0,0.5)'
      }
    },
  },
  plugins: [],
}

