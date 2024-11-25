/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        primary: '#882BEC', 
        secondary: '#FEA301',
      },
      height: {
        '128': '32rem',  // Custom height of 32rem (512px)
        '144': '36rem',  // Custom height of 36rem (576px)
        '160': '40rem',  // Custom height of 40rem (640px)
        '172': '43rem',  // Custom height of 43rem (688px)
        '184': '46rem',  // Custom height of 46rem (736px)
        '769': '769px',
      },
      fontFamily: {
        'alfa-slab': ['Alfa Slab One'],
        poppins: ['Poppins'],
      },
      fontSize: {
        '128': '128px', // Custom size
      },
      borderRadius:{
        '16': '16px'
      }
    },
  },
  plugins: [],
}

