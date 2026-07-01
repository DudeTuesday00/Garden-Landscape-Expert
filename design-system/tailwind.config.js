/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Raleway', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        garden: {
          50: '#F5F5F0',
          100: '#e8f2e0',
          200: '#cae4b4',
          300: '#a3d07e',
          400: '#88c860',
          500: '#7dc95c',
          600: '#6FBF4B',
          700: '#5eae3d',
          800: '#2F6B3F',
          900: '#1e4a2a',
        },
        earth: {
          50: '#fdf8ed',
          100: '#faefd0',
          200: '#f5d98a',
          300: '#efc55e',
          400: '#e8b94a',
          500: '#E5B24A',
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
