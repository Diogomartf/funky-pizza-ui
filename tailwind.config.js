const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xs": "380px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      height: {
        fit: "fit-content",
      },
      colors: {
        beige: "#FBE2CC",
        tomato: "#FD5050",
        darkRed: "#D61818",
        orangy: "#FFC989",
        orangeCrust: "#FF8D23",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        modak: ["Modak", "cursive"],
      },
    },
  },
  plugins: [],
};
