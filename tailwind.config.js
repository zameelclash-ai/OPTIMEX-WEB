/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        optimex: {
          red: '#FF1B2D',
          redHover: '#E01425',
          blue: '#0066FF',
          blueHover: '#0052CC',
          dark: '#08080C',
          darker: '#040407',
          surface: '#101018',
          card: '#141420',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        dark: {
          950: '#040407',
          900: '#08080C',
          850: '#0e0e15',
          800: '#141420',
          700: '#1d1d2e',
          600: '#2b2b42',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-red': '0 0 30px -5px rgba(255, 27, 45, 0.35)',
        'glow-blue': '0 0 30px -5px rgba(0, 102, 255, 0.35)',
        'glow-card': '0 10px 40px -15px rgba(0, 0, 0, 0.7)',
        'liquid': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'grid-pattern': "radial-gradient(circle, rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
