import styled from "styled-components";
import { color, layout, space } from "styled-system";

import defaultTheme from "~/config/theme";

import type { LayoutProps, SpaceProps } from "styled-system";

type Level = "1" | "2" | "3";

interface HeadingProps extends LayoutProps, SpaceProps {
  children?: React.ReactNode;
  level?: Level;
}

function getFontStyle(level: Level) {
  let fontSize = defaultTheme.fontSizes.xl;
  if (level === "2") {
    fontSize = defaultTheme.fontSizes.l;
  } else if (level === "3") {
    fontSize = defaultTheme.fontSizes.m;
  }

  return {
    fontSize,
    lineHeight: fontSize,
  };
}

const StyledHeading = styled.h1<HeadingProps>(
  ({ level, theme }) => ({
    color: theme.colors.common.black,
    ...getFontStyle(level!),
  }),
  layout,
  space,
);

function Heading({ children, level = "1", ...rest }: HeadingProps) {
  return (
    <StyledHeading as={`h${level}`} level={level} {...rest}>
      {children}
    </StyledHeading>
  );
}

export default Heading;
