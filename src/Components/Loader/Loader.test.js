import React from "react";
import { render } from "@testing-library/react";
import Loader from "./Loader";

test("on render loads loader img", () => {
  const { container } = render(<Loader />);
  expect(container.getElementsByTagName("img")).toHaveLength(1);
});
