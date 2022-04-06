module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      background: "#000000",
      light: "#121212",
      primary: "#FFFFFF",
      secondary: "#9E9E9E",
      active: "#058ED9",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
