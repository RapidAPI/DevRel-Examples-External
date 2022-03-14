module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#1E152A",
      primary: "#FFFFFF",
      active: "#69EBD0",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
