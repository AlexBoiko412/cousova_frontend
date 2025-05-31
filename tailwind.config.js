/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        logo: ['Garamond', 'sans-serif'],
      },
      colors: {
        primary: "#14274A",
        secondary: "#18BC9C",
        accent: "#E0B973",
        light: "#ffffff",
        dark: "#34495E",
      },
      fontSize: {
        h1: ['2.5rem', { lineHeight: '3rem' }],
        h2: ['2rem', { lineHeight: '2.5rem' }],
        body: ['1rem', { lineHeight: '1.5rem' }],
        button: ['1.5rem', { lineHeight: '2rem' }],
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      padding: {
        "main-page-padding": "5vw"
      }
    },
  },
  plugins: [],
}

