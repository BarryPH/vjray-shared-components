import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { Provider } from "rebass";
import theme from "../theme-new";
import globalStyles from "./global";

// https://github.com/zeit/next.js/blob/master/examples/layout-component/components/layout.js
// http://jxnblk.com/rebass/theming

const Layout = ({ children, title }) => (
  <Provider theme={theme}>
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="JizkFkWaLwMcZOtA0K-Mpo3iwamP4eYMmruKSGnpB6o" />
      </Head>

      {children}

    </div>
  </Provider>
);

Layout.propsTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

Layout.defaultProps = {
  title: "VJ Ray Real Estate Management Services, Sydney",
};

export default Layout;
