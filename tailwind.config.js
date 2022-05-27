/* eslint-disable global-require */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontSize: {
      xs: '1rem',
      sm: '1.2rem',
      base: '1.6rem',
      lg: '2rem',
      xl: '3rem',
      '2xl': '6rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      primary: {
        100: '#90f8b3',
        300: '#5ad583',
        500: '#55c57a',
        700: '#308f50',
        900: '#1d743a',
      },
      secondary: {
        100: '#ffe4d6',
        300: '#ffad83',
        500: '#ff7730',
        700: '#99471d',
        900: '#33180a',
      },
      tertiary: {
        100: '#ddd9fe',
        300: '#9a8efc',
        500: '#5240f5',
        700: '#342896',
        900: '#110d32',
      },
      grey: {
        100: '#e4e4e4',
        300: '#adadad',
        500: '#777777',
        700: '#474747',
        900: '#181818',
      },
      white: '#fff',
      black: '#000',
      background: '#ddb52f',
      red: 'red',
    },
    extend: {},
  },
  plugins: [],
};
