module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#2E2B54",
      primary: "#FFFFFF",
      secondary: "#ABAABA",
      active: "#F9D000",
      light: "#121212",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
