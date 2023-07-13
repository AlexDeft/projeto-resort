/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        fundo1: "url('/hero-image-1.png')",
      },
      spacing: {
        450: '450px',
      },
    },
  },
  plugins: [],
}

