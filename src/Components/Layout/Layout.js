import { Global, css } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "emotion-theming";

const theme = {
  primaryBackground: "#fff",
  primaryColor: "#000"
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            padding: 0;
          }
          *,
          *::after,
          *::before {
            box-sizing: border-box;
          }
          body {
            color: ${theme.primaryColor};
            background-color: ${theme.primaryBackground};
            font-size: 18px;
            margin: 0;
            font-family: "Nunito", sans-serif;
          }
        `}
      ></Global>
      {children}
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
