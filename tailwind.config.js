/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: "'Mulish', sans-serif", // Adds a new `font-display` class
      },
      colors: {
        orange: "#ff4605",
        black01:"#000",
        black02: "#0f141e",
       black03: "#222732",
      },
    },
  },
  plugins: [require("daisyui")],
};
