import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./ExploreColleges.css";
import "../components/FilterModal/Filtermodal"


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



const collegeData = [
  {
    rank: 1,
    logo: "../../src/assets/images/logo/iima.webp",
    name: "IIMA - Indian Institute of Management",
    location: "Ahmedabad, Gujarat",
    course: "MBA/PGDM",
    fee: "27,50,000",
    avgPackage: "34,50,000",
    highestPackage: "45,00,000",
    rating: "4.5",
    reviewCount: 120
  },
  {
    rank: 2,
    logo: "../../src/assets/images/logo/iitd.webp",
    name: "IIT Delhi",
    location: "Delhi",
    course: "B.Tech",
    fee: "10,00,000",
    avgPackage: "20,00,000",
    highestPackage: "30,00,000",
    rating: "4.8",
    reviewCount: 200
  },
  {
    rank: 3,
    logo: "../../src/assets/images/logo/iimb.webp",
    name: "IIM Bangalore",
    location: "Bangalore, Karnataka",
    course: "MBA/PGDM",
    fee: "24,50,000",
    avgPackage: "33,00,000",
    highestPackage: "48,00,000",
    rating: "4.7",
    reviewCount: 150
  },
  {
    rank: 4,
    logo: "../../src/assets/images/logo/iitb.webp",
    name: "IIT Bombay",
    location: "Mumbai, Maharashtra",
    course: "B.Tech",
    fee: "9,00,000",
    avgPackage: "18,50,000",
    highestPackage: "32,00,000",
    rating: "4.6",
    reviewCount: 180
  },
  {
    rank: 5,
    logo: "../../src/assets/images/logo/iimc.webp",
    name: "IIM Calcutta",
    location: "Kolkata, West Bengal",
    course: "MBA/PGDM",
    fee: "27,00,000",
    avgPackage: "32,50,000",
    highestPackage: "46,00,000",
    rating: "4.5",
    reviewCount: 110
  },
  {
    rank: 6,
    logo: "../../src/assets/images/logo/iitm.webp",
    name: "IIT Madras",
    location: "Chennai, Tamil Nadu",
    course: "B.Tech",
    fee: "8,50,000",
    avgPackage: "17,00,000",
    highestPackage: "29,00,000",
    rating: "4.4",
    reviewCount: 170
  },
  {
    rank: 7,
    logo: "../../src/assets/images/logo/iitk.webp",
    name: "IIT Kanpur",
    location: "Kanpur, Uttar Pradesh",
    course: "B.Tech",
    fee: "9,50,000",
    avgPackage: "16,50,000",
    highestPackage: "28,00,000",
    rating: "4.3",
    reviewCount: 140
  },
  {
    rank: 8,
    logo: "../../src/assets/images/logo/iitr.webp",
    name: "IIT Roorkee",
    location: "Roorkee, Uttarakhand",
    course: "B.Tech",
    fee: "8,00,000",
    avgPackage: "15,00,000",
    highestPackage: "26,00,000",
    rating: "4.2",
    reviewCount: 130
  },
  {
    rank: 9,
    logo: "../../src/assets/images/logo/fms.webp",
    name: "FMS Delhi",
    location: "Delhi",
    course: "MBA",
    fee: "2,00,000",
    avgPackage: "25,00,000",
    highestPackage: "40,00,000",
    rating: "4.9",
    reviewCount: 210
  },
  {
    rank: 10,
    logo: "../../src/assets/images/logo/spjimr.webp",
    name: "SPJIMR Mumbai",
    location: "Mumbai, Maharashtra",
    course: "PGDM",
    fee: "20,00,000",
    avgPackage: "24,00,000",
    highestPackage: "36,00,000",
    rating: "4.6",
    reviewCount: 100
  },
  {
    rank: 11,
    logo: "../../src/assets/images/logo/iift.webp",
    name: "IIFT Delhi",
    location: "Delhi",
    course: "MBA (IB)",
    fee: "21,00,000",
    avgPackage: "23,00,000",
    highestPackage: "35,00,000",
    rating: "4.4",
    reviewCount: 90
  },
  {
    rank: 12,
    logo: "../../src/assets/images/logo/nitie.webp",
    name: "NITIE Mumbai (IIM Mumbai)",
    location: "Mumbai, Maharashtra",
    course: "PGDIM",
    fee: "19,00,000",
    avgPackage: "22,00,000",
    highestPackage: "33,00,000",
    rating: "4.5",
    reviewCount: 85
  },
  {
    rank: 13,
    logo: "../../src/assets/images/logo/jbims.webp",
    name: "JBIMS Mumbai",
    location: "Mumbai, Maharashtra",
    course: "MBA",
    fee: "6,00,000",
    avgPackage: "21,00,000",
    highestPackage: "30,00,000",
    rating: "4.6",
    reviewCount: 88
  },
  {
    rank: 14,
    logo: "../../src/assets/images/logo/xlri.webp",
    name: "XLRI Jamshedpur",
    location: "Jamshedpur, Jharkhand",
    course: "PGDM (BM/HRM)",
    fee: "23,00,000",
    avgPackage: "26,00,000",
    highestPackage: "40,00,000",
    rating: "4.7",
    reviewCount: 160
  },
  {
    rank: 15,
    logo: "../../src/assets/images/logo/iims.webp",
    name: "IIM Shillong",
    location: "Shillong, Meghalaya",
    course: "MBA",
    fee: "18,00,000",
    avgPackage: "19,00,000",
    highestPackage: "27,00,000",
    rating: "4.3",
    reviewCount: 75
  },
  {
    rank: 16,
    logo: "../../src/assets/images/logo/iiml.webp",
    name: "IIM Lucknow",
    location: "Lucknow, Uttar Pradesh",
    course: "MBA/PGDM",
    fee: "23,50,000",
    avgPackage: "26,00,000",
    highestPackage: "38,00,000",
    rating: "4.6",
    reviewCount: 140
  },
  {
    rank: 17,
    logo: "../../src/assets/images/logo/nmims.webp",
    name: "NMIMS Mumbai",
    location: "Mumbai, Maharashtra",
    course: "MBA",
    fee: "21,90,000",
    avgPackage: "19,50,000",
    highestPackage: "29,00,000",
    rating: "4.2",
    reviewCount: 100
  },
  {
    rank: 18,
    logo: "../../src/assets/images/logo/sibm.webp",
    name: "SIBM Pune",
    location: "Pune, Maharashtra",
    course: "MBA",
    fee: "21,00,000",
    avgPackage: "18,00,000",
    highestPackage: "28,00,000",
    rating: "4.3",
    reviewCount: 98
  },
  {
    rank: 19,
    logo: "../../src/assets/images/logo/mica.webp",
    name: "MICA Ahmedabad",
    location: "Ahmedabad, Gujarat",
    course: "PGDM (C)",
    fee: "21,00,000",
    avgPackage: "16,00,000",
    highestPackage: "25,00,000",
    rating: "4.1",
    reviewCount: 70
  },
  {
    rank: 20,
    logo: "../../src/assets/images/logo/tapmi.webp",
    name: "TAPMI Manipal",
    location: "Manipal, Karnataka",
    course: "PGDM",
    fee: "18,00,000",
    avgPackage: "14,50,000",
    highestPackage: "23,00,000",
    rating: "4.0",
    reviewCount: 68
  },
  {
    rank: 21,
    logo: "../../src/assets/images/logo/mdi.webp",
    name: "MDI Gurgaon",
    location: "Gurgaon, Haryana",
    course: "PGDM",
    fee: "23,00,000",
    avgPackage: "24,00,000",
    highestPackage: "35,00,000",
    rating: "4.6",
    reviewCount: 150
  },
  {
    rank: 22,
    logo: "../../src/assets/images/logo/iimk.webp",
    name: "IIM Kozhikode",
    location: "Kozhikode, Kerala",
    course: "MBA/PGDM",
    fee: "22,50,000",
    avgPackage: "25,00,000",
    highestPackage: "36,00,000",
    rating: "4.7",
    reviewCount: 135
  },
  {
    rank: 23,
    logo: "../../src/assets/images/logo/sjmsom.webp",
    name: "SJMSOM, IIT Bombay",
    location: "Mumbai, Maharashtra",
    course: "MBA",
    fee: "12,00,000",
    avgPackage: "22,00,000",
    highestPackage: "34,00,000",
    rating: "4.4",
    reviewCount: 80
  },
  {
    rank: 24,
    logo: "../../src/assets/images/logo/vgsom.webp",
    name: "VGSoM, IIT Kharagpur",
    location: "Kharagpur, West Bengal",
    course: "MBA",
    fee: "11,00,000",
    avgPackage: "20,00,000",
    highestPackage: "31,00,000",
    rating: "4.3",
    reviewCount: 77
  },
  {
    rank: 25,
    logo: "../../src/assets/images/logo/iimt.webp",
    name: "IIM Trichy",
    location: "Tiruchirappalli, Tamil Nadu",
    course: "MBA",
    fee: "18,00,000",
    avgPackage: "17,50,000",
    highestPackage: "26,00,000",
    rating: "4.2",
    reviewCount: 60
  },
  {
    rank: 26,
    logo: "../../src/assets/images/logo/ximb.webp",
    name: "XIMB Bhubaneswar",
    location: "Bhubaneswar, Odisha",
    course: "MBA",
    fee: "20,00,000",
    avgPackage: "17,00,000",
    highestPackage: "25,00,000",
    rating: "4.1",
    reviewCount: 74
  },
  {
    rank: 27,
    logo: "../../src/assets/images/logo/iimraipur.webp",
    name: "IIM Raipur",
    location: "Raipur, Chhattisgarh",
    course: "MBA",
    fee: "18,00,000",
    avgPackage: "16,50,000",
    highestPackage: "24,00,000",
    rating: "4.0",
    reviewCount: 55
  },
  {
    rank: 28,
    logo: "../../src/assets/images/logo/iimranchi.webp",
    name: "IIM Ranchi",
    location: "Ranchi, Jharkhand",
    course: "MBA",
    fee: "18,00,000",
    avgPackage: "16,80,000",
    highestPackage: "25,50,000",
    rating: "4.1",
    reviewCount: 59
  },
  {
    rank: 29,
    logo: "../../src/assets/images/logo/imt.webp",
    name: "IMT Ghaziabad",
    location: "Ghaziabad, Uttar Pradesh",
    course: "PGDM",
    fee: "19,00,000",
    avgPackage: "15,50,000",
    highestPackage: "24,00,000",
    rating: "4.2",
    reviewCount: 65
  },
  {
    rank: 30,
    logo: "../../src/assets/images/logo/gim.webp",
    name: "GIM Goa",
    location: "Panaji, Goa",
    course: "PGDM",
    fee: "17,50,000",
    avgPackage: "14,00,000",
    highestPackage: "22,00,000",
    rating: "4.0",
    reviewCount: 61
  }
];

const ExploreColleges = () => {
  const buttonRefs = useRef({});
  const scrollRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [viewMode, setViewMode] = useState("table");

  // New states for filtering functionality
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredColleges, setFilteredColleges] = useState(collegeData);
  const [sortBy, setSortBy] = useState("popularity"); // default sort

  // Handle filter search input change
  const handleFilterSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Toggle filter dropdown
  const handleToggle = (filter) => {
    const button = buttonRefs.current[filter];
    if (!button) return;
    const rect = button.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setOpenDropdown(openDropdown === filter ? null : filter);
    setSearchTerm("");
  };

  // Handle checkbox selection
  const handleCheckboxChange = (category, value, isChecked) => {
    setFilters(prevFilters => {
      const categoryFilters = prevFilters[category] || [];

      if (isChecked) {
        return {
          ...prevFilters,
          [category]: [...categoryFilters, value]
        };
      } else {
        return {
          ...prevFilters,
          [category]: categoryFilters.filter(item => item !== value)
        };
      }
    });
  };

  // Handle tag selection (non-checkbox filters)
  const handleTagSelect = (category, value) => {
    setFilters(prevFilters => {
      const categoryFilters = prevFilters[category] || [];

      // If already selected, deselect it
      if (categoryFilters.includes(value)) {
        return {
          ...prevFilters,
          [category]: categoryFilters.filter(item => item !== value)
        };
      } else {
        return {
          ...prevFilters,
          [category]: [...categoryFilters, value]
        };
      }
    });
  };

  // Clear all filters in a category
  const handleClearFilters = (category) => {
    setFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      delete newFilters[category];
      return newFilters;
    });
    setOpenDropdown(null);
  };

  // Clear all filters
  const handleClearAllFilters = () => {
    setFilters({});
    setSearchTerm("");
  };

  // Apply all filters to college data
  useEffect(() => {
    let result = collegeData;

    // Apply filters for each category
    Object.keys(filters).forEach(category => {
      const selectedFilters = filters[category];
      if (selectedFilters && selectedFilters.length > 0) {
        result = result.filter(college => {
          // Apply different filtering logic based on category
          switch (category) {
            case "City":
              return selectedFilters.some(city =>
                college.location.includes(city));
            case "State":
              return selectedFilters.some(state =>
                college.location.includes(state));
            case "Course":
              return selectedFilters.some(course =>
                college.course.includes(course));
            case "College Category":
              return selectedFilters.some(cat =>
                college.name.includes(cat));
            default:
              return true; // If no matching logic, don't filter
          }
        });
      }
    });

    // Apply sort
    if (sortBy === "rating") {
      result = [...result].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else {
      // Default to popularity (based on rank)
      result = [...result].sort((a, b) => a.rank - b.rank);
    }

    setFilteredColleges(result);
  }, [filters, sortBy]);

  // Horizontal scroll handling for filter buttons
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

  // Handle sort changes
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
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

  // Get filtered options based on search term
  const getFilteredOptions = (category) => {
    if (!searchTerm) return filtersData[category] || [];

    return (filtersData[category] || []).filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
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

      {/* Active Filters */}
      {Object.keys(filters).length > 0 && (
        <div className="bg-gray-100 py-2">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium">Active Filters:</span>
              {Object.keys(filters).map(category =>
                filters[category].map(value => (
                  <div key={`${category}-${value}`} className="bg-white rounded-full px-3 py-1 text-sm flex items-center border border-gray-300">
                    <span className="font-medium mr-1">{category}:</span> {value}
                    <button
                      onClick={() => handleCheckboxChange(category, value, false)}
                      className="ml-2 text-gray-500 hover:text-red-500"
                    >
                      <i className="ri-close-line"></i>
                    </button>
                  </div>
                ))
              )}
              <button
                onClick={handleClearAllFilters}
                className="ml-auto text-sm text-red-600 hover:underline"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <section className="relative bg-gray-200 py-3">
        <div className="max-w-screen-xl mx-auto flex items-center relative px-4">
          <div className="allfiter border-r border-gray-500 pr-3">
            <button data-modal-target="default-modal" data-modal-toggle="default-modal" type="button" className="text-nowrap cursor-pointer text-white  bg-red-600 hover:bg-gray-800 hover:text-white font-medium rounded-full text-sm px-5 py-2.5 inline-flex items-center me-2 mb-2">
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
                  className={`cursor-pointer me-3 border border-gray-300 font-medium rounded-full text-sm px-4 py-2.5 inline-flex items-center whitespace-nowrap ${filters[filter] && filters[filter].length > 0
                    ? "bg-gray-900 text-white"
                    : "bg-white hover:bg-gray-900 hover:text-white"
                    }`}
                >
                  {filter} {filters[filter] && filters[filter].length > 0 && `(${filters[filter].length})`} <i className="ri-arrow-down-s-line ml-2"></i>
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
              <i className="ri-search-2-line absolute text-base text-gray-500 top-2 left-2"></i>
              <input
                type="text"
                placeholder={`Find ${openDropdown}`}
                value={searchTerm}
                onChange={handleFilterSearch}
                className="w-full pl-4 pr-4 py-2 border border-gray-400 rounded-lg focus:outline-none text-base pl-8"
              />
            </div>

            <div className="max-h-56 overflow-y-auto px-3 py-3">
              {checkboxFilters.has(openDropdown) ? (
                <div className="grid grid-cols-2 gap-2">
                  {getFilteredOptions(openDropdown).map((item, idx) => (
                    <label key={idx} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters[openDropdown]?.includes(item) || false}
                        onChange={(e) => handleCheckboxChange(openDropdown, item, e.target.checked)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {getFilteredOptions(openDropdown).map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleTagSelect(openDropdown, item)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full border ${filters[openDropdown]?.includes(item)
                        ? "bg-gray-900 text-white border-gray-900"
                        : "text-gray-700 border-gray-400 hover:bg-gray-100"
                        }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="sticky bottom-0 bg-white border-t flex justify-between px-4 py-2">
              <button className="text-sm text-blue-600 hover:underline">View All</button>
              <button
                onClick={() => handleClearFilters(openDropdown)}
                className="text-sm text-red-600 hover:underline"
              >
                Clear
              </button>
            </div>
          </div>,
          document.body
        )}

      {/* Filter Table */}
      <section className="college-data mt-5">
        <div className="max-w-screen-xl mx-auto flex items-center relative px-4">
          <div className="bg-gray-100 rounded-lg p-5 w-full mb-10">
            <div className="header-data-inof flex justify-between">
              <div className="foundcollege">
                <p className="text-base font-semibold">
                  <i className="ri-school-line me-1"></i> Found {filteredColleges.length} Colleges
                </p>
              </div>
              <div className="sort-list-info flex gap-3 ">
                <p>Sort By</p>
                <div className="flex items-center ">
                  <input
                    id="popularity"
                    type="radio"
                    value="popularity"
                    name="sort"
                    checked={sortBy === "popularity"}
                    onChange={handleSortChange}
                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 "
                  />
                  <label htmlFor="popularity" className="ms-2 text-sm font-medium text-gray-600 ">Popularity</label>
                </div>
                <div className="flex items-center">
                  <input
                    id="rating"
                    type="radio"
                    value="rating"
                    name="sort"
                    checked={sortBy === "rating"}
                    onChange={handleSortChange}
                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 "
                  />
                  <label htmlFor="rating" className="ms-2 text-sm font-medium text-gray-600 ">Rating</label>
                </div>

                <div className="flex justify-end gap-4 ">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={` text-xl cursor-pointer rounded ${viewMode === "grid" ? "text-red-600" : ""}`}
                  >
                    <i className="ri-archive-drawer-line"></i>
                  </button>
                  <button
                    onClick={() => setViewMode("table")}
                    className={`text-xl cursor-pointer rounded ${viewMode === "table" ? "text-red-600" : ""}`}
                  >
                    <i className="ri-grid-line"></i>
                  </button>
                </div>
              </div>
            </div>

            {viewMode === "table" ? (
              // Table View
              <div className="relative overflow-x-auto mt-8 rounded-lg border border-gray-300">
                <table className="w-full text-sm text-left text-gray-500 border-collapse">
                  <thead className="text-xs text-gray-700 uppercase">
                    <tr className="border-b border-gray-700 bg-gray-900 text-white">
                      <th className="px-6 py-5 border-r border-gray-700">CD Rank</th>
                      <th className="px-6 py-5 border-r border-gray-700">College</th>
                      <th className="px-6 py-5 border-r border-gray-700">Courses</th>
                      <th className="px-6 py-5 border-r border-gray-700">Placement</th>
                      <th className="px-6 py-5">User Reviews</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredColleges.map((college, idx) => (
                      <tr key={idx} className="bg-white border-b border-gray-200">
                        <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap border-r border-gray-200 align-top">
                          <p>#{college.rank}</p>
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap border-r border-gray-200 align-top">
                          <div className="flex">
                            <img className="w-10 h-10 rounded-full p-1 ring-1 ring-gray-300" src={college.logo} alt="Logo" />
                            <div className="ps-3">
                              <div className="text-base font-semibold">
                                <a className="text-blue-500" href="#">{college.name}</a>
                              </div>
                              <div className="font-normal text-gray-500 text-xs">{college.location} | UGC Approved</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-900 whitespace-nowrap border-r border-gray-200 align-top">
                          <div className="fee flex flex-col">
                            <a className="text-green-600 text-base font-semibold" href="#">₹ {college.fee}</a>
                            <span className="text-gray-500 text-xs">{college.course}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-900 whitespace-nowrap border-r border-gray-200 align-top">
                          <div className="avgpackage flex flex-col mb-2">
                            <a className="text-green-600 text-base font-semibold" href="#">₹ {college.avgPackage}</a>
                            <span className="text-gray-500 text-xs">Average Package</span>
                          </div>
                          <div className="avgpackage flex flex-col">
                            <a className="text-green-600 text-base font-semibold" href="#">₹ {college.highestPackage}</a>
                            <span className="text-gray-500 text-xs">Highest Package</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-900 whitespace-nowrap align-top">
                          <div className="rating flex flex-col">
                            <div className="text-base">
                              <i className="ri-star-fill text-yellow-400"></i>
                              <span className="text-gray-700">{college.rating}/5</span>
                            </div>
                            <span className="text-gray-500 text-xs">Based on {college.reviewCount} reviews</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              // Grid View
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {filteredColleges.map((college, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg shadow border border-gray-400 transition hover:shadow-lg">
                    <div className="flex items-center mb-4">
                      <img className="w-12 h-12 rounded-full p-1 ring-1 ring-gray-300" src={college.logo} alt="Logo" />
                      <div className="ms-3">
                        <h2 className="text-lg font-semibold text-blue-600">{college.name}</h2>
                        <p className="text-sm text-gray-500">{college.location}</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="text-sm text-gray-600">Courses:</span>
                      <p className="text-gray-900 font-medium">{college.course}</p>
                    </div>
                    <div className="mb-3">
                      <span className="text-sm text-gray-600">Avg Package:</span>
                      <p className="text-green-600 font-semibold">₹ {college.avgPackage}</p>
                    </div>
                    <div className="mb-3">
                      <span className="text-sm text-gray-600">Highest Package:</span>
                      <p className="text-green-600 font-semibold">₹ {college.highestPackage}</p>
                    </div>
                    <div className="rating flex items-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                      <span className="text-gray-700 ms-2">{college.rating}/5 ({college.reviewCount} reviews)</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No results message */}
            {filteredColleges.length === 0 && (
              <div className="text-center py-8">
                <p className="text-xl font-medium text-gray-700">No colleges found matching your filters</p>
                <button
                  onClick={handleClearAllFilters}
                  className="mt-4 px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* Main modal */}
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-5xl max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow-sm ">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 ">
                Filter
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>

            {/* Modal footer */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>






    </>
  );
};

export default ExploreColleges;