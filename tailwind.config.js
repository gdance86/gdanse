/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
 
    content: [
      
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  
  theme: {
    screens: {
      'lg': '1025px'
    },
    extend: {

    },
    colors: {
      emerald: colors.emerald,
      'danse': '#c87eff',
      rose: colors.rose,
      white: colors.white,
      slate: colors.slate,
      'orange' : '#da5b41',
      blue: colors.sky
      
    },
  },
  plugins: [],
}
