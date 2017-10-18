import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import globalStyles from "./global";

// https://github.com/zeit/next.js/blob/master/examples/layout-component/components/layout.js

export default ({ children, title = "VJ Ray Strata Management, Sydney" }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {children}
    </div>
  </ThemeProvider>
);
