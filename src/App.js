import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import "./css/NavSideBar.css";
import AppLayout from "./component/AppLayout";
import Billing from "./component/Billing";
import NavSideBar from "./component/NavSideBar";
import Products from "./component/Products";
import Report from "./component/Report";
import Stock from "./component/Stock";

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
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
