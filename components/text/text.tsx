import styled from "styled-components";
import { color, layout, space, typography } from "styled-system";

import type { ColorProps, LayoutProps, SpaceProps, TypographyProps } from "styled-system";

type Element = "p" | "span";

interface TextProps extends ColorProps, LayoutProps, SpaceProps, TypographyProps {
  color?: string;
  children?: React.ReactNode;
  element?: Element;
}

const StyledText = styled.p<TextProps>(
  (props) => ({
    color: props.theme.colors.common.black,
    fontSize: props.theme.fontSizes.m,
  }),
  color,
  layout,
  space,
  typography,
);

export function Text({ children, element = "p", ...rest }: TextProps) {
  return (
    <StyledText as={element} {...rest}>
      {children}
    </StyledText>
  );
}
