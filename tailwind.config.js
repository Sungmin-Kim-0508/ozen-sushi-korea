/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "22346b": "#22346B",
        EC6236: "#EC6236",
        959595: "#959595",
        FAFAFA: "#FAFAFA",
        959595: "#959595",
        DBDBDB: "#DBDBDB",
        CF382D: "#CF382D",
        191919: "#191919",
        F1F1F1: "#F1F1F1",
        C9C9C9: "#C9C9C9",
      },
      fontFamily: {},
      screens: {
        md: "750px",
      },
    },
  },
  plugins: [],
};
