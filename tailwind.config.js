/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#dcf1df',
          200: '#bbe2c2',
          300: '#90ce9b',
          400: '#65b771',
          500: '#479f52',
          600: '#3a8041',
          700: '#316536',
          800: '#2a512d',
          900: '#1a331c',
          950: '#0d1a0e',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd3',
          200: '#ffd9a6',
          300: '#ffc070',
          400: '#ffa23d',
          500: '#ff8a17',
          600: '#fb6c08',
          700: '#cc4e08',
          800: '#a23e0f',
          900: '#833610',
          950: '#461b05',
        },
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};