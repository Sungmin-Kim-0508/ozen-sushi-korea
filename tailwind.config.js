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
        "4358DC": "#4358DC",
        F49172: "#F49172",
        "103DC6": "#103DC6",
        "395AC1": "#395AC1",
        595959: "#595959",
        F7F7F8: "#F7F7F8",
      },
      fontFamily: {},
      screens: {
        xxl: { max: "1700px" },
        // => @media (max-width: 1700px) { ... }
        xl: { max: "1400px" },
        // => @media (max-width: 1400px) { ... }
        lg: { max: "1200px" },
        // => @media (max-width: 1150px) { ... }
        mlg: { max: "1024px" },
        // => @media (max-width: 1024px) { ... }
        md: { max: "768px" },
        // => @media (max-width: 768px) { ... }
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
