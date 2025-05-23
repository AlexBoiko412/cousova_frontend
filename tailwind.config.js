/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Adobe', 'sans-serif'], // або 'Roboto', якщо з Figma
      },
      colors: {
        primary: "#14274A",
        secondary: "#18BC9C",
        accent: "#E0B973",
        light: "#ECF0F1",
        dark: "#34495E",
      },
      fontSize: {
        h1: ['2.5rem', { lineHeight: '3rem' }],
        h2: ['2rem', { lineHeight: '2.5rem' }],
        body: ['1rem', { lineHeight: '1.5rem' }],
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

