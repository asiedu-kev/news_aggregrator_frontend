/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#3B51FA",
        danger: "#F55B5D",
        info: "#08C59E",
        warning: "#FFA800",
        black: "#000",
        white: "#fff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
