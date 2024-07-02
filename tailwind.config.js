/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-beige': '#F0EAD2',
        'custom-green': '#74884F',
        'custom-emerald': '#293D07',
        'custom-black': '#2E1F27',
        'custom-red': '#A72608'
      },

      minWidth: {
        'screen-vh': '100vh',
      },
    },
  },
  plugins: [],
}

