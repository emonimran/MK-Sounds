/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        azure: "#F5F6F6",
        white: "#FFF2F2",
        grey: "#2F29299E",
        "dark-green": "#1ADC50",
        "light-green": "#44E50B8C",
        black: "#000000",
        greenish: "#66FF1E",
        cyan: "#07FFD2",
        blue: "#1E78FF",
        purple: "#8E3785",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
