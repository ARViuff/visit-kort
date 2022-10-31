/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heropattern: "url('img/personlig_logo.png')",
      },
    },
    animation: {
      floaty: "floaty 2s ease-in-out infinite",
      Bounce: "bounce 1s ease-in-out infinite",
    },
  },

  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
