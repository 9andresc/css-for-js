import styled from "styled-components";
import { compose, flexbox, layout, position, space } from "styled-system";

import type { FlexboxProps, LayoutProps, PositionProps, SpaceProps } from "styled-system";

interface BoxProps extends FlexboxProps, LayoutProps, PositionProps, SpaceProps {}

export const Box = styled.div<BoxProps>({}, compose(flexbox, layout, position, space));
