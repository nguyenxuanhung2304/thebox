/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '135': '135deg',
      }
    },
    backgroundImage: {
      'kitchen': "url('@/assets/kitchen.png')",
    },
  },
  plugins: [],
}

