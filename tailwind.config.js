/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#009ACC", 
        "primaryDardker": "#0080AA",
        "secondary": "#0BD99C",
        "darkbtn": "rgba(92,87,89,255)",
        "iconbox": "#EDECEC",
        "acordeonTxt": "rgba(38, 31, 34, 0.75)", 
        "darkmode": "rgba(33, 37, 41, 1)", 
        "menuUldark": "rgb(52, 59, 65)", 
        "menuUlwhite": "rgb(207, 211, 216)"
        

      }, 
      fontFamily: {
        "titulos": "Monserrat", 
        "parrafos": "Catamaran"

      }
    },
  },
  plugins: [],
}