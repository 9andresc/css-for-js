import Head from "next/head";
import styled from "styled-components";

import { Box } from "~/components/box";
import { Heading } from "~/components/heading";
import { Text } from "~/components/text";
import { defaultTheme } from "~/config/theme";

interface LayoutProps {
  children?: React.ReactNode;
  headerDescription?: string;
  headerTitle: string;
  pageTitle: string;
}

const Header = styled.header((props) => ({
  display: "flex",

  alignItems: "center",
  justifyContent: "center",

  minHeight: "4rem",
  width: "100%",

  backgroundColor: props.theme.colors.primary,
}));

const Section = styled.section({
  display: "flex",

  alignItems: "center",
  justifyContent: "center",

  width: "100%",
});

export function Layout({ children, headerDescription, headerTitle, pageTitle }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Header>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          maxWidth={[defaultTheme.breakpoints[0], defaultTheme.breakpoints[1], defaultTheme.breakpoints[2]]}
          padding="1rem"
          width="100%"
        >
          <Heading textAlign="center">{headerTitle}</Heading>

          {headerDescription ? (
            <Text mt="s" textAlign="center">
              {headerDescription}
            </Text>
          ) : null}
        </Box>
      </Header>

      <Section>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          maxWidth={[defaultTheme.breakpoints[0], defaultTheme.breakpoints[1], defaultTheme.breakpoints[2]]}
          padding="1rem"
          width="100%"
        >
          {children}
        </Box>
      </Section>
    </>
  );
}
