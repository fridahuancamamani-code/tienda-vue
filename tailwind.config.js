/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f7ff',
          100: '#e0ecff',
          500: '#4f6df5',
          600: '#3a53e0',
          700: '#2e42b8',
        },
      },
    },
  },
  plugins: [],
}
