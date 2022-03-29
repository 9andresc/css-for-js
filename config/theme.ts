import { modularScale } from "polished";

import type { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  colors: {
    common: {
      black: "#343434",
      grey: "#CED3DC",
      white: "#FCF7F8",
    },
    primary: "#FFFC31",
  },
  fontSizes: {
    s: modularScale(-1, "1rem", "perfectFourth"),
    m: modularScale(0, "1rem", "perfectFourth"),
    l: modularScale(1, "1rem", "perfectFourth"),
    xl: modularScale(2, "1rem", "perfectFourth"),
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

export default defaultTheme;
