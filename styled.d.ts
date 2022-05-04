import "styled-components";

interface Size {
  s: number | string;
  m: number | string;
  l: number | string;
  xl: number | string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: string[];
    colors: {
      common: {
        black: string;
        grey: string;
        white: string;
      };
      primary: string;
      secondary: string;
    };
    fontSizes: Size;
    mediaQueries: Size;
    radii: Size;
    space: Size;
  }
}
