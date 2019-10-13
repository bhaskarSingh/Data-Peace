import React from "react";
import StyledError from "./Error.styled";
import PropTypes from "prop-types";
const Error = ({ children }) => {
  return <StyledError>{children}</StyledError>;
};

Error.propTypes = {
  children: PropTypes.node.isRequired
};

export default Error;
