import React from "react";
import StyledTable from "./Table.styled";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";
const columns = [
  {
    label: "First Name",
    path: "first_name"
  },
  {
    label: "Last Name",
    path: "last_name"
  },
  {
    label: "Company Name",
    path: "company_name"
  },
  {
    label: "City",
    path: "city"
  },
  {
    label: "State",
    path: "state"
  },
  {
    label: "Zip",
    path: "zip"
  },
  {
    label: "Email",
    path: "email"
  },
  {
    label: "Web",
    path: "web"
  },
  {
    label: "Age",
    path: "age"
  }
];

const Table = ({ currentList }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map(column => {
            return <th key={column.path}>{column.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {currentList.map(list => {
          return (
            <tr
              key={list.id}
              onClick={() => {
                navigate(`/user/${list.id}`, { state: list });
              }}
            >
              {columns.map((column, index) => {
                return <td key={index}>{list[column.path]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

Table.propTypes = {
  currentList: PropTypes.array.isRequired
};

export default Table;
