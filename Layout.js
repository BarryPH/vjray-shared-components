import Head from "next/head";
import { Provider } from "rebass";
import theme from "../theme-new";
import globalStyles from "./global";

// https://github.com/zeit/next.js/blob/master/examples/layout-component/components/layout.js

export default ({ children, title = "VJ Ray Strata Management, Sydney" }) => (
  <Provider theme={theme}>
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {children}
    </div>
  </Provider>
);
