import React, { useEffect, useState } from "react";
import { Layout, Header, Pagination, Table, Loader } from "./Components";
import axios from "axios";
function App() {
  const [users, updateUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentList, setCurrentList] = useState([]);
  const [searchInput, onInputChange] = useState("");
  const [filteredLength, setFilteredLength] = useState(1);
  const [filteredList, setFilteredList] = useState([]);
  const onPageChange = page => {
    setCurrentPage(page);
    const end = page * 5;
    const start = end - 5;
    const value =
      searchInput === ""
        ? users.slice(start, end)
        : filteredList.slice(start, end);
    setCurrentList(value);
  };
  const ApiRequest = async () => {
    const result = await axios("https://demo9197058.mockable.io/users");
    updateUsers(result.data);
    setCurrentList(result.data.slice(0, 5));
  };
  useEffect(() => {
    ApiRequest();
  }, []);

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
                setCurrentList(users.slice(start, end));
              } else {
                const result = users.filter(user =>
                  user.first_name.toLowerCase().includes(e.target.value)
                );
                const end = currentPage * 5;
                const start = end - 5;
                setCurrentList(result.slice(start, end));
                setFilteredLength(result.length);
                setFilteredList(result);
                setCurrentPage(1);
              }
              onInputChange(e.target.value);
            }}
          />
        </label>
      </form>
      <Table currentList={currentList} />
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
