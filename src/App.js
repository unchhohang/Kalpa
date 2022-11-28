import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import "./css/NavSideBar.css";
import Billing from "./component/Billing";
import Products from "./component/Products";
import Stock from "./component/Stock";
import Report from "./component/Report";
import NavSideBar from "./component/NavSideBar";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"; // Imported for date picker accord to docs
import { LocalizationProvider } from "@mui/x-date-pickers";

function App() {
  function Layout() {
    return (
      <>
        <NavSideBar />
        <Outlet />
      </>
    );
  }

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Billing />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/stock",
          element: <Stock />,
        },
        {
          path: "/report",
          element: <Report />,
        },
      ],
    },
  ]);
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </LocalizationProvider>
  );
}

export default App;
