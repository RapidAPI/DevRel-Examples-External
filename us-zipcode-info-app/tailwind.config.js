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
      bc: "#000000",
      primary: "#D6E3E4",
      secondary: "#31CB53",
      active: "#F6FF81",
      light: "#D6E3E2",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
