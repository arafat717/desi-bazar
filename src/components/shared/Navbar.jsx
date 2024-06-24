import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="navbar fixed z-10 top-0 bg-black opacity-40 max-w-[1400px] mx-auto text-white font-bold px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white font-bold"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <a>Catagory</a>
              <ul className="p-2 text-white bg-black">
                <li>
                  <Link to="/vegitables">Vegitables</Link>
                </li>
                <li>
                  <Link to="/fruits">Fruits</Link>
                </li>
                <li>
                  <Link to="/dairy">Dairy</Link>
                </li>
                <li>
                  <Link to="/Meat">Meat and Fish</Link>
                </li>
              </ul>
            </li> */}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link>
                <p className="flex gap-2 items-center">
                  <FaShoppingCart className="text-2xl text-white"></FaShoppingCart>
                  <div className="badge badge-secondary">+0</div>
                </p>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          Daily <span className="text-green-600">Grocery</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <details>
              <summary>Catagory</summary>
              <ul className="w-[300px]  text-white bg-black">
                <div className="flex gap-4">
                  <div>
                    <li>
                      <Link to="/vegitables">Vegitables</Link>
                    </li>
                    <li>
                      <Link to="/fruits">All Fruits</Link>
                    </li>
                  </div>
                  <div>
                    <li>
                      <Link to="/dairy">Dairy and Eggs</Link>
                    </li>
                    <li>
                      <Link to="/Meat">Meat and Fish</Link>
                    </li>
                  </div>
                </div>
              </ul>
            </details>
          </li> */}
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/">
              <p className="flex gap-2 items-center">
                <FaShoppingCart className="text-2xl text-white"></FaShoppingCart>
                <div className="badge badge-secondary">+0</div>
              </p>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <img
            src={
              user?.photoURL ||
              "https://img.freepik.com/premium-vector/person-icon-vector-design-template-user-sign-person-symbol-human-avatar-flat-style_23648-1744.jpg?w=740"
            }
            alt="user image"
            className={`w-10 rounded-full mr-4 bg-white`}
          />
        )}
        {user ? (
          <Link onClick={handleLogout} className="btn btn-outline btn-error">
            LogOut
          </Link>
        ) : (
          <Link to="/login" className="btn btn-outline btn-success">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
