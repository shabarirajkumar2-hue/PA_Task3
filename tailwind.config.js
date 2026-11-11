/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0d2137',
          mid: '#1a3a5c',
          light: '#1e4a73',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          light: '#67e8f9',
          dark: '#0891b2',
        },
        bg: {
          light: '#f0f5fb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}

