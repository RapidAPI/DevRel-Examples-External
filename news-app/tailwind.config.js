module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
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
