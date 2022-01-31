module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#1E1D40",
      primary: "#FFFFFF",
      secondary: "#9E9E9E",
      active: "#F9D000",
      light: "#121212",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
