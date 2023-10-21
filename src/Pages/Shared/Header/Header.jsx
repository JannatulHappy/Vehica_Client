import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

function Header() {
  const { user, logOut } = useContext(AuthContext);
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
                className="px-1 mx-3 sm:mx-5 sm:px-4 npm btn"
              >
                Sign up
              </NavLink>
            )}
            {user ? (
              <div className="flex items-center justify-center gap-3">
                <div className="">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                      <div className="indicator">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-9"
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
                            className="btn bg-orange btn-block"
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
                    <div className="w-10 rounded-full">
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
                        <a className="btn">Logout</a>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              // <button onClick={handleSignOut} className="btn">
              //   Sign Out
              // </button>
              <NavLink to="/login" className="px-1 sm:px-4 btn">
                Sign in
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
