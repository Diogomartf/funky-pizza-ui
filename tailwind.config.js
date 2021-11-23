module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        fit: "fit-content",
      },
      colors: {
        beige: "#FBE2CC",
        tomato: "#FD5050",
        darkRed: "#D61818",
        orangeCrust: "#FF8D23",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        modak: ["Modak", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
