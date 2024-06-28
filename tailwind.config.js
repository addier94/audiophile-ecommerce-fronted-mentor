/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1110px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#D87D4A",
        secondary: "#101010",
        gray: "#4C4C4C",
        "gray-light": "#F1F1F1",
        "gray-lighter": "#FAFAFA",
        "accent-light": "#fbaf85",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontSize: {
        h1: [
          "56px",
          {
            lineHeight: "58px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontWeight: "700", // Bold
          },
        ],
        h2: [
          "40px",
          {
            lineHeight: "44px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            fontWeight: "700", // Bold
          },
        ],
        h3: [
          "32px",
          {
            lineHeight: "36px",
            letterSpacing: "1.15px",
            textTransform: "uppercase",
            fontWeight: "700", // Bold
          },
        ],
        h4: [
          "28px",
          {
            lineHeight: "38px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontWeight: "700", // Bold
          },
        ],
        h5: [
          "24px",
          {
            lineHeight: "33px",
            letterSpacing: "1.7px",
            textTransform: "uppercase",
            fontWeight: "700", // Bold
          },
        ],
        h6: [
          "18px",
          {
            lineHeight: "24px",
            letterSpacing: "1.3px",
            textTransform: "uppercase",
            fontWeight: "700", // Bold
          },
        ],
        overline: [
          "14px",
          {
            lineHeight: "19px",
            letterSpacing: "10px",
            textTransform: "uppercase",
            fontWeight: "400", // Regular
          },
        ],
        subtitle: [
          "13px",
          {
            lineHeight: "25px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontWeight: "700", // Bold
          },
        ],
        body: [
          "15px",
          {
            lineHeight: "25px",
            fontWeight: "500", // Medium
          },
        ],
      },
    },
  },
  plugins: [],
};
