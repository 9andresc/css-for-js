import "styled-components";

interface Palette {
  contrast: string;
  main: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        grey: string;
        white: string;
      };
      primary: Palette;
    };
  }
}
