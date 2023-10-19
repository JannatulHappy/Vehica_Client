/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: "'Mulish', sans-serif", // Adds a new `font-display` class
      
      },
      colors: {
        blue01: "#08133a",
        blue02: "#108aee",
        blue03: "#091f4c",
      },
    },
  },
  plugins: [require("daisyui")],
};
