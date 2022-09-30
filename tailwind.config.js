/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "lc-river-1": "url('./assets/images/background/lc-river-1.jpg')",
        "lc-river-2": "url('./assets/images/background/lc-river-2.jpg')",
        "lc-river-3": "url('./assets/images/background/lc-river-3.jpg')",
      }
    },
  },
  plugins: [],
}
