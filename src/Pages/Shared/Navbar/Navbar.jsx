import React, { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (

        <nav className=" py-2.5 sticky top-0 z-50 bg-white">
            <div className="flex flex-wrap items-center justify-between max-w-7xl px-4 mx-auto">

                <NavLink to="/" className="flex items-center">
                    <img src="/src/assets/logo.png" className='w-8' alt="" />
                    <h1 className='text-2xl font-bold mt-4 -ml-4'>Profast</h1> 
                </NavLink>

                <div className="flex items-center lg:order-2">

                    <div className="hidden mt-2 mr-4 sm:inline-block">
                        <span></span>
                    </div>

                    <NavLink to="/login"
                        className="text-white bg-purple-700 py-1.5 pl-3 pr-4 rounded font-bold">
                        Login
                    </NavLink>
                    <NavLink to="/rider"
                        className="bg-[#CAEB66] py-1.5 pl-3 ml-2 pr-4 rounded-xl font-bold">
                        Be a rider
                    </NavLink>
                    <GoArrowUpRight className='border w-8 h-8 p-1 rounded-full' />

                    <button
                        onClick={() => setOpen(!open)}
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >

                        <span className="sr-only">Open main menu</span>

                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd">
                            </path>
                        </svg>

                    </button>

                </div>

                <div className={`${open ? "block" : "hidden"} items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}>

                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-1.5 pl-3 pr-4 text-black rounded ${isActive ? "bg-purple-700 text-white" : ""
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    `block py-1.5 pl-3 pr-4 text-black rounded ${isActive ? "bg-purple-700 text-white" : ""
                                    }`
                                }
                            >
                                Services
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/coverage"
                                className={({ isActive }) =>
                                    `block py-1.5 pl-3 pr-4 text-black rounded ${isActive ? "bg-purple-700 text-white" : ""
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
                                    `block py-1.5 pl-3 pr-4 text-black rounded ${isActive ? "bg-purple-700 text-white" : ""
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
                                    `block py-1.5 pl-3 pr-4 text-black rounded ${isActive ? "bg-purple-700 text-white" : ""
                                    }`
                                }
                            >
                                Pricing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/rider"
                                className={({ isActive }) =>
                                    `block py-1.5 pl-3 pr-4 text-black rounded ${isActive ? "bg-purple-700 text-white" : ""
                                    }`
                                }
                            >
                                Be a Rider
                            </NavLink>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>

    );
};

export default Navbar;