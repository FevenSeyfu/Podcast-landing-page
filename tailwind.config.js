/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'primary-light-green': '#54E6AF',
        'primary-dark-bg': '#121725',
        'darker-gray': '#2C344B',
        // neutral
        'secondary-light-gray': '#C2CBE5',
        'secondary-dark-gray': '#5A668A',
      },
    },
  },
  plugins: [],
}
