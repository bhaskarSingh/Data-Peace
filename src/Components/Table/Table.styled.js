import styled from "@emotion/styled";

const StyledTable = styled.table`
  th,
  tr {
    border: 1px solid #ddd;
    padding: 20px;
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

export default StyledTable;
