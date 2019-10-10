import styled from "@emotion/styled";

const StyledPagination = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
  overflow-x: scroll;

  li {
    z-index: 1;
    color: #fff;
    border-color: #007bff;
  }

  a {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    width: 60px;
    text-align: center;
    :hover,
    :focus {
      background: #dee2e6;
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  align-items: center;
  grid-gap: 1px;

  button {
    border-radius: 5px;
    height: 45px;
  }
`;

export default StyledPagination;
