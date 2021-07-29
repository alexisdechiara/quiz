module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  //mode: 'jit',
  theme: {
    fontWeight:{
      'thin': 100,
      'extralight': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'bolder':900,
    },
    screens: {
      'sm': '480px',
      // => @media (min-width: 480px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    keyframes: {
      'fade-in-down': {
        '0%': {
          opacity: '0',
          transform: 'translateY(-16px)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)'
        },
      },
      'fade-in': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      }
    },
    animation: {
      'fade-in-down': 'fade-in-down 0.5s ease',
      'fade-in' : 'fade-in 0.5s ease',
    },
    extend: {
      backgroundImage: theme => ({
        'wave': "url('./assets/img/wave.svg')",
      }),
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'custom-black': '#212126',
        'custom-gray': '#6C6C73',
        'custom-purple': '#A900E4',
        'custom-indigo': '#7724FF',
        'custom-blue': '#4D4DFE',
        'custom-green': '#03C03C',
        'custom-yellow': '#FFD300',
        'custom-orange':'#FF5F1F',
        'custom-red': '#FF3131',
        'pink': '#FF69B4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
