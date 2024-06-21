/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "gray-main": "#f1f1f1",
        "gray3-main": "#ffffff",
        "gray2-main": "#979797",
        "yellow-main": "#D87D4A",
        "black-main": "#191919",
      },
    },
  },
  plugins: [],
};
