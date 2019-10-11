import React from "react";
import StyledTable from "./Table.styled";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
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

const Table = ({ currentList, onSort, sortColumn }) => {
  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            {columns.map(column => {
              return (
                <th onClick={() => onSort(column.path)} key={column.path}>
                  {column.label}
                  {sortColumn.path === column.path ? (
                    sortColumn.order === "asc" ? (
                      <FaAngleDown />
                    ) : (
                      <FaAngleUp />
                    )
                  ) : null}
                </th>
              );
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
      </table>
    </StyledTable>
  );
};

Table.propTypes = {
  currentList: PropTypes.array.isRequired
};

export default Table;
