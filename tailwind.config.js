/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter_regular: ["InterRegular"],
        inter_medium: ["InterMedium"],
        montserrat_regular: ["MontserratRegular"],
        montserrat_medium: ["MontserratMedium"],
      },
    },
    screens: {
      xss: "320px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xxl: "1300px",
      xxxl: "1500px",
    },
  },
  plugins: [],
}

