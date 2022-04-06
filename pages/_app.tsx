import "ress";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { defaultTheme } from "~/config/theme";

import type { AppProps } from "next/app";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
  }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
