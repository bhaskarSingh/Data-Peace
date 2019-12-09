import React, { useEffect, useState } from "react";
import {
  Layout,
  Header,
  Pagination,
  Table,
  Loader,
  Error,
  Search
} from "./Components";
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
  const [error, setError] = useState("");
  const ApiRequest = async () => {
    try {
      const result = await axios(process.env.REACT_APP_API_URL);
      updateUsers(result.data);
      const defaulSortedList = _.orderBy(
        result.data.slice(0, 5),
        [sortColumn.path],
        [sortColumn.order]
      );
      setCurrentList(defaulSortedList);
    } catch (err) {
      console.log(err);
      setError(`Error loading user data.`);
    }
  };
  useEffect(() => {
    ApiRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleSort = path => {
    const order = sortColumn.order === "asc" ? "desc" : "asc";
    const sortedList = _.orderBy(currentList, [path], [order]);
    setCurrentList(sortedList);
    setSortColumn({ path, order });
  };

  if (!error && users.length === 0) {
    return <Loader />;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <Layout>
      <Header>Data peace</Header>
      <Search
        searchInput={searchInput}
        currentPage={currentPage}
        sortColumn={sortColumn}
        users={users}
        setCurrentList={setCurrentList}
        setFilteredLength={setFilteredLength}
        setCurrentPage={setCurrentPage}
        setFilteredList={setFilteredList}
        onInputChange={onInputChange}
      />
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
