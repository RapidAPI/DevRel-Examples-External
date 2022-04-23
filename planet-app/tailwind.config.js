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
      bc: "#121212",
      primary: " #FFFFFF",
      secondary: "#9E9E9E",
      active: "#CC2B5E",
    },
    boxShadow: {
      custom: "0 0 10px #F8EF12",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
