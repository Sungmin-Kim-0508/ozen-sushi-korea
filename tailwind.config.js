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
      },
    },
    screens: {
      md: "750px",
    },
  },
  plugins: [],
};
