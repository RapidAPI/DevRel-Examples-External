module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#040D21",
      primary: "#FFFFFF",
      secondary: "#9E9E9E",
      active: "#5AFFA3",
      danger: "#FF385C",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
