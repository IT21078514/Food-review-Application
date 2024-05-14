/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        contentFont: ["Oxygen", "sans-serif"],
        boldTallFont: ["Oswald", "sans-serif"],
        thinFont: ["BioRhyme", "serif"],
        thinKidFont: ["Nunito", "sans-serif"],
        fatKidFont: ["Concert One", "cursive"],
        medievalFont: ["Cormorant Upright", "serif"],
        shortHulkFont: ["Rubik Mono One", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        ferrariRed: "#EA2300",
        gamboge: "#EF9B0C",
        halloweenOrange: "#EA5F21",
        lightSilver: "#D3DCDE",
        blueSapphire: "#065774",
        prussianBlue: "#042B58",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
