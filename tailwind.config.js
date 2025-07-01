/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#060417',
        green: '#159b48',
        'primary-light': '#caf8ca',
        'light-blue': '#F6F7F8',
        dark: '#000000',
        grey: '#F3F3F3',
        'dark-grey': '#4F4F4F',
        'light-grey': '#d3d3d3',
        'glass-bg': 'rgba(255, 255, 255, 0.25)',
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(86.86deg, #249D49 0%, #00742F 53%, #13893C 106.85%)',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}