import { createStyleObject } from "@capsizecss/core";
import fontMetrics from "@capsizecss/metrics/poppins";
import styled from "styled-components";
import { color, layout, space } from "styled-system";

import defaultTheme from "~/config/theme";

import type { ColorProps, LayoutProps, SpaceProps } from "styled-system";

type TextProps = ColorProps & LayoutProps & SpaceProps;

function getFontStyle() {
  return createStyleObject({
    fontSize: defaultTheme.fontSizes.m,
    leading: defaultTheme.fontSizes.m * 1.5,
    fontMetrics,
  });
}

const p = styled.p<TextProps>(
  (props) => ({
    color: props.theme.colors.common.black,
    ...getFontStyle(),
  }),
  layout,
  space,
  color,
);

const span = styled.span<TextProps>(
  (props) => ({
    color: props.theme.colors.common.black,
    ...getFontStyle(),
  }),
  layout,
  space,
  color,
);

const Text = { p, span };

export default Text;
