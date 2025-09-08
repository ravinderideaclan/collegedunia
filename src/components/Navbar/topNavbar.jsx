import React from "react";
import "remixicon/fonts/remixicon.css"; // ✅ Import Remix Icons
import "./Navbar.css";

export const TopNavbar = () => {
    return (
        <div className=" headar-top custom-bg-gray py-2  md:flex hidden ">
            {/* Top Navigation Links */}

            <div className="container mx-auto  md:flex flex-row justify-between ">
                <div className="sub-nav-top text-xs text-white flex">
                    <a className="px-2 border-r last:border-r-0 border-gray-600 items-center flex hover:text-red-600" href="#">
                        Exams
                    </a>
                    <a className="px-2 border-r last:border-r-0 border-gray-600 items-center flex hover:text-red-600" href="#">
                        Boards
                    </a>
                    <a className="px-2 border-r last:border-r-0 border-gray-600 items-center flex hover:text-red-600" href="#">
                        Scholarships
                    </a>
                    <a className="px-2 border-r last:border-r-0 border-gray-600 items-center flex hover:text-red-600" href="#">
                        Admission 2025
                    </a>
                    <a className="px-2 border-r last:border-r-0 border-gray-600 items-center flex hover:text-red-600" href="#">
                        Counselling
                    </a>
                    <a className="px-2 border-r last:border-r-0 border-gray-600 items-center flex hover:text-red-600" href="#">
                        Internships
                    </a>
                    <a className="px-2 items-center flex hover:text-red-600" href="#">
                        Jobs
                    </a>
                </div>

                {/* Social Icons */}
                <div className="header-social-icon flex gap-3 text-white text-lg">
                    <a className="px-2" href="https://facebook.com" target="_blank" rel="noreferrer">
                        <i className="ri-facebook-fill"></i>
                    </a>
                    <a className="px-2" href="https://twitter.com" target="_blank" rel="noreferrer">
                        <i className="ri-twitter-x-fill"></i>
                    </a>
                    <a className="px-2" href="https://instagram.com" target="_blank" rel="noreferrer">
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a className="px-2" href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <i className="ri-linkedin-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;
