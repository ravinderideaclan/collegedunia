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
    },
    {
      id: 2,
      title: "Find Colleges",
      icon: "ri-search-line",
      color: "bg-green-100",
      iconColor: "text-green-600",
      description: "Search for colleges by filters",
    },
    {
      id: 3,
      title: "Compare Colleges",
      icon: "ri-scales-3-line",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      description: "Compare multiple colleges",
    },
    {
      id: 4,
      title: "Exams",
      icon: "ri-file-list-3-line",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
      description: "Entrance exam information",
    },
    {
      id: 5,
      title: "College Predictor",
      icon: "ri-calculator-line",
      color: "bg-red-100",
      iconColor: "text-red-600",
      description: "Predict colleges based on score",
    },
    {
      id: 6,
      title: "Course Finder",
      icon: "ri-book-open-line",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
      description: "Find the right course for you",
    },
  ];

  return (
    <section className="explore-program ">
      <div className="max-w-screen-xl mx-auto  border-b border-gray-200 py-15">
       
        <div className='flex flex-col mb-8'> 
                         <h2 className="text-2xl md:text-3xl text-gray-800 font-bold">
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
                className={`px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition cursor-pointer ${
                  activeTag === tag
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow p-4"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${card.color} mb-3`}
              >
                <i className={`${card.icon} text-xl ${card.iconColor}`}></i>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExplorProgram;
