import React from "react";
import StyledForm from "./Search.styled";
import _ from "lodash";

const Search = ({
  searchInput,
  currentPage,
  sortColumn,
  users,
  setCurrentList,
  setFilteredLength,
  setCurrentPage,
  setFilteredList,
  onInputChange
}) => {
  return (
    <StyledForm>
      <label>
        Search By First Name{" "}
        <input
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
    </StyledForm>
  );
};

export default Search;
