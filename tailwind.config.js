/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sosia-blue': '#001F3F',
        'sosia-gold': '#DAA520',
        'sosia-coral': '#FF7A5A',
        'sosia-brown': '#8B4513',
        'sosia-green': '#228B22',
        'sosia-navy': '#0F172A',
        'sosia-slate': '#1E2D45',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

