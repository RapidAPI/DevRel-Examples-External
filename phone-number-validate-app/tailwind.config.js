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
      background: "#0F0F0F",
      primary: "#F9EEF0",
      secondary: "#158566",
      active: "#E8BEE7",
      light: "#F9EEF0",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
