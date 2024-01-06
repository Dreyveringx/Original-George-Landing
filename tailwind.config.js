/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Roboto Slab", "sans-serif"],
      },
      colors: {
        primary: "#298af8",
        secondary: "#5ae6ff",
        tertiary: "#ffed92",
        quaternary: "#005395",
      },
      lineHeight: {
        50: "50px",
      },
      boxShadow: {
        custom: "0px 0px 10px #ffe15a",
        custom1: "5px 5px 10px #",
      },
      borderColor: {
        custom: "#ffed92",
        custom1: "#005395",
      },
    },
  },
  plugins: [],
};
