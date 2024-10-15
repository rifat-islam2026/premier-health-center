import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProvider";

function Header() {
    const { user ,logOut} = useContext(AuthContext);
    const handelSignOut = () => {
        const success = () => toast.success("Sign out successFully!");
        logOut()
            .then(() => {
                success();
            }).catch((error) => {
                // An error happened.
            });
    }
    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {user &&
            <li><NavLink to="/userInfo">User Info</NavLink></li>
    }
    </>
  return (
      <div className="navbar bg-primary text-primary-content">
          <div className="navbar-start">
              <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h8m-8 6h16" />
                      </svg>
                  </div>
                  <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold">
                      {navLinks}
                  </ul>
              </div>
              <Link to="/" className="text-sm md:text-2xl font-bold">Premier Health Center</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 font-semibold">
                  {navLinks}
              </ul>
          </div>
          <div className="navbar-end">
              { user ? 
                  <button onClick={handelSignOut} className="btn">Sign Out</button>
                  :
                  <Link to="/login" className="btn">Login</Link>
              }
          </div>
      </div>
  )
}

export default Header
