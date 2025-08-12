// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

    corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      fontFamily: {
        myFont: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};