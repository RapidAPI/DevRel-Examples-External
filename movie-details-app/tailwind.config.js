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
      bc: "#050D21",
      primary: "#FFFDFB",
      secondary: "#B46CF8",
      danger: "#1A67F8",
      lightGrey: "#C9D5EE",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
