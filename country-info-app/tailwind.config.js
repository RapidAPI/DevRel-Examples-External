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
      bc: "#353849",
      primary: " #FFFFFF",
      secondary: "#232734",
      danger: "#03CC90",
      lightGrey: "#3F4354",
    },
    boxShadow: {
      custom: "0 0 10px #F8EF12",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
