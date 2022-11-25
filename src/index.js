import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Billing from "./component/Billing";
import NavSideBar from "./component/NavSideBar";
import Products from "./component/Products";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    {/* <Container> */}
      <App />
    {/* </Container> */}
  </React.StrictMode>
);
