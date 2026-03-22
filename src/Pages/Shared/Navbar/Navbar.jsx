import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import useAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logOut } = useAuth();
  console.log(user?.email);

  // toggle dropdown on click
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
        Swal.fire({
          title: "Logged out successfully!",
          text: "You have logout successfully",
          icon: "success",
          confirmButtonText: "OK",
          position: "center",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // close when click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className=" py-2.5 sticky top-0 z-50 bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-7xl px-4 mx-auto">
        <NavLink to="/" className="flex items-center">
          <img src="/src/assets/logo.png" className="w-8" alt="" />
          <h1 className="text-2xl font-bold mt-4 -ml-4">Profast</h1>
        </NavLink>

        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>

          <div>
            {user?.email ? (
              // 👉 if user logged in
              <button
                onClick={handleLogout}
                className="text-white bg-red-600 py-1.5 px-4 rounded font-bold cursor-pointer"
              >
                Logout
              </button>
            ) : (
              // 👉 if user isnot logged in
              <NavLink
                to="/login"
                className="text-white bg-purple-700 py-1.5 pl-3 pr-4 rounded font-bold cursor-pointer"
              >
                Login
              </NavLink>
            )}
          </div>
          <NavLink
            to="/rider"
            className="bg-[#CAEB66] py-1.5 pl-3 ml-2 pr-4 rounded-sm font-bold"
          >
            Be a rider
          </NavLink>

          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>

            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`${open ? "block" : "hidden"} items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-1.5 pl-3 pr-4 text-black rounded ${
                    isActive ? "bg-purple-700 text-white" : "hover:bg-lime-300"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/addPercel"
                className={({ isActive }) =>
                  `block py-1.5 pl-3 pr-4 text-black rounded ${
                    isActive ? "bg-purple-700 text-white" : "hover:bg-lime-300"
                  }`
                }
              >
                Add Percel
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                to="/coverage"
                className={({ isActive }) =>
                  `block py-1.5 pl-3 pr-4 text-black rounded ${
                    isActive ? "bg-purple-700 text-white" : ""
                  }`
                }
              >
                Coverage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-1.5 pl-3 pr-4 text-black rounded ${
                    isActive ? "bg-purple-700 text-white" : ""
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `block py-1.5 pl-3 pr-4 text-black rounded ${
                    isActive ? "bg-purple-700 text-white" : ""
                  }`
                }
              >
                Pricing
              </NavLink>
            </li> */}

            <li>
              <NavLink
                to="/rider"
                className={({ isActive }) =>
                  `block py-1.5 pl-3 pr-4 text-black rounded ${
                    isActive ? "bg-purple-700 text-white" : "hover:bg-lime-300"
                  }`
                }
              >
                Be a Rider
              </NavLink>
            </li>

            <div ref={dropdownRef} className="relative">
              {/* Button */}
              <button
                onClick={handleToggle}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-lime-300"
              >
                Pages
              </button>

              {/* Dropdown */}
              {open && (
                <div className="absolute mt-2 ml-5 duration-150 bg-white border rounded shadow w-40">
                  <li>
                    <NavLink
                      to="/trackConsignment"
                      className={({ isActive }) =>
                        `block py-1.5 pl-3 pr-4 text-black rounded ${
                          isActive
                            ? "bg-purple-700 text-white"
                            : "hover:bg-lime-300"
                        }`
                      }
                    >
                      Track Order
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/coverage"
                      className={({ isActive }) =>
                        `block py-1.5 pl-3 pr-4 text-black rounded ${
                          isActive
                            ? "bg-purple-700 text-white"
                            : "hover:bg-lime-300"
                        }`
                      }
                    >
                      Coverage
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `block py-1.5 pl-3 pr-4 text-black rounded ${
                          isActive
                            ? "bg-purple-700 text-white"
                            : "hover:bg-lime-300"
                        }`
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pricing"
                      className={({ isActive }) =>
                        `block py-1.5 pl-3 pr-4 text-black rounded ${
                          isActive
                            ? "bg-purple-700 text-white"
                            : "hover:bg-lime-300"
                        }`
                      }
                    >
                      Pricing
                    </NavLink>
                  </li>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
