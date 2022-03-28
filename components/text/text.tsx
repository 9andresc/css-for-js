import styled from "styled-components";
import { color, layout, space } from "styled-system";

import defaultTheme from "~/config/theme";

import type { DefaultTheme } from "styled-components";
import type { LayoutProps, SpaceProps } from "styled-system";

type Element = "p" | "span";

interface TextProps extends LayoutProps, SpaceProps {
  children?: React.ReactNode;
  element?: Element;
}

function getFontStyle() {
  return {
    fontSize: defaultTheme.fontSizes.m,
    lineHeight: defaultTheme.fontSizes.m,
  };
}

const StyledText = styled.p<TextProps>(
  ({ theme }) => ({
    color: theme.colors.common.black,
    ...getFontStyle(),
  }),
  layout,
  space,
);

function Text({ children, element = "p", ...rest }: TextProps) {
  return (
    <StyledText as={element} {...rest}>
      {children}
    </StyledText>
  );
}

export default Text;
