import { createStyleObject } from "@capsizecss/core";
import fontMetrics from "@capsizecss/metrics/poppins";
import styled from "styled-components";
import { color, layout, space } from "styled-system";

import defaultTheme from "~/config/theme";

import type { ColorProps, LayoutProps, SpaceProps } from "styled-system";

type HeadingProps = ColorProps & LayoutProps & SpaceProps;

function getFontStyle(level: "1" | "2" | "3") {
  let size = defaultTheme.fontSizes.xl;
  if (level === "2") {
    size = defaultTheme.fontSizes.l;
  } else if (level === "3") {
    size = defaultTheme.fontSizes.m;
  }

  return createStyleObject({
    fontSize: size,
    leading: size * 1.5,
    fontMetrics,
  });
}

const h1 = styled.h1<HeadingProps>(
  (props) => ({
    color: props.theme.colors.common.black,
    ...getFontStyle("1"),
  }),
  layout,
  space,
  color,
);

const h2 = styled.h2<HeadingProps>(
  (props) => ({
    color: props.theme.colors.common.black,
    ...getFontStyle("2"),
  }),
  layout,
  space,
  color,
);

const h3 = styled.h3<HeadingProps>(
  (props) => ({
    color: props.theme.colors.common.black,
    ...getFontStyle("3"),
  }),
  layout,
  space,
  color,
);

const Heading = { h1, h2, h3 };

export default Heading;
