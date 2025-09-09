import React, { useState } from "react";
import "./Navbar.css";
import TopNavbar from "./topNavbar.jsx";
import "remixicon/fonts/remixicon.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <TopNavbar />
      <div className="main-navbar bg-white text-white shadow-sm relative z-40 sticky top-0 ">
        <div className="container mx-auto md:px-0 px-3">
          <nav className="flex items-center justify-between py-3">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <img src="../../src/assets/images/header-canam-logo.svg" className="h-10" alt="Canam Logo" />
            </a>
            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-6 font-medium">
              <li> <Link to="/" className="text-gray-900 hover:text-red-600 transition text-sm">
                Home
              </Link></li>
              <li>  <Link to="/explorecolleges" className="text-gray-900 hover:text-red-600 transition text-sm">
                Explore Colleges
              </Link></li>
              <li><a href="#" className="text-gray-900 hover:text-red-600 transition text-sm">Management</a></li>
              <li><a href="#" className="text-gray-900 hover:text-red-600 transition text-sm">Engineering</a></li>
              <li><a href="#" className="text-gray-900 hover:text-red-600 transition text-sm">Science</a></li>
              <li><a href="#" className="text-gray-900 hover:text-red-600 transition text-sm">Study Abroad</a></li>
            </ul>
            {/* Right Icons */}
            <div className="flex items-center space-x-4 text-gray-900">
              {/* Search Icon */}
              <button
                className="text-xl hover:text-blue-400"
                onClick={() => setSearchOpen(true)} // ✅ open modal
              >
                <i className="ri-search-line"></i>
              </button>

              {/* User Dropdown */}
              <div className="relative group">
                <button className=" text-white text-xl hover:text-white bg-red-600 hover:bg-gray-900 rounded-full w-10 h-10 ">
                  <i className="ri-user-3-line"></i>
                </button>
                <div className="absolute right-0 shadow-lg border border-gray-200  w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50 opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
                  <div className="p-4 border-b border-gray-200">
                    <p className="font-medium">Welcome!</p>
                    <p className="text-sm text-gray-500">Access your account</p>
                  </div>
                  <div className="p-4 flex flex-col space-y-2">
                    <a href="#" className="w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                      Login
                    </a>
                    <a href="#" className="w-full text-center bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-gray-800 text-white py-3 px-4 space-y-2 absolute top-full left-0 w-full z-30">
              <a href="#" className="block hover:text-blue-400">Home</a>
              <a href="#" className="block hover:text-blue-400">Explore Courses</a>
              <a href="#" className="block hover:text-blue-400">Management</a>
              <a href="#" className="block hover:text-blue-400">Engineering</a>
              <a href="#" className="block hover:text-blue-400">Science</a>
              <a href="#" className="block hover:text-blue-400">Study Abroad</a>
            </div>
          )}
        </div>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-start bg-black/70">
          <div className="relative w-full h-full bg-white dark:bg-gray-900">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                College Search
              </h3>
              <button
                onClick={() => setSearchOpen(false)} // ✅ close modal
                className="text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-lg text-sm w-8 h-8 flex items-center justify-center"
              >
                <i className="ri-close-line text-2xl"></i>
                <span className="sr-only">Close</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="p-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for colleges..."
                  className="w-full pl-10 pr-4 py-3 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <i className="ri-search-line absolute left-3 top-3.5 text-gray-500 dark:text-gray-400 text-lg"></i>
              </div>
            </div>

            <div className="px-6 py-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Start typing to search colleges and universities...
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
