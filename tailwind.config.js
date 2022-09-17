/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      textShadow: {
        '2xl': '1px 1px 1px rgba(0,146,255,0.9)',
        '3xl': '2px 2px 10px rgba(0,146,255,0.9)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
