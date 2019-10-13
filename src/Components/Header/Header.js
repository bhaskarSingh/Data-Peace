import React from "react";
import StyledHeader from "./Header.styled";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Header = ({ children, navigateBack = false }) => {
  return (
    <StyledHeader>
      {navigateBack && (
        <Button
          data-testid="navigate-back"
          onClick={() => window.history.back()}
        >
          <IoIosArrowDropleftCircle size="40px" />
        </Button>
      )}
      <h1>{children}</h1>
    </StyledHeader>
  );
};

const Button = styled.button`
  margin-top: 5px;
  border: none;
  cursor: pointer;
  background-color: #fff;
`;

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
