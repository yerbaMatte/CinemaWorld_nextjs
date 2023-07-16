/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    gridTemplateColumns: {
      'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
    },
    extend: {
      height: {
        128: '40rem',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      keyframes: {
        floating: {
          '0%': { transform: 'translateY(-15px)' },
          '50%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-15px)' },
        },
        growing: {
          '0%': { transform: 'scale(0.7)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.7)' },
        },
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },

      animation: {
        floating: 'floating 2s infinite',
        growing: 'growing 2s infinite',
        fadeIn: 'fade 4s',
        fadeOut: 'fade 4s reverse',
      },

      colors: {
        theme: {
          50: '#FFFFFF',
          100: '#F5F5F5',
          200: '#EBEBEB',
          300: '#E1E1E1',
          400: '#D7D7D7',
          500: '#CCCCCC',
          600: '#C2C2C2',
          700: '#B8B8B8',
          800: '#AEAEAE',
          900: '#010404',
        },
      },
    },
    fontFamily: {
      opensans: ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
