/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "calc-lg": "calc(0.7rem + 0.7vw)",
        "calc-base": "calc(0.5rem + 0.5vw)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
