/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
  darkMode: "selector",
  theme: {
    screens: {
      // width
      w1200: { max: "1200px" },
      w1024: { max: "1024px" },
      w888: { max: "888px" },
      w480: { max: "480px" },
      // height
      h500: {
        raw: "(max-height: 500px)",
      },
      h600: {
        raw: "(max-height: 600px)",
      },
      h900: {
        raw: "(max-height: 900px)",
      },
    },
    fontFamily: {
      mulish: ['"Mulish"', "sans-serif"],
      philosopher: ['"Philosopher"', "sans-serif"],
      barlow: ['"Barlow"', "sans-serif"],
      prata: ['"Prata"', "serif"],
    },
    extend: {
      colors: {
        gold: "#EBD9AD",
        "main-grey": "#3d4653df",
        "transparent-gray": "#E0EFFF14",
        "dimmed-text-gray": " #E0EFFFA3",
        "dark-dimmed-blue": "#0D101AB8",
        "dark-blue": "#0D101A",
      },
      backgroundImage: {
        wallpaper: "url('assets/images/wallpaper.png')",
      },
    },
  },
};
