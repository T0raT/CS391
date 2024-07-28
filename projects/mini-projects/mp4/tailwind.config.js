/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "calc-lg": "calc(0.8rem + 0.8vw)",
        "calc-base": "calc(0.6rem + 0.6vw)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
