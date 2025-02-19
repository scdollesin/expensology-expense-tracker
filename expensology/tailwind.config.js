/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '280px',
      'xs': '375px',
      'ss': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '1xl': '1440px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
    },
    extend: {
      colors: {
        light_blue: {
          1:'#BDD5EA',
          2:'#E0EBF5',
          3:'#D4E3F1'
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
        red: {
          1: '#FE5F55'
        }
      },
    },
  },
  plugins: [],
}

