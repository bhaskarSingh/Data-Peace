/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import PropTypes from "prop-types";
import StyledPagination, { Container } from "./Pagination.styled";
import _ from "lodash";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle
} from "react-icons/io";

/**
 *
 * @props itemsCount: Total array length of items,
 * pageSize: No.of items to be shown per page ,
 * onPageChange: function for handling on page click change event,
 * currentPage: current active page selected
 */
const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const scroll = useRef();
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  return (
    <Container>
      <button
        type="button"
        onClick={() => {
          scroll.current.scrollLeft += 35;
        }}
      >
        <IoIosArrowDroprightCircle size={40} />
      </button>
      <StyledPagination ref={scroll}>
        {pages.map(page => {
          return (
            <li key={page}>
              <a
                href=""
                style={{
                  backgroundColor: `${
                    page === currentPage ? "#007bff" : "#fff"
                  }`,
                  color: `${page === currentPage ? "#fff" : "#007bff"}`
                }}
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          );
        })}
      </StyledPagination>
      <button
        type="button"
        onClick={() => {
          scroll.current.scrollLeft -= 35;
        }}
      >
        <IoIosArrowDropleftCircle size={40} />
      </button>
    </Container>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
