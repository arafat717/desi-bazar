import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Mainlayout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login";
import Resistration from "../pages/Resistration";
import Dashboard from "../components/DashboardLayout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ProductManagement from "../components/DashboardLayout/ProductManagement";
import UserManagement from "../components/DashboardLayout/UserManagement";
import AllFruits from "../pages/AllFruits";
import AllVegitables from "../pages/AllVegitables";
import AllDairy from "../pages/AllDairy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/fruits",
        element: <AllFruits></AllFruits>,
      },
      {
        path: "/vegitables",
        element: <AllVegitables></AllVegitables>,
      },
      {
        path: "/dairy",
        element: <AllDairy></AllDairy>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/resister",
        element: <Resistration></Resistration>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/product-manage",
        element: <ProductManagement></ProductManagement>,
      },
      {
        path: "/dashboard/user-manage",
        element: <UserManagement></UserManagement>,
      },
    ],
  },
]);

export default router;
