module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#0D1318",
      primary: "#E6E7E7",
      secondary: "#ABAABA",
      active: "#43D0A4",
      light: "#283B47",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
