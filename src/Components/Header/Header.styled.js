import styled from "@emotion/styled";

const StyledHeader = styled.header`
  background-color: #fff;
  font-weight: 800;
  padding: 1rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  color: #363434;
  height: 3.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;

  h1 {
    color: ${({ theme }) => theme.primaryColor};
    margin: 0;
  }
`;

export default StyledHeader;
