import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className="navbar sticky top-0 z-10 bg-gray-100 border border-gray-300">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          Daily <span className="text-green-600">Grocery</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
            alt=""
            className={`w-12 rounded-full mr-4`}
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
