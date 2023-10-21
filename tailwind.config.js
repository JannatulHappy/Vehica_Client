/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "var(--bg-dark)", // Use a CSS variable for dark theme background color
        light: "var(--bg-light)", // Use a CSS variable for light theme background color
      },
      textColor: {
        dark: "var(--text-dark)", // Use a CSS variable for dark theme text color
        light: "var(--text-light)", // Use a CSS variable for light theme text color
      },
      fontFamily: {
        mulish: "'Mulish', sans-serif", // Adds a new `font-display` class
      },
      colors: {
        orange: "#ff4605",
        black01: "#000",
        black02: "#0f141e",
        black03: "#222732",
      },
    },
  },
  plugins: [require("daisyui")],
};
