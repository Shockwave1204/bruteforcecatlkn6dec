/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["cupcake", "dark", "cmyk", "synthwave", "luxury", "coffee", "light", "pastel", "forest", "cyberpunk", "retro"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}