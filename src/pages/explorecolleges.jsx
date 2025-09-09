import React, { useState } from "react";
import { Link } from "react-router-dom";

const ExploreColleges = () => {
  const [openFilter, setOpenFilter] = useState(null);

  // Example filter data
  const filters = {
    Stream: [
      "Engineering",
      "Medical",
      "Management",
      "Law",
      "Arts",
      "Science",
      "Computer Applications",
      "Education",
      "Mass Communications",
      "Vocational Courses",
      "Design",
      "Agricuatlure",
    ],
    State: ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "West Bengal"],
    City: [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Chennai",
      "Kolkata",
      "Hyderabad",
      "Pune",
      "Jaipur",
      "Chandigarh",
      "Kangra",
      "Jammu",
      "Amritsar",
      "Ludhiana",
      "Jalandhar",
    ],
    Course: ["B.Tech", "MBA", "MBBS", "BA", "B.Sc", "LLB"],
    "Program Type": ["Full-time", "Part-time", "Online", "Distance Learning"],
    "Entrance Exam": [
      "Jee Mains",
      "CAT",
      "MAT",
      "NEET",
      "CMAT",
      "XAT",
      "GATE",
      "CUET PG",
      "MHT CET",
      "CUET",
      "NEET PG",
    ],

    "Avg Fee Per Year": ["0-25k", "25-50K", "50-75k", "75K-1L", "1-2L", "Abover 2L"],

    "Course Type": ["Degree", "Diploma", "Certification"   ],

    "Course Duration" :["2 Years", "3 Years", "4 Years", "1 Year",]





  };

  const toggleFilter = (name) => {
    setOpenFilter(openFilter === name ? null : name);
  };

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

      {/* Filter Section */}
      <section className="header-list relative">
        <div className="filter-area bg-gray-200">
          <div className="max-w-screen-xl mx-auto py-3">
            <div className="filter-area relative flex">
              {/* All Filter Button */}
              <div className="allfiter border-r border-gray-500 pr-3">
                <button
                  type="button"
                  className="cursor-pointer text-gray-900 bg-white hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
                >
                  <i className="ri-equalizer-line me-3"></i>
                  All Filter
                </button>
              </div>

              {/* Dynamic Filters */}
              <div className="right-filter-on relative flex gap-3 px-4 flex-wrap">
                {Object.keys(filters).map((filterName) => (
                  <div key={filterName} className="relative">
                    {/* Button */}
                    <button
                      onClick={() => toggleFilter(filterName)}
                      className={`${
                        openFilter === filterName
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-900"
                      } border border-gray-300 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 inline-flex items-center`}
                      type="button"
                    >
                      {filterName}
                      <svg
                        className={`w-2.5 h-2.5 ms-2 transition-transform duration-200 ${
                          openFilter === filterName ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    {openFilter === filterName && (
                      <div className="absolute left-0 mt-2 z-10 bg-white rounded-lg shadow w-80 overflow-hidden">
                        {/* Heading */}
                        <div className="px-4 py-3 border-b">
                          <h3 className="text-base font-semibold text-gray-900">
                            {filterName}
                          </h3>
                        </div>

                        {/* Search */}
                        <div className="filter-Search relative mx-3 my-4">
                          <div className="w-6 h-6 flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="text"
                            placeholder={`Find ${filterName}`}
                            className="w-full pl-12 pr-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg bg-white text-sm md:text-base"
                          />
                        </div>

                        {/* Options */}
                        <div className="max-h-56 overflow-y-auto px-3 py-3">
                          {/* City & Entrance Exam → checkbox grid */}
                          {filterName === "City" ||
                          filterName === "Entrance Exam" ||  filterName === "Course Type" ? (
                            <div className="grid grid-cols-2 gap-2">
                              {filters[filterName].map((item, idx) => (
                                <label
                                  key={idx}
                                  className="flex items-center space-x-2 cursor-pointer"
                                >
                                  <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                  />
                                  <span className="text-sm text-gray-700">
                                    {item}
                                  </span>
                                </label>
                              ))}
                            </div>
                          ) : (
                            <div className="flex flex-wrap gap-2">
                              {filters[filterName].map((item, idx) => (
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

                        {/* Footer */}
                        <div className="sticky bottom-0 bg-white border-t flex justify-between px-4 py-2">
                          <button className="text-sm text-blue-600 hover:underline">
                            View All
                          </button>
                          <button className="text-sm text-red-600 hover:underline">
                            Clear
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreColleges;
