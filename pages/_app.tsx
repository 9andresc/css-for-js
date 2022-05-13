import "ress";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { defaultTheme } from "~/config/theme";

import type { AppProps } from "next/app";

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }

  html,
  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  * {
    line-height: calc(1em + 0.5rem);
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
