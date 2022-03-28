import "styled-components";

interface Size {
  s: number | string;
  m: number | string;
  l: number | string;
  xl: number | string;
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
