module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#000000",
      primary: "#FFFFFF",
      active: "#1BB954",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
