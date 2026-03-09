/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        garden: {
          50:  '#F5F5F0',  // page background
          100: '#e8f2e0',  // light tints, progress bar bg
          200: '#cae4b4',  // borders
          300: '#a3d07e',
          400: '#88c860',
          500: '#7dc95c',  // progress fill, selected borders
          600: '#6FBF4B',  // primary buttons — Garden Green
          700: '#5eae3d',  // button hover
          800: '#2F6B3F',  // headings, brand text — Deep Green
          900: '#1e4a2a',  // dark headings
        },
        earth: {
          50:  '#fdf8ed',  // light gold tint
          100: '#faefd0',
          200: '#f5d98a',
          300: '#efc55e',
          400: '#e8b94a',
          500: '#E5B24A',  // Sunlight Gold — highlights
          600: '#c99538',
          700: '#a8742c',
          800: '#7e5220',
          900: '#5c3a18',
        },
      },
    },
  },
  plugins: [],
}
