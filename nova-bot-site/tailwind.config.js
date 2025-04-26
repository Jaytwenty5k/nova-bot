/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./layouts/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          purple: {
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#d8b4fe',
            300: '#c084fc',
            400: '#a855f7',
            500: '#9333ea', // Hauptlila
            600: '#7e22ce',
            700: '#6b21a8',
            800: '#5b1f7a',
            900: '#4c1d6e',
          },
        },
      },
    },
    plugins: [],
  }


 