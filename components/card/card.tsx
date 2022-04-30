import styled from "styled-components";

import { Heading } from "~/components/heading";

interface CardProps {
  children?: React.ReactNode;
  title?: string;
}

const Container = styled.li((props) => ({
  display: "flex",

  flexDirection: "column",
  flex: "0 1 100%",

  padding: props.theme.space.m,

  border: `2px solid ${props.theme.colors.common.grey}`,
  borderRadius: props.theme.radii.m,

  [props.theme.mediaQueries.s]: {
    flex: "0 1 calc(50% - 0.5rem)",
  },

  [props.theme.mediaQueries.m]: {
    flex: "0 1 calc(33.3% - 0.75rem)",
  },
}));

export function Card({ children, title }: CardProps): JSX.Element {
  return (
    <Container>
      <Heading level="3" mb="s">
        {title}
      </Heading>
      {children}
    </Container>
  );
}

export const CardsContainer = styled.ul({
  display: "flex",

  flexWrap: "wrap",
  gap: "1rem",
  justifyContent: "space-between",

  width: "100%",

  listStyleType: "none",
});
