import React, { useState, useRef } from "react";
import "./Navbar.css";

const collegeSuggestions = [
  "Delhi University",
  "IIT Bombay",
  "IIT Delhi",
  "BITS Pilani",
  "JNU",
  "IIM Ahmedabad",
  "VIT Vellore",
  "SRM University",
  "Amity University",
  "Christ University",
];

// Course Data for Mega Menu
const courseData = {
  BCA: {
    about: "Bachelor of Computer Applications (BCA) is a 3-year undergraduate program focusing on computer science and IT fundamentals.",
    links: [
      { label: "Top Colleges", href: "/colleges/bca" },
      { label: "Entrance Exams", href: "/exams/bca" },
      { label: "Course Details", href: "/courses/bca" },
    ],
  },
  MCA: {
    about: "Master of Computer Applications (MCA) is a 2-year postgraduate program for advanced computer science and applications.",
    links: [
      { label: "Top Colleges", href: "/colleges/mca" },
      { label: "Entrance Exams", href: "/exams/mca" },
      { label: "Course Details", href: "/courses/mca" },
    ],
  },
  BTech: {
    about: "Bachelor of Technology (B.Tech) is a 4-year undergraduate degree in engineering with multiple specializations.",
    links: [
      { label: "Top Colleges", href: "/colleges/btech" },
      { label: "Entrance Exams", href: "/exams/btech" },
      { label: "Course Details", href: "/courses/btech" },
    ],
  },
  MTech: {
    about: "Master of Technology (M.Tech) is a 2-year postgraduate program for advanced engineering specializations.",
    links: [
      { label: "Top Colleges", href: "/colleges/mtech" },
      { label: "Entrance Exams", href: "/exams/mtech" },
      { label: "Course Details", href: "/courses/mtech" },
    ],
  },
};

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [activeCourse, setActiveCourse] = useState("BCA");
  const searchRef = useRef(null);

  // Filter suggestions based on input
  const filteredSuggestions = collegeSuggestions.filter((college) =>
    college.toLowerCase().includes(search.toLowerCase())
  );

  // Close search popup if clicked outside
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchFocus(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-white via-blue-50 to-blue-100 border-b border-gray-200 relative shadow-lg ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Left: Logo */}
        <a href="/" className="flex items-center space-x-3 font-extrabold text-2xl sm:text-3xl tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">Uni</span>
          <span className="text-red-600">Search</span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
                     hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        {/* Center: Search bar */}
        <div className="hidden md:flex flex-1 justify-center px-4" ref={searchRef}>
          <div className="flex w-full max-w-md relative">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setSearchFocus(true)}
                placeholder="Search colleges..."
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-blue-300 rounded-l-lg 
                           bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-500 shadow"
              />
              {/* Search Suggestions Popup */}
              {searchFocus && (
                <div className="absolute z-50 left-0 right-0 mt-1 bg-white border border-blue-200 rounded-lg shadow-lg max-h-60 overflow-auto animate-fadeIn">
                  {filteredSuggestions.length > 0 ? (
                    filteredSuggestions.map((college, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                        onMouseDown={() => {
                          setSearch(college);
                          setSearchFocus(false);
                        }}
                      >
                        {college}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-400">No results found</div>
                  )}
                </div>
              )}
            </div>
            <button className="px-4 bg-gradient-to-r from-blue-600 to-red-500 text-white rounded-r-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 font-semibold transition">
              Search
            </button>
          </div>
        </div>

        {/* Right: Nav + Auth */}
        <div id="mega-menu-full" className={`${menuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:items-center md:space-x-6`}>
          <ul className="flex flex-col md:flex-row mt-4 md:mt-0 md:space-x-3 text-gray-900 font-medium">
            <li><a href="#" className="block py-2 px-3 hover:text-blue-600 transition">Home</a></li>
            <li><a href="#" className="block py-2 px-3 hover:text-blue-600 transition">About Us</a></li>
            <li><a href="#" className="block py-2 px-3 hover:text-blue-600 transition">Find Courses</a></li>

            {/* Colleges Dropdown */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen((open) => !open)}
                className="flex items-center justify-between w-full py-3 px-3 font-medium md:w-auto hover:text-blue-600 md:pt-2 transition"
              >
                Colleges
                <svg className={`w-3 h-3 ml-2 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
            <button className="px-4 py-2 text-blue-700 border border-blue-300 rounded-lg hover:bg-blue-600 hover:text-white font-semibold transition mb-2 md:mb-0">
              Sign in
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-red-500 text-white rounded-lg hover:bg-blue-700 font-semibold transition">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu for Colleges */}
      <div className={`absolute left-0 right-0 w-screen bg-white border-t border-gray-200 shadow-2xl z-50 transition-all duration-200 rounded-b-xl ${dropdownOpen ? "block animate-fadeIn" : "hidden"}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-screen-xl mx-auto">
          
          {/* Left: Course List */}
          <ul className="space-y-2">
            {Object.keys(courseData).map((course) => (
              <li key={course}>
                <button
                  onMouseEnter={() => setActiveCourse(course)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${activeCourse === course ? "bg-blue-50 text-blue-600 font-semibold" : "hover:bg-gray-100"}`}
                >
                  {course}
                </button>
              </li>
            ))}
          </ul>

          {/* Right: Dynamic Course Details */}
          <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold text-blue-700">{activeCourse}</h3>
            <p className="mt-2 text-gray-600">{courseData[activeCourse].about}</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {courseData[activeCourse].links.map((link, idx) => (
                <a key={idx} href={link.href} className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-blue-400 hover:shadow transition">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
