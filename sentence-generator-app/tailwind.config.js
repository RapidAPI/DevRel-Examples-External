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
      bc: "#08243B",
      primary: "#D4D4D6",
      secondary: "#C79360",
      active: "#5E6F7C",
      light: "#756151",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
