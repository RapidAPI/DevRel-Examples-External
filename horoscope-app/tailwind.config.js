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
      background: "#292A44",
      primary: "#FFFFFF",
      secondary: "#F8B75D",
      active: "#E46B3F",
      danger: "#C4402A",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
