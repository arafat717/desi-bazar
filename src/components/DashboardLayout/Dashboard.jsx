import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "./useAdmin";
import Loading from "../Loading";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin, isLoading] = useAdmin();

  if (isLoading) return <Loading></Loading>;

  // const isAdmin = false;
  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>Online Bazar - Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center p-10">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-full bg-gray-200 text-base-content">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <li>
                <Link to="/dashboard/adminhome">Admin-Home</Link>
              </li>
              <p className="mt-6 font-bold">Manage All Products</p>

              <li>
                <Link to="/dashboard/fruits-manage">Fruits-Manage</Link>
              </li>
              <li>
                <Link to="/dashboard/dairy-manage">Dairy-Manage</Link>
              </li>
              <li>
                <Link to="/dashboard/vegitables-manage">Vegitables-Manage</Link>
              </li>
              <li>
                <Link to="/dashboard/meat-manage">Meat-Manage</Link>
              </li>
              <p className="mt-6 font-bold">Add Products</p>

              <li>
                <Link to="/dashboard/add-dairy">Add-Product</Link>
              </li>
              <p className="mt-6 font-bold">User Management </p>
              <li>
                <Link to="/dashboard/all-users">All Users</Link>
              </li>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold">User Dashboard</h1>
              <p className="mt-6 font-bold">User Management </p>
              <li>
                <Link to="/dashboard/my-cart">
                  My Cart
                  <div className="badge badge-secondary">
                    +{cart?.length || 0}
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/user-manage">Update Profile</Link>
              </li>
            </>
          )}
          <hr className="border border-green-300 my-6" />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
