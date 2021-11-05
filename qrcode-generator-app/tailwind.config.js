module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      grey: "#20222E",
      primary: "#FFFFFF",
      secondary: "#232734",
      active: "#7090FE",
      lightGrey: "#3F4354",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
