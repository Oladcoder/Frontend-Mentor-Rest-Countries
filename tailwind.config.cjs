/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navcol': 'hsl(209, 23%, 22%)',
        'bgcol': 'hsl(207, 26%, 17%)'
      },
      screens:{
        'sm': {'max': '480px'}
  
      },
      spacing:{
        '100vh':'100vh',
        '100vw':'100vw'
      }
    },
  },
  plugins: [],
}
