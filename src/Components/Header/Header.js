import React from "react";
import StyledHeader from "./Header.styled";
import PropTypes from "prop-types";

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <h1>{children}</h1>
    </StyledHeader>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
