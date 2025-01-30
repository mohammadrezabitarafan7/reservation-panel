/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react")

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        myOrange: '#FF4F00', // رنگ سفارشی

        background: 'var(--background)',
        foreground: 'var(--foreground)'
      }
    }
  },
  plugins: [heroui()]
}
