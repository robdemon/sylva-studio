/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Palette source: Documents/Color_Palatte.jpeg
        bone: '#F4F1EA',
        sand: '#D8D2C5',
        sage: '#6F7F5B',
        olive: '#3E4B35',
        forest: '#1E241B',
        night: '#151A13',
        ink: '#1E241B',
        reef: {
          deep: '#3E4B35',
          teal: '#6F7F5B',
          coral: '#D8D2C5',
          glow: '#D8D2C5',
        },
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-14px) scale(1.03)' },
        },
        bob: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        drift: 'drift 9s ease-in-out infinite',
        bob: 'bob 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
