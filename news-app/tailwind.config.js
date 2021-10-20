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
      primary: "#FFFDFB",
      secondary: "#D6E3E4",
      danger: " #31CB53",
      lightYellow: " #F6FF81",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
