/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#F0EAD2',
        'custom-bg-secondary': '#678f15',
        'custom-bg-optional': '#7bbf20',
        'custom-text': '#678f15',
      },
    },
  },
  plugins: [],
}

