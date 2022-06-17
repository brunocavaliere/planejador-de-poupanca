/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1310px",
    },
    colors: {
      white: "#ffffff",
      blue: "#21A3ED",
      purple: "#7B1CF3",
      green: {
        400: "#07CC6D",
        500: "#09B682",
      },
      gray: {
        200: "#ECECEC",
        300: "#C4C4C4",
        400: "#8C979F",
        500: "#868686",
        700: "#343A3A",
        800: "#20262C",
        900: "#0A0D0D",
      },
    },
    boxShadow: {
      md: "0px 0px 20px rgba(10, 13, 13, 0.12)",
      lg: "2px 2px 14px rgba(32, 38, 44, 0.25)",
    },
    fontFamily: {
      sans: ["Epilogue", "sans-serif"],
    },
    fontSize: {
      "5xs": "0.65625rem",
      "4xs": "0.8125rem",
      "3xs": "0.6875rem",
      "2xs": "0.75rem",
      xs: "0.8125rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
