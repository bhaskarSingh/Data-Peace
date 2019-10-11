import styled from "@emotion/styled";

const StyledTable = styled.div`
  overflow-x: auto;
  display: grid;
  margin: 1rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  th,
  tr {
    border: 1px solid #ddd;
    padding: 20px;
  }

  td {
    height: 40px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #007bff;
    color: white;
  }

  tr:nth-of-type(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;

export const MobileView = styled.div`
  display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
    text-align: center;
  }
`;

export default StyledTable;
