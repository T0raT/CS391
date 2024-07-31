/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "calc-header": "calc(1.5rem + 1.5vw)",
        "calc-lg": "calc(0.7rem + 0.7vw)",
        "calc-base": "calc(0.55rem + 0.55vw)",
      },
      fontFamily: {
        futura: ["futura-pt"],
      },
    },
  },
};
