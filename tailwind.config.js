/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'] },
      colors: {
        ink: '#0a0a0a',
        paper: '#ffffff',
        fog: '#e8e7e5',
        ash: '#c4c3c1',
        stone: '#6b6b6b',
      },
    },
  },
  plugins: [],
}
