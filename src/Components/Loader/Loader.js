import React from "react";
import bars from "../../assets/bars.svg";
import StyledLoader from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoader>
      <img width="70px" src={bars} alt="loading" />
    </StyledLoader>
  );
};

export default Loader;
