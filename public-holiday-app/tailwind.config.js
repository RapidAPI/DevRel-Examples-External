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
      background: "#ECEBE5",
      primary: "#000000",
      secondary: "#BBB7AF",
      active: "#FC4921",
      light: "#C8B598",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
