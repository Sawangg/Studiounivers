/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/ui/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "3xl": "1650px",
        "4xl": "1920px",
      },
      fontFamily: {
        title: ["ClashDisplay-Variable"],
        body: ["Satoshi-Variable"],
      },
      fontSize: {
        base: "1.1704rem",
        lg: "1.3376rem",
        xl: "1.5048rem",
        "2xl": "1.6720rem",
        "3xl": "2.0064rem",
        "4xl": "2.6752rem",
        "5xl": "3.0096rem",
      },
      colors: {
        primary: {
          DEFAULT: "#0579BC",
          50: "#7DCDFC",
          100: "#69C6FB",
          200: "#41B6FA",
          300: "#1AA7F9",
          400: "#0693E4",
          500: "#0579BC",
          600: "#045685",
          700: "#02334F",
          800: "#010F18",
          900: "#000000",
        },
        secondary: {
          DEFAULT: "#063F89",
          50: "#4F98F7",
          100: "#3C8DF6",
          200: "#1576F5",
          300: "#0963D7",
          400: "#0851B0",
          500: "#063F89",
          600: "#042653",
          700: "#010E1E",
          800: "#000000",
          900: "#000000",
        },
        accent: {
          DEFAULT: "#DB011B",
          50: "#FF95A2",
          100: "#FE8190",
          200: "#FE586C",
          300: "#FE3048",
          400: "#FE0724",
          500: "#DB011B",
          600: "#A30114",
          700: "#6B000D",
          800: "#330006",
          900: "#000000",
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};