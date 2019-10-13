import React from "react";
import { render } from "@testing-library/react";
import Pagination from "./Pagination";

test("show pagination on render", () => {
  const onPageChange = jest.fn();
  const { container } = render(
    <Pagination
      itemsCount={20}
      pageSize={5}
      currentPage={1}
      onPageChange={onPageChange}
    />
  );
  expect(container.querySelectorAll("li")).toHaveLength(20 / 5);
});
