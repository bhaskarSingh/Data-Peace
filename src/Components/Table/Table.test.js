import React from "react";
import { render } from "@testing-library/react";
import Table from "./Table";

test("show table columns and data on render", () => {
  const list = [
    {
      id: 1,
      first_name: "James",
      last_name: "Butt",
      company_name: "Benton, John B Jr",
      city: "New Orleans",
      state: "LA",
      zip: 70116,
      email: "jbutt@gmail.com",
      web: "http://www.bentonjohnbjr.com",
      age: 70
    },
    {
      id: 2,
      first_name: "Josephine",
      last_name: "Darakjy",
      company_name: "Chanay, Jeffrey A Esq",
      city: "Brighton",
      state: "MI",
      zip: 48116,
      email: "josephine_darakjy@darakjy.org",
      web: "http://www.chanayjeffreyaesq.com",
      age: 48
    },
    {
      id: 3,
      first_name: "Art",
      last_name: "Venere",
      company_name: "Chemel, James L Cpa",
      city: "Bridgeport",
      state: "NJ",
      zip: 80514,
      email: "art@venere.org",
      web: "http://www.chemeljameslcpa.com",
      age: 80
    },
    {
      id: 4,
      first_name: "Lenna",
      last_name: "Paprocki",
      company_name: "Feltz Printing Service",
      city: "Anchorage",
      state: "AK",
      zip: 99501,
      email: "lpaprocki@hotmail.com",
      web: "http://www.feltzprintingservice.com",
      age: 99
    },
    {
      id: 5,
      first_name: "Donette",
      last_name: "Foller",
      company_name: "Printing Dimensions",
      city: "Hamilton",
      state: "OH",
      zip: 45011,
      email: "donette.foller@cox.net",
      web: "http://www.printingdimensions.com",
      age: 45
    }
  ];
  const { container } = render(
    <Table
      currentList={list}
      sortColumn={{ path: "first_name", order: "asc" }}
    />
  );
  expect(container.getElementsByTagName("th")).toHaveLength(9);
  expect(container.getElementsByTagName("th")).toMatchSnapshot();
  expect(container.querySelectorAll("tbody > tr")).toHaveLength(list.length);
});
