import { modularScale } from "polished";

import type { DefaultTheme } from "styled-components";

const breakpoints = ["600px", "960px", "1280px"];
export const defaultTheme: DefaultTheme = {
  breakpoints,
  colors: {
    common: {
      black: "#343434",
      grey: "#CED3DC",
      white: "#FCF7F8",
    },
    primary: "#FFFC31",
    secondary: "#38AECC",
  },
  fontSizes: {
    s: modularScale(-1, "1rem", "perfectFourth"),
    m: modularScale(0, "1rem", "perfectFourth"),
    l: modularScale(1, "1rem", "perfectFourth"),
    xl: modularScale(2, "1rem", "perfectFourth"),
  },
  mediaQueries: {
    s: `@media (min-width: ${breakpoints[0]})`,
    m: `@media (min-width: ${breakpoints[1]})`,
    l: `@media (min-width: ${breakpoints[2]})`,
    xl: `@media (min-width: ${breakpoints[2]})`,
  },
  radii: {
    s: 3,
    m: 5,
    l: 7,
    xl: 9,
  },
  space: {
    s: modularScale(-1, "1rem", "perfectFourth"),
    m: modularScale(0, "1rem", "perfectFourth"),
    l: modularScale(1, "1rem", "perfectFourth"),
    xl: modularScale(2, "1rem", "perfectFourth"),
  },
};
