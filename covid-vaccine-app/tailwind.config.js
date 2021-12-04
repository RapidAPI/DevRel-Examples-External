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
      bc: "#F3F3F3",
      primary: "#F0572F",
      secondary: "#0F0F0F",
      danger: "#F6BA1E",
      black: "#000000",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
