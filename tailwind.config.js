/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgray: "#f7f7f7",
        darkgray: "#1f242c",
        blue: "#00acda",
        orange1: "#f89202",
      },
    },
  },
  plugins: [],
};
