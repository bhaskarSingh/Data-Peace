import React from "react";
import { render } from "@testing-library/react";
import Layout from "./Layout";

test("render child node", () => {
  const childComponent = <main>yo</main>;
  const { getByText } = render(<Layout>{childComponent}</Layout>);
  expect(getByText("yo").textContent).toBe("yo");
});
