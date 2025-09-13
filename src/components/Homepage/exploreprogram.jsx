import React, { useState } from "react";
import "./homepage.css";
import "remixicon/fonts/remixicon.css";

function ExplorProgram() {
  // Tags for filter buttons
  const tags = [
    "All",
    "BTech",
    "MBA",
    "MBBS",
    "ME/MTech",
    "BSc",
    "BA",
    "BCom",
    "BCA",
    "BBA/BMS",
    "BSc Nursing",
  ];

  // State for active tag
  const [activeTag, setActiveTag] = useState("All");

  // Feature cards data
  const featureCards = [
    {
      id: 1,
      title: "Rankings",
      icon: "ri-medal-line",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      description: "View top college rankings",
      tags: ["NIRF", "TOI", "India Today"],
      footer: "Top Ranked College in India",
    },
    {
      id: 2,
      title: "Find Colleges",
      icon: "ri-search-line",
      color: "bg-green-100",
      iconColor: "text-green-600",
      description: "Search for colleges by filters",
      tags: ["By Location", "By Stream", "By Fees"],
      footer: "Find your dream college",
    },
    {
      id: 3,
      title: "Compare Colleges",
      icon: "ri-scales-3-line",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      description: "Compare multiple colleges",
      tags: ["Side by Side", "Placements", "Rankings"],
      footer: "Compare before you choose",
    },
    {
      id: 4,
      title: "Exams",
      icon: "ri-file-list-3-line",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
      description: "Entrance exam information",
      tags: ["JEE Advance", "NEET", "CAT", "BITSTAT"],
      footer: "Explore entrance exams",
    },
    {
      id: 5,
      title: "College Predictor",
      icon: "ri-calculator-line",
      color: "bg-red-100",
      iconColor: "text-red-600",
      description: "Predict colleges based on score",
      tags: ["By Rank", "By Marks", "By Percentile", "JEE Main", "BITSAT"],
      footer: "Get personalized predictions",
    },
    {
      id: 6,
      title: "Course Finder",
      icon: "ri-book-open-line",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
      description: "Find the right course for you",
      tags: ["Engineering", "Management", "Medical"],
      footer: "Discover your best-fit course",
    },
  ];

  return (
    <section className="explore-program px-8 ">
      <div className="max-w-screen-xl mx-auto  border-b border-gray-200 py-15">

        <div className='flex flex-col mb-8'>
          <h2 className="text-2xl md:text-3xl text-gray-800 font-bold mb-3">
            Explore Programs
          </h2>
          <p className='text-gray-500'>Browse available programs to find the right fit for you.</p>
        </div>



        {/* Tags/Filter Buttons */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2 min-w-max">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition cursor-pointer ${activeTag === tag
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-100 border border-gray-400"
                  }`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className="relative z-10 overflow-hidden bg-white  rounded-xlg  border border-gray-300 shadow-lg transition-shadow  custom-border-rounded"
            >

              <div className="explore-card-header flex item-center">
                <div
                  className={`custom-cards-explore me-5 flex items-center justify-center rounded-full ${card.color}`}
                >
                  <i className={`${card.icon} text-3xl ${card.iconColor}`}></i>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-gray-800 mb-1 text-xl">{card.title}</h3>
                  <p className="text-sm text-gray-500">{card.description}</p>
                </div>
              </div>

              <div className="body-text-explore p-4  bg-gray-200/50">
                <div className="tag-colleges h-22">
                  <div className="list-info gap-3 flex flex-wrap">
                    {card.tags.map((tag, index) => (
                      <a
                        key={index}
                        href="#"
                        className="px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl  hover:bg-white "
                      >
                        {tag}
                      </a>
                    ))}

                  </div>
                </div>





              </div>

              <div className="footer-explore mx-4 px-0 py-3 ">

                <a href="#" className="text-red-600 text-sm font-semibold">{card.footer} <i class="ri-arrow-right-s-line ms-1 text-gray-800"></i></a>



              </div>



            </div>
          ))}
        </div>



      </div>
    </section>
  );
}

export default ExplorProgram;
