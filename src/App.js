import React, { useEffect, useState } from "react";
import { Layout, Header, Pagination, Table, Loader } from "./Components";
import axios from "axios";
import _ from "lodash";
function App() {
  const [users, updateUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentList, setCurrentList] = useState([]);
  const [searchInput, onInputChange] = useState("");
  const [filteredLength, setFilteredLength] = useState(1);
  const [filteredList, setFilteredList] = useState([]);
  const [sortColumn, setSortColumn] = useState({
    order: "asc",
    path: "first_name"
  });
  const onPageChange = page => {
    setCurrentPage(page);
    const end = page * 5;
    const start = end - 5;
    const value =
      searchInput === ""
        ? users.slice(start, end)
        : filteredList.slice(start, end);
    const sortedList = _.orderBy(value, [sortColumn.path], [sortColumn.order]);
    setCurrentList(sortedList);
  };
  const ApiRequest = async () => {
    const result = await axios("https://demo9197058.mockable.io/users");
    updateUsers(result.data);
    const defaulSortedList = _.orderBy(
      result.data.slice(0, 5),
      [sortColumn.path],
      [sortColumn.order]
    );
    setCurrentList(defaulSortedList);
  };
  useEffect(() => {
    ApiRequest();
  }, []);

  const handleSort = path => {
    const order = sortColumn.order === "asc" ? "desc" : "asc";
    const sortedList = _.orderBy(currentList, [path], [order]);
    setCurrentList(sortedList);
    setSortColumn({ path, order });
  };

  if (users.length === 0) {
    return <Loader />;
  }

  return (
    <Layout>
      <Header>Data peace</Header>
      <form style={{ margin: 10 }}>
        <label style={{ fontSize: "1.4rem" }}>
          Search By First Name{" "}
          <input
            style={{ fontSize: "1.4rem" }}
            type="text"
            name="first_name"
            value={searchInput}
            placeholder="Search by first name"
            onChange={e => {
              if (e.target.value === "") {
                const end = currentPage * 5;
                const start = end - 5;
                const sortedList = _.orderBy(
                  users.slice(start, end),
                  [sortColumn.path],
                  [sortColumn.order]
                );
                setCurrentList(sortedList);
              } else {
                const result = users.filter(user =>
                  user.first_name.toLowerCase().includes(e.target.value)
                );
                const end = currentPage * 5;
                const start = end - 5;
                const sortedList = _.orderBy(
                  result.slice(start, end),
                  [sortColumn.path],
                  [sortColumn.order]
                );
                setCurrentList(sortedList);
                setFilteredLength(result.length);
                setFilteredList(result);
                setCurrentPage(1);
              }
              onInputChange(e.target.value);
            }}
          />
        </label>
      </form>
      <Table
        currentList={currentList}
        onSort={handleSort}
        sortColumn={sortColumn}
      />
      <Pagination
        itemsCount={searchInput === "" ? users.length : filteredLength}
        pageSize={5}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </Layout>
  );
}

export default App;
