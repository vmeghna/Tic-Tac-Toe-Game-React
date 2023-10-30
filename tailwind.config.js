/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5e3bee",
        black: "#000",
        overlay: "hsla(0, 0%, 0%, 0.5)",
        white: "#fff",
        lightGray: "#ddd",
        lightDarkPurple: "#69a0dd",
        darkPurple: "#12164b",
        darkBlue: "#2a76b4",
        lightBlue: "#79b9ff",
      },
      fontFamily: {
        game: ["Seymour One", "sans-serif"],
        speech: ["Sofia Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
