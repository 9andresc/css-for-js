import NextLink from "next/link";
import styled from "styled-components";

interface LinkProps {
  href: string;
  label: string;
}

const StyledLink = styled.a(({ theme }) => ({
  color: theme.colors.secondary,
  fontWeight: "bold",

  "&:visited": {
    color: theme.colors.secondary,
  },
}));

export function Link({ href, label }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <StyledLink>{label}</StyledLink>
    </NextLink>
  );
}
