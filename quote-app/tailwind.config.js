module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: { max: "767px" },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#FFFFFF",
      primary: "#000000",
      secondary: "#00196D",
      active: "#F75652",
      light: "#d1d5dc",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
