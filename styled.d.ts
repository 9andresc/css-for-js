import "styled-components";

interface Size {
  s: number;
  m: number;
  l: number;
  xl: number;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      common: {
        black: string;
        grey: string;
        white: string;
      };
      primary: string;
    };
    fontSizes: Size;
    radii: Size;
    space: Size;
  }
}
