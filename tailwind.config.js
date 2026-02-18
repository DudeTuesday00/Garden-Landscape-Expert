/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        garden: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        earth: {
          50:  '#fdf8f0',
          100: '#faecd9',
          200: '#f5d5a8',
          300: '#edb96a',
          400: '#e49a3a',
          500: '#d97f1f',
          600: '#c16316',
          700: '#9e4a14',
          800: '#7e3b16',
          900: '#673215',
        },
      },
    },
  },
  plugins: [],
}
