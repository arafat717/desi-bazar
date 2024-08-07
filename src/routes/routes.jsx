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
import EditProfile from "../components/DashboardLayout/EditProduct/EditProfile";
import Shop from "../pages/Shop";
import MyCart from "../components/DashboardLayout/userDashboard/MyCart";
import AllUsers from "../components/DashboardLayout/AllUsers";
import AdminRoutes from "./AdminRoutes";
import Payment from "../components/DashboardLayout/Payment/Payment";
import UserHome from "../components/DashboardLayout/UserHome/UserHome";
import AdminHome from "../components/DashboardLayout/AdminHome/AdminHome";
import BlogPage from "../components/BlogPage/BlogPage";

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
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/blogs",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "product/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(`https://grocary-server.vercel.app/product/${params.id}`),
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
        path: "/dashboard/userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/dashboard/fruits-manage",
        element: (
          <AdminRoutes>
            <FrutiesManage></FrutiesManage>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/my-cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/product-edit/:id",
        element: (
          <AdminRoutes>
            <DairyEdit></DairyEdit>
          </AdminRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://grocary-server.vercel.app/product/${params.id}`),
      },
      {
        path: "/dashboard/vegitables-manage",
        element: (
          <AdminRoutes>
            <VegitablesManage></VegitablesManage>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/user-edit/:id",
        element: <EditProfile></EditProfile>,
        loader: ({ params }) =>
          fetch(`https://grocary-server.vercel.app/user/get/${params.id}`),
      },
      {
        path: "/dashboard/dairy-manage",
        element: (
          <AdminRoutes>
            <DairyManage></DairyManage>
          </AdminRoutes>
        ),
      },
      // {
      //   path: "/dashboard/product-edit/:id",
      //   element: <DairyEdit></DairyEdit>,
      //   loader: ({ params }) =>
      //     fetch(`https://grocary-server.vercel.app/product/${params.id}`),
      // },
      {
        path: "/dashboard/meat-manage",
        element: <MeatManage></MeatManage>,
      },
      {
        path: "/dashboard/add-dairy",
        element: (
          <AdminRoutes>
            <AddDairy></AddDairy>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/user-manage",
        element: <UserManagement></UserManagement>,
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;
