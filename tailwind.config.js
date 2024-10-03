/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'byzantine': '#541E50',
        'lime': '#C9D454',
      },
    },
    
  },
  plugins: [],
}