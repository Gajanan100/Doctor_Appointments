/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#367792",
        "dark-primary": "#224855",
        "light-success": "#F1F6F7",
        "light-warning": "#D69B08"
      },
      fontSize: {
        "xs": "10px",
        "sm": "12px",
      },
      "container":
      {
        center:true
      }
    },
  },
  plugins: [],
}