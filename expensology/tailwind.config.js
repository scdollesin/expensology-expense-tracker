/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light_blue: {
          1:'#BDD5EA',
          2:'#E0EBF5'
        },
        blue: {
          1:'#577399',
        },
        gray:{
          1: '#495867',
        },
        white: {
          1: '#F7F7FF'
        },
      },
    },
  },
  plugins: [],
}

