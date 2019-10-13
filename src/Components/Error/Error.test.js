import React from "react";
import { render } from "@testing-library/react";
import Error from "./Error";

test("render child node", () => {
  const ErrorText = "Error loading data";
  const { getByText } = render(<Error>{ErrorText}</Error>);
  expect(getByText(ErrorText).textContent).toBe(ErrorText);
});
