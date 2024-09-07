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
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        appear: 'appear 2s ease-in-out',
      },
    },
  },
  plugins: [],
}
