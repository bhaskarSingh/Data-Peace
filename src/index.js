import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserDetails from "./UserDetails";
import { Router } from "@reach/router";

ReactDOM.render(
  <Router>
    <App path="/" />
    <UserDetails path="/user/:id" />
  </Router>,
  document.getElementById("root")
);
