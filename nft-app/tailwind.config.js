module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      bebas: ["Bebas Neue", "cursive"],
      poppins: ["Poppins", "sans-serif"],
      spacemono: ["Space Mono", "monospace"],
    },
    colors: {
      background: "#000000",
      light: "#121212",
      primary: "#FFFFFF",
      secondary: "#9E9E9E",
      active: "#F40812",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
