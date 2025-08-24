/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004095',
        secondary: '#005BC5',
        accent: '#0070F3',
        light: '#E8F1FF',
        dark: '#002B66'
      }
    },
  },
  plugins: [],
}