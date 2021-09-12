/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import "./layout.css";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <GlobalWrapper>
      <Header />
      <main>{children}</main>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        This is footer
      </footer>
    </GlobalWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const GlobalWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  position: relative;
`;
