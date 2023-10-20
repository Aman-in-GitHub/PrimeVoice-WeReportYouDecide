/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ff4848'
      },
      fontFamily: {
        main: ['Inter', 'sans-serif'],
        sub: ['Crimson Text', 'serif']
      }
    }
  },
  plugins: []
};
