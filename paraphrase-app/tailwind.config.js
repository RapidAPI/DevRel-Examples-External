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
      bc: "#FEFEFE",
      primary: "#1C1C1C",
      secondary: "#DD8B6B",
      danger: "#81978B",
      lightBlue: "#A0BEE6",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
