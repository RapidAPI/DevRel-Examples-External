module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      background: "#2A2829",
      primary: "#FFFFFF",
      active: "#C69C72",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
