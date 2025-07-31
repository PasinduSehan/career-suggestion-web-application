/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#ff00ff',
        'neon-pink': '#ff69b4',
        'neon-green': '#39ff14',
        'neon-white': '#f5f5f5',
        'neon-blue': '#00ffff',
        'neon-orange': '#ff5f00',
      },
    },
  },
  plugins: [],
}
