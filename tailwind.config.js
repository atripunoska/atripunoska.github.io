/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        drawLeft: {
          "0%": {
            transform: "scaleX(0)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
      },
      animation: {
        drawLeft: "drawLeft 1s ease-in-out 1",
      },
      colors: {
        blue: "#2cbce9",
        red: "#dc4492",
        yellow: "#fdcc49",
        grey: "#ededed",
        "deep-blue": "#19180a",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        "light-green": "#C3FFB9",
        "dark-purple": "#711772",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        //  opensans: ["Open Sans", "sans-serif"],
        mono: ["PT Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
};
