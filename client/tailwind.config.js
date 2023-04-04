/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#FF59C7",
          200: "#FF00A9",
          300: "#D149A4",
        },
        secondary: {
          100: "#2D2E34",
          200: "#1C1D21",
          300: "#151618",
          400: "#8E8E93",
        },
      },
    },
  },
  plugins: [],
};
