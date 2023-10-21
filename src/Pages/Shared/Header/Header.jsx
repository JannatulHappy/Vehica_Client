import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

function Header() {
  const { user, logOut } = useContext(AuthContext);
  // Check if there's a theme in local storage, default to "light" if not
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "black");

  // Function to toggle the theme
  const handleToggle = () => {
    const newTheme = theme === "light" ? "black" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // Set the theme attribute on the HTML tag
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };
  {
    /* <img src="https://i.ibb.co/bzxRP1P/vehica-logo-white-retina.png" alt="" /> */
  }
  const ul = (
    <>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
      >
        <li className="block hover:text-orange ">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "flex items-center hover:text-orange text-orange"
                : isActive
                ? "text-orange   flex items-center border-b-2  rounded-none border-orange hover:text-orange"
                : "hover:text-orange text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="block hover:text-orange ">
          <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
              isPending
                ? "flex items-center hover:text-orange text-orange"
                : isActive
                ? "text-orange   flex items-center border-b-2  rounded-none border-orange hover:text-orange"
                : "hover:text-orange "
            }
          >
            Add Product
          </NavLink>
        </li>
        <li className="block hover:text-orange ">
          <NavLink
            to="/aboutUs"
            className={({ isActive, isPending }) =>
              isPending
                ? "flex items-center hover:text-orange text-orange"
                : isActive
                ? "text-orange   flex items-center border-b-2  rounded-none border-orange hover:text-orange"
                : "hover:text-orange "
            }
          >
            About Us
          </NavLink>
        </li>{" "}
        <li className="block hover:text-orange ">
          <NavLink
            to="/team"
            className={({ isActive, isPending }) =>
              isPending
                ? "flex items-center hover:text-orange text-orange"
                : isActive
                ? "text-orange   flex items-center border-b-2  rounded-none border-orange hover:text-orange"
                : "hover:text-orange "
            }
          >
            Team
          </NavLink>
        </li>
        <li className="block hover:text-orange ">
          <NavLink
            to="/faq"
            className={({ isActive, isPending }) =>
              isPending
                ? "flex items-center hover:text-orange text-orange"
                : isActive
                ? "text-orange   flex items-center border-b-2  rounded-none border-orange hover:text-orange"
                : "hover:text-orange "
            }
          >
            FAQ
          </NavLink>
        </li>
      </ul>
    </>
  );
  const ul2 = (
    <>
      <ul className="px-1 text-lg font-normal menu menu-horizontal">
        <li className="block hover:text-orange ">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "flex items-center hover:text-orange text-orange"
                : isActive
                ? "text-orange   flex items-center border-b-2  rounded-none border-orange hover:text-orange"
                : "hover:text-orange "
            }
          >
            Home
          </NavLink>
        </li>
        <li className="block hover:text-orange ">
          <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
              isPending
                ? "flex items-center hover:text-orange text-orange"
                : isActive
                ? "text-orange   flex items-center border-b-2  rounded-none border-orange hover:text-orange"
                : "hover:text-orange "
            }
          >
            Add Product
          </NavLink>
        </li>
        <li className="block hover:text-orange ">
          <NavLink
            to="/aboutUs"
            className={({ isActive, isPending }) =>
              isPending
                ? "flex items-center hover:text-orange text-orange"
                : isActive
                ? "text-orange   flex items-center border-b-2  rounded-none border-orange hover:text-orange"
                : "hover:text-orange "
            }
          >
            About Us
          </NavLink>
        </li>{" "}
        <li className="block hover:text-orange ">
          <NavLink
            to="/team"
            className={({ isActive, isPending }) =>
              isPending
                ? "flex items-center hover:text-orange text-orange"
                : isActive
                ? "text-orange   flex items-center border-b-2  rounded-none border-orange hover:text-orange"
                : "hover:text-orange "
            }
          >
            Team
          </NavLink>
        </li>
        <li className="block hover:text-orange ">
          <NavLink
            to="/faq"
            className={({ isActive, isPending }) =>
              isPending
                ? "flex items-center hover:text-orange text-orange"
                : isActive
                ? "text-orange   flex items-center border-b-2  rounded-none border-orange hover:text-orange"
                : "hover:text-orange "
            }
          >
            FAQ
          </NavLink>
        </li>
      </ul>
    </>
  );
  return (
    <div className="bg-black ">
      <div className="mx-auto navbar max-w-[1440px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
            </label>
            {ul}
          </div>
          <div className="w-2/5 py-7">
            <img
              src="https://i.ibb.co/bzxRP1P/vehica-logo-white-retina.png"
              alt=""
            />
          </div>
        </div>
        <div className="hidden navbar-center lg:flex">{ul2}</div>

        <div className="navbar-end">
          <div className="flex ">
            {" "}
            {user ? (
              ""
            ) : (
              <NavLink
                to="/register"
                className="px-1 py-3 mx-3 text-sm font-medium text-black uppercase bg-white rounded-lg sm:px-4"
              >
                Sign up
              </NavLink>
            )}
            {user ? (
              <div className="flex items-center justify-center gap-2">
                <div className="">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                      <div className="indicator">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                    </label>
                    <div
                      tabIndex={0}
                      className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-black shadow"
                    >
                      <div className="card-body">
                        <div className="card-actions">
                          <Link
                            to={`/api/products/myCart
                            `}
                            className="py-4 mx-5 text-sm font-semibold text-white uppercase rounded-lg px-7 bg-orange btn-block"
                          >
                            View cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-8 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box "
                  >
                    <li>
                      <a>{user?.displayName}</a>
                    </li>
                    <li>
                      <a>{user?.email}</a>
                    </li>
                    <li>
                      <a>{user?.DisplayName}</a>
                    </li>
                    <li>
                      {" "}
                      <button onClick={handleSignOut}>
                        <a className="btn bg-orange">Logout</a>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              // <button onClick={handleSignOut} className="btn">
              //   Sign Out
              // </button>
              <NavLink
                to="/login"
                className="px-1 py-3 mx-3 text-sm font-medium text-black uppercase bg-white rounded-lg sm:px-4"
              >
                Sign in
              </NavLink>
            )}
          </div>
          <div className="flex-none">
            {/* Toggle button here */}
            <button className="btn btn-square btn-ghost">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  onChange={handleToggle}
                  // show toggle image based on localstorage theme
                  checked={theme === "light" ? false : true}
                />

                {/* sun icon */}
                <svg
                  className="w-8 h-8 fill-current swap-on"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="w-8 fill-current h-7 swap-off"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
