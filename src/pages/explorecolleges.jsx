import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./ExploreColleges.css";

const filtersData = {
  Stream: [
    "Engineering", "Medical", "Management", "Law", "Arts", "Science",
    "Computer Applications", "Education", "Mass Communications",
    "Vocational Courses", "Design", "Agricuatlure"
  ],
  State: ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "West Bengal"],
  City: [
    "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad",
    "Pune", "Jaipur", "Chandigarh", "Kangra", "Jammu", "Amritsar",
    "Ludhiana", "Jalandhar"
  ],
  Course: ["B.Tech", "MBA", "MBBS", "BA", "B.Sc", "LLB"],
  "Program Type": ["Full-time", "Part-time", "Online", "Distance Learning"],
  "Entrance Exam": ["Jee Mains", "CAT", "MAT", "NEET", "CMAT", "XAT", "GATE", "CUET PG", "MHT CET", "CUET", "NEET PG"],
  "Avg Fee Per Year": ["0-25k", "25-50K", "50-75k", "75K-1L", "1-2L", "Above 2L"],
  "Course Type": ["Degree", "Diploma", "Certification"],
  "Course Duration": ["2 Years", "3 Years", "4 Years", "1 Year"],
  "College Category": ["IIT", "NIT", "AIIMS", "IIIT", "IIM", "NLU", "IISER", "NIEFT", "FDDI", "NIPER"]
};

const checkboxFilters = new Set([
  "City",
  "Program Type",
  "Type of College", // Note: If "Type of College" should exist in data, add it to filtersData
  "Entrance Exam",
  "Course Type",
  "Course Duration"
]);

const ExploreColleges = () => {
  const buttonRefs = useRef({});
  const scrollRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleToggle = (filter) => {
    const button = buttonRefs.current[filter];
    if (!button) return;
    const rect = button.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setOpenDropdown(openDropdown === filter ? null : filter);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 200;
    const newScrollLeft =
      direction === "right"
        ? container.scrollLeft + scrollAmount
        : container.scrollLeft - scrollAmount;

    container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(container.scrollLeft + container.offsetWidth < container.scrollWidth - 10);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-portal")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    handleScroll(); // initial state
  }, []);

  return (
    <>
      {/* Header */}
      <section className="header-list relative px-8">
        <div className="max-w-screen-xl mx-auto py-8">
          {/* Breadcrumb */}
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 "
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                    Explore Colleges
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-gray-900 text-4xl font-semibold mt-5">
            List of Top Colleges in India Based on 2025 Ranking
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="relative bg-gray-200 py-3">
        <div className="max-w-screen-xl mx-auto flex items-center relative px-4">
          <div className="allfiter border-r border-gray-500 pr-3">
            <button type="button" className="text-nowrap cursor-pointer text-white  bg-red-600 hover:bg-gray-800 hover:text-white font-medium rounded-full text-sm px-5 py-2.5 inline-flex items-center me-2 mb-2">
              <i className="ri-equalizer-line me-3"></i> All Filter
            </button>
          </div>

          <div className="filter-area relative flex items-center overflow-hidden scrollbar-hide px-8">
            {showLeftArrow && (
              <button onClick={() => scroll("left")} className="absolute left-1 z-10 bg-white shadow p-2 rounded-full w-10 h-10 border border-gray-400 cursor-pointer">
                <i className="ri-arrow-left-s-line"></i>
              </button>
            )}

            <div ref={scrollRef} onScroll={handleScroll} style={{ overflowX: "auto", whiteSpace: "nowrap" }} className="flex-1 px-8 scrollbar-hide">
              {Object.keys(filtersData).map((filter) => (
                <button
                  key={filter}
                  ref={(el) => (buttonRefs.current[filter] = el)}
                  onClick={() => handleToggle(filter)}
                  className="me-3 bg-white border border-gray-300 hover:bg-blue-700 hover:text-white font-medium rounded-full text-sm px-4 py-2.5 inline-flex items-center whitespace-nowrap"
                >
                  {filter} <i className="ri-arrow-down-s-line ml-2"></i>
                </button>
              ))}
            </div>

            {showRightArrow && (
              <button onClick={() => scroll("right")} className="absolute right-1 z-10 bg-white shadow p-2 rounded-full w-10 h-10 border border-gray-400 cursor-pointer">
                <i className="ri-arrow-right-s-line"></i>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Dropdown Portal */}
      {openDropdown &&
        ReactDOM.createPortal(
          <div
            className="dropdown-portal dropdown-transition w-80 rounded-lg"
            style={{
              position: "absolute",
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              background: "#fff",
              border: "1px solid #ccc",
              padding: 10,
              zIndex: 9999,
            }}
          >
            <div className="px-4 py-3 border-b">
              <h3 className="text-base font-semibold text-gray-900">{openDropdown}</h3>
            </div>

            <div className="filter-Search relative mx-3 my-4">

              <i class="ri-search-2-line absolute text-base text-gray-500 top-2 left-2                                    "></i>
              <input
                type="text"
                placeholder={`Find ${openDropdown}`}
                className="w-full pl-4 pr-4 py-2 border border-gray-400 rounded-lg focus:outline-none text-base pl-8"
              />
            </div>

            <div className="max-h-56 overflow-y-auto px-3 py-3">
              {checkboxFilters.has(openDropdown) ? (
                <div className="grid grid-cols-2 gap-2">
                  {filtersData[openDropdown].map((item, idx) => (
                    <label key={idx} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {filtersData[openDropdown].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="px-3 py-1.5 text-sm font-medium text-gray-700 rounded-full border border-gray-400 hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="sticky bottom-0 bg-white border-t flex justify-between px-4 py-2">
              <button className="text-sm text-blue-600 hover:underline">View All</button>
              <button className="text-sm text-red-600 hover:underline">Clear</button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ExploreColleges;
