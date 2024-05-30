import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Mainlayout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login";
import Resistration from "../pages/Resistration";
import Dashboard from "../components/DashboardLayout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import UserManagement from "../components/DashboardLayout/UserManagement";
import AllFruits from "../pages/AllFruits";
import AllVegitables from "../pages/AllVegitables";
import AllDairy from "../pages/AllDairy";
import AllMeatandSeaFood from "../pages/AllMeatandSeaFood";
import DetailsPage from "../pages/DetailsPage";
import FrutiesManage from "../components/DashboardLayout/FrutiesManage";
import VegitablesManage from "../components/DashboardLayout/VegitablesManage";
import DairyManage from "../components/DashboardLayout/DairyManage";
import MeatManage from "../components/DashboardLayout/MeatManage";
import AddDairy from "../components/DashboardLayout/AddProduct/AddDairy";
import DairyEdit from "../components/DashboardLayout/EditProduct/DairyEdit";

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
        path: "/meat",
        element: <AllMeatandSeaFood></AllMeatandSeaFood>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "product/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "product/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },

      {
        path: "product/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "product/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
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
        path: "/dashboard",
        element: <FrutiesManage></FrutiesManage>,
      },
      {
        path: "/dashboard/fruits-manage",
        element: <FrutiesManage></FrutiesManage>,
      },
      {
        path: "/dashboard/product-edit/:id",
        element: <DairyEdit></DairyEdit>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/dashboard/vegitables-manage",
        element: <VegitablesManage></VegitablesManage>,
      },
      {
        path: "/dashboard/product-edit/:id",
        element: <DairyEdit></DairyEdit>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/dashboard/dairy-manage",
        element: <DairyManage></DairyManage>,
      },
      {
        path: "/dashboard/product-edit/:id",
        element: <DairyEdit></DairyEdit>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/dashboard/meat-manage",
        element: <MeatManage></MeatManage>,
      },
      {
        path: "/dashboard/product-edit/:id",
        element: <DairyEdit></DairyEdit>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/product/${params.id}`),
      },
      {
        path: "/dashboard/add-dairy",
        element: <AddDairy></AddDairy>,
      },
      {
        path: "/dashboard/user-manage",
        element: <UserManagement></UserManagement>,
      },
    ],
  },
]);

export default router;
