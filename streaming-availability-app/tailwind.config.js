module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      bebas: ["Bebas Neue", "cursive"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      background: "#000000",
      primary: "#FFFFFF",
      secondary: "#9E9E9E",
      active: "#F40812",
      light: "#121212",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
