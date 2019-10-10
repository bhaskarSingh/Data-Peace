import React, { useEffect, useState } from "react";
import { Layout, Header, Pagination } from "./Components";
import axios from "axios";
import styled from "@emotion/styled";
function App() {
  const [users, updateUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentList, setCurrentList] = useState([]);
  const [searchInput, onInputChange] = useState("");
  const [filterArr, setFilteredArr] = useState([]);
  const onPageChange = page => {
    setCurrentPage(page);
    const end = page * 5;
    const start = end - 5;
    setCurrentList(users.slice(start, end));
  };
  const ApiRequest = async () => {
    const result = await axios("https://demo9197058.mockable.io/users");
    updateUsers(result.data);
    console.log(result.data);
    setCurrentList(result.data.slice(0, 5));
  };
  useEffect(() => {
    ApiRequest();
  }, []);

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

  return (
    <Layout>
      <Header>Data peace</Header>
      <form>
        <label>
          Search by first name{" "}
          <input
            type="text"
            name="first_name"
            value={searchInput}
            onChange={e => {
              if (e.target.value === "") {
                setCurrentList(users.slice(0, 5));
              } else {
                const result = users.filter(user =>
                  user.first_name.toLowerCase().includes(e.target.value)
                );
                setFilteredArr(result);
                const end = currentPage * 5;
                const start = end - 5;
                setCurrentList(result.slice(start, end));
                setCurrentPage(1);
              }
              onInputChange(e.target.value);
            }}
          />
        </label>
      </form>
      <Table>
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
              <tr key={list.id}>
                {columns.map((column, index) => {
                  return <td key={index}>{list[column.path]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination
        itemsCount={searchInput === "" ? users.length : filterArr.length}
        pageSize={5}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </Layout>
  );
}

const Table = styled.table`
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

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;

export default App;
