import React, { useRef, useState, useLayoutEffect } from "react";
import "remixicon/fonts/remixicon.css";
import "./homepage.css";

const TopColleges = () => {
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const updateButtons = () => {
    const container = containerRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    setShowLeft(container.scrollLeft > 0);
    setShowRight(maxScroll > 0 && container.scrollLeft < maxScroll - 5);
  };

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -250, behavior: "smooth" });
    setTimeout(updateButtons, 300);
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 250, behavior: "smooth" });
    setTimeout(updateButtons, 300);
  };

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    updateButtons();
    container.addEventListener("scroll", updateButtons);

    return () => container.removeEventListener("scroll", updateButtons);
  }, []);


  const [activecollegeTags, setActivecollegeTags] = useState("BTech");

  const collegeTags = [
    "BTech",
    "MBA",
    "MBBS",
    "ME/MTech",
    "MBA/PGDM",
    "B.Ed",
    "M.Phil/Ph.D in Science",
    "BSc",
    "BA",
    "BCom",
    "BCA",
    "BBA/BMS",
    "BSc Nursing",
    "Pharmacy",
    "Law",
    "Design",
  ];

  return (
    <section className="topcolleges px-8">
      <div className="max-w-screen-xl mx-auto  py-15">
        <h2 className="text-2xl md:text-3xl text-gray-800 font-bold mb-5">
          Top 10 Colleges
        </h2>
        <div className="relative">
          {/* Left Arrow */}
          {showLeft && (
            <button
              onClick={scrollLeft}
              className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 w-10 h-10 flex items-center justify-center"
              aria-label="Scroll left"
            >
              <i className="ri-arrow-left-s-line text-lg"></i>
            </button>
          )}

          {/* Scrollable Tags */}
          <div
            ref={containerRef}
            className="flex space-x-3 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {collegeTags.map((tag, idx) => (
              <button
                key={idx}
                className={`px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition cursor-pointer ${activecollegeTags === tag
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-red-600 hover:text-white"
                  }`}
                onClick={() => setActivecollegeTags(tag)}   >
                {tag}
              </button>
            ))}
          </div>
          {/* Right Arrow */}
          {showRight && (
            <button
              onClick={scrollRight}
              className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 w-10 h-10 flex items-center justify-center"
              aria-label="Scroll right"
            >
              <i className="ri-arrow-right-s-line text-lg"></i>
            </button>
          )}
        </div>

        {/* Table */}
        <div className="relative overflow-x-auto rounded-xl  border border-gray-100 mt-8">
          {/* Table */}
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase  ">
              <tr className="border-b  border-gray-100 bg-blue-100 ">

                <th scope="col" className="px-6 py-4">
                  Rank
                </th>
                <th scope="col" className="px-6 py-4">
                  College
                </th>
                <th scope="col" className="px-6 py-4">
                  Ranking
                </th>
                <th scope="col" className="px-6 py-4">
                  Cutoff
                </th>
                <th scope="col" className="px-6 py-4">
                  Application Deadline
                </th>
                <th scope="col" className="px-6 py-4">
                  Fees
                </th>
              </tr>
            </thead>
            <tbody>

              <tr className="d:bg-odwhite even:bg-gray-50 ">
                <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                  <p>#1</p>
                </td>
                <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <img className="w-10 h-10 rounded-full p-1 ring-1 ring-gray-300" src="../../src/assets/images/logo/iit.webp" alt="Jese image"></img>
                  <div className="ps-3">
                    <div className="text-base font-semibold">IIMA - Indian Institute of Management</div>
                    <div className="font-normal text-gray-500">Ahmedabad,Gujarat | <span><i class="ri-star-fill text-yellow-400"></i> 5/5 </span> </div>
                  </div>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  #2 out of 50 in India 2019
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  CAT 2024 Cut off <span className="text-gray-700"> 99 </span>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  7 July - 08 Sept 2025
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <div className="ps-3">
                    <div className="text-base font-semibold">₹1,38,060</div>
                    <div className="font-normal text-gray-500">Total Fees </div>
                  </div>
                </td>
              </tr>

              <tr className="d:bg-odwhite even:bg-gray-50 border-b  border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                  <p>#2</p>
                </td>
                <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <img className="w-10 h-10 rounded-full p-1 ring-1 ring-gray-300" src="../../src/assets/images/logo/iit.webp" alt="Jese image"></img>
                  <div className="ps-3">
                    <div className="text-base font-semibold">IIMA - Indian Institute of Management</div>
                    <div className="font-normal text-gray-500">Ahmedabad,Gujarat | <span><i class="ri-star-fill text-yellow-400"></i> 5/5 </span> </div>
                  </div>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  #2 out of 50 in India 2019
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  CAT 2024 Cut off <span className="text-gray-700"> 99 </span>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  7 July - 08 Sept 2025
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <div className="ps-3">
                    <div className="text-base font-semibold">₹1,38,060</div>
                    <div className="font-normal text-gray-500">Total Fees </div>
                  </div>
                </td>
              </tr>


              <tr className="d:bg-odwhite even:bg-gray-50 border-b  border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                  <p>#3</p>
                </td>
                <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <img className="w-10 h-10 rounded-full p-1 ring-1 ring-gray-300" src="../../src/assets/images/logo/iit.webp" alt="Jese image"></img>
                  <div className="ps-3">
                    <div className="text-base font-semibold">IIMA - Indian Institute of Management</div>
                    <div className="font-normal text-gray-500">Ahmedabad,Gujarat | <span><i class="ri-star-fill text-yellow-400"></i> 5/5 </span> </div>
                  </div>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  #4 out of 50 in India 2019
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  CAT 2024 Cut off <span className="text-gray-700"> 99 </span>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  7 July - 08 Sept 2025
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <div className="ps-3">
                    <div className="text-base font-semibold">₹1,38,060</div>
                    <div className="font-normal text-gray-500">Total Fees </div>
                  </div>
                </td>
              </tr>


              <tr className="d:bg-odwhite even:bg-gray-50 border-b  border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                  <p>#4</p>
                </td>
                <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <img className="w-10 h-10 rounded-full p-1 ring-1 ring-gray-300" src="../../src/assets/images/logo/iit.webp" alt="Jese image"></img>
                  <div className="ps-3">
                    <div className="text-base font-semibold">IIMA - Indian Institute of Management</div>
                    <div className="font-normal text-gray-500">Ahmedabad,Gujarat | <span><i class="ri-star-fill text-yellow-400"></i> 5/5 </span> </div>
                  </div>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  #4 out of 50 in India 2019
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  CAT 2024 Cut off <span className="text-gray-700"> 99 </span>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  7 July - 08 Sept 2025
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <div className="ps-3">
                    <div className="text-base font-semibold">₹1,38,060</div>
                    <div className="font-normal text-gray-500">Total Fees </div>
                  </div>
                </td>
              </tr>


              <tr className="d:bg-odwhite even:bg-gray-50 border-b  border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                  <p>#5</p>
                </td>
                <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <img className="w-10 h-10 rounded-full p-1 ring-1 ring-gray-300" src="../../src/assets/images/logo/iit.webp" alt="Jese image"></img>
                  <div className="ps-3">
                    <div className="text-base font-semibold">IIMA - Indian Institute of Management</div>
                    <div className="font-normal text-gray-500">Ahmedabad,Gujarat | <span><i class="ri-star-fill text-yellow-400"></i> 5/5 </span> </div>
                  </div>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  #6 out of 50 in India 2019
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  CAT 2024 Cut off <span className="text-gray-700"> 99 </span>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  7 July - 08 Sept 2025
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <div className="ps-3">
                    <div className="text-base font-semibold">₹1,38,060</div>
                    <div className="font-normal text-gray-500">Total Fees </div>
                  </div>
                </td>
              </tr>


              <tr className="d:bg-odwhite even:bg-gray-50 border-b  border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                  <p>#7</p>
                </td>
                <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <img className="w-10 h-10 rounded-full p-1 ring-1 ring-gray-300" src="../../src/assets/images/logo/iit.webp" alt="Jese image"></img>
                  <div className="ps-3">
                    <div className="text-base font-semibold">IIMA - Indian Institute of Management</div>
                    <div className="font-normal text-gray-500">Ahmedabad,Gujarat | <span><i class="ri-star-fill text-yellow-400"></i> 5/5 </span> </div>
                  </div>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  #2 out of 50 in India 2019
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  CAT 2024 Cut off <span className="text-gray-700"> 99 </span>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  7 July - 08 Sept 2025
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <div className="ps-3">
                    <div className="text-base font-semibold">₹1,38,060</div>
                    <div className="font-normal text-gray-500">Total Fees </div>
                  </div>
                </td>
              </tr>

              <tr className="d:bg-odwhite even:bg-gray-50 border-b  border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                  <p>#8</p>
                </td>
                <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <img className="w-10 h-10 rounded-full p-1 ring-1 ring-gray-300" src="../../src/assets/images/logo/iit.webp" alt="Jese image"></img>
                  <div className="ps-3">
                    <div className="text-base font-semibold">IIMA - Indian Institute of Management</div>
                    <div className="font-normal text-gray-500">Ahmedabad,Gujarat | <span><i class="ri-star-fill text-yellow-400"></i> 5/5 </span> </div>
                  </div>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  #2 out of 50 in India 2019
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  CAT 2024 Cut off <span className="text-gray-700"> 99 </span>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  7 July - 08 Sept 2025
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <div className="ps-3">
                    <div className="text-base font-semibold">₹1,38,060</div>
                    <div className="font-normal text-gray-500">Total Fees </div>
                  </div>
                </td>
              </tr>


              <tr className="d:bg-odwhite even:bg-gray-50 border-b  border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                  <p>#9</p>
                </td>
                <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <img className="w-10 h-10 rounded-full p-1 ring-1 ring-gray-300" src="../../src/assets/images/logo/iit.webp" alt="Jese image"></img>
                  <div className="ps-3">
                    <div className="text-base font-semibold">IIMA - Indian Institute of Management</div>
                    <div className="font-normal text-gray-500">Ahmedabad,Gujarat | <span><i class="ri-star-fill text-yellow-400"></i> 5/5 </span> </div>
                  </div>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  #2 out of 50 in India 2019
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  CAT 2024 Cut off <span className="text-gray-700"> 99 </span>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  7 July - 08 Sept 2025
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <div className="ps-3">
                    <div className="text-base font-semibold">₹1,38,060</div>
                    <div className="font-normal text-gray-500">Total Fees </div>
                  </div>
                </td>
              </tr>


              <tr className="d:bg-odwhite even:bg-gray-50 border-b  border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                  <p>#10</p>
                </td>
                <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <img className="w-10 h-10 rounded-full p-1 ring-1 ring-gray-300" src="../../src/assets/images/logo/iit.webp" alt="Jese image"></img>
                  <div className="ps-3">
                    <div className="text-base font-semibold">IIMA - Indian Institute of Management</div>
                    <div className="font-normal text-gray-500">Ahmedabad,Gujarat | <span><i class="ri-star-fill text-yellow-400"></i> 5/5 </span> </div>
                  </div>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  #2 out of 50 in India 2019
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  CAT 2024 Cut off <span className="text-gray-700"> 99 </span>
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  7 July - 08 Sept 2025
                </td>
                <td className=" px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <div className="ps-3">
                    <div className="text-base font-semibold">₹1,38,060</div>
                    <div className="font-normal text-gray-500">Total Fees </div>
                  </div>
                </td>
              </tr>


            </tbody>
          </table>
        </div>



      </div>
    </section>
  );
};




export default TopColleges;