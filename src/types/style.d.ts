import 'styled-components';

interface FontFamily {
  primary: string;
  secondary?: string;
}

interface PaletteFontSize {
  s1: number;
  s2: number;
  s3: number;
  m1: number;
  m2: number;
  m3: number;
  l1: number;
  l2: number;
  l3: number;
}

interface PaletteFontWeight {
  thin: number;
  regular: number;
  semibold: number;
  bold: number;
  black: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string;
      secondary: string;
      textColor: string;
    };
    font: {
      family: PaletteFontFamily;
      size: PaletteFontSize;
      weight: PaletteFontWeight;
    };
  }
}
