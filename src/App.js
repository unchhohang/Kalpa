import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import "./css/NavSideBar.css";
import Billing from "./components/Billing";
import NavSideBar from "./components/NavSideBar";
import Products from "./components/Products";
import Report from "./components/Report";
import Stock from "./components/Stock";

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
