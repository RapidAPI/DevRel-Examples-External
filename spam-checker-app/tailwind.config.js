module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      background: "#272D47",
      primary: "#FFFFFF",
      secondary: "#9E9E9E",
      active: "#42E2B8",
      light: "#121212",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
