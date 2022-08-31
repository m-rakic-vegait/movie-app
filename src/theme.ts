import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  palette: {
    primary: '#04407d',
    secondary: '#02324a',
    textColor: '#dddd00'
  },
  font: {
    family: {
      primary: 'Tahoma',
      secondary: 'Verdana'
    },
    size: {
      s1: 10,
      s2: 11,
      s3: 12,
      m1: 13,
      m2: 14,
      m3: 16,
      l1: 18,
      l2: 20,
      l3: 24,
    },
    weight: {
      thin: 100,
      regular: 300,
      semibold: 500,
      bold: 700,
      black: 900,
    },
  },
};

export { theme as default };
