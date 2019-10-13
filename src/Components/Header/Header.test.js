import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";
test("render the children node given", () => {
  const HeaderText = "Yo";
  const { getByText } = render(<Header>{HeaderText}</Header>);
  expect(getByText(HeaderText).textContent).toBe(HeaderText);
});
//
test("show navigate back button when navigateBack is set to true", () => {
  const HeaderText = "Yo";
  const { getByTestId } = render(
    <Header navigateBack={true}>{HeaderText}</Header>
  );

  expect(getByTestId("navigate-back")).not.toBeNull();
});
