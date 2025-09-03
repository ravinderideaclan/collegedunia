import React, { useState } from "react";
import "./homepage.css";
import 'remixicon/fonts/remixicon.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const Homepage = () => {
    // Categories data with images, names, and college counts
    const categories = [
        {
            id: 1,
            name: "Engineering",
            image: "/assets/images/campuses/amity-campus-1.jpg",
            colleges: 2500,
            subcategories: "BE/B.TECH, DIPLOMA, M.TECH"
        },
        {
            id: 2,
            name: "Management",
            image: "/assets/images/campuses/amity-campus-1.jpg",
            colleges: 1800,
            subcategories: "MBA, BBA, PGDM"
        },
        {
            id: 3,
            name: "Commerce",
            image: "/assets/images/campuses/amity-campus-1.jpg",
            colleges: 1200,
            subcategories: "B.COM, M.COM, CA"
        },
        {
            id: 4,
            name: "Arts",
            image: "/assets/images/campuses/amity-campus-1.jpg",
            colleges: 950,
            subcategories: "BA, MA, Fine Arts"
        },
        {
            id: 5,
            name: "Medical",
            image: "/assets/images/campuses/amity-campus-1.jpg",
            colleges: 750,
            subcategories: "MBBS, BDS, BHMS"
        },
        {
            id: 6,
            name: "Science",
            image: "/assets/images/campuses/amity-campus-1.jpg",
            colleges: 1050,
            subcategories: "B.SC, M.SC, Research"
        }
    ];

    // Tags for filter buttons
    const tags = ["All", "BTech", "MBA", "MBBS", "ME/MTech", "BSc", "BA", "BCom", "BCA", "BBA/BMS", "BSc Nursing"];

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
            description: "View top college rankings"
        },
        {
            id: 2,
            title: "Find Colleges",
            icon: "ri-search-line",
            color: "bg-green-100",
            iconColor: "text-green-600",
            description: "Search for colleges by filters"
        },
        {
            id: 3,
            title: "Compare Colleges",
            icon: "ri-scales-3-line",
            color: "bg-purple-100",
            iconColor: "text-purple-600",
            description: "Compare multiple colleges"
        },
        {
            id: 4,
            title: "Exams",
            icon: "ri-file-list-3-line",
            color: "bg-orange-100",
            iconColor: "text-orange-600",
            description: "Entrance exam information"
        },
        {
            id: 5,
            title: "College Predictor",
            icon: "ri-calculator-line",
            color: "bg-red-100",
            iconColor: "text-red-600",
            description: "Predict colleges based on score"
        },
        {
            id: 6,
            title: "Course Finder",
            icon: "ri-book-open-line",
            color: "bg-yellow-100",
            iconColor: "text-yellow-600",
            description: "Find the right course for you"
        }
    ];

    return (
        <>
            {/* Study Goal Section with Category Cards */}
            <section className="py-8 goal-section">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl md:text-3xl text-gray-800 font-bold">
                            Select Your Study Goal
                        </h2>
                        <button className="text-blue-600 font-medium hover:underline hidden md:block">
                            View All Categories →
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category) => (
                            <div key={category.id} className="category-card bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                                <div className="relative h-36">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={category.image}
                                        alt={category.name}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/300x200/f3f4f6/888888?text=" + category.name;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <h3 className="absolute bottom-3 left-3 text-white font-semibold">{category.name}</h3>
                                </div>
                                <div className="p-3">
                                    <p className="text-sm text-gray-600">{category.subcategories}</p>
                                    <p className="text-sm font-semibold text-blue-600 mt-1">{category.colleges.toLocaleString()} Colleges</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 text-center md:hidden">
                        <button className="text-blue-600 font-medium">
                            View All Categories →
                        </button>
                    </div>





                    
                </div>
            </section>

            {/* Tags and Feature Cards Section */}
            <section className="py-8 bg-gray-50">
                <div className="max-w-screen-xl mx-auto px-4">

                    <h2 className="text-2xl md:text-3xl text-gray-800 font-bold md:mb-5">
                        Explore Programs
                    </h2>


                    {/* Tags/Filter Buttons */}
                    <div className="mb-8 overflow-x-auto">
                        <div className="flex space-x-2 pb-2 min-w-max">
                            {tags.map((tag) => (
                                <button
                                    key={tag}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${activeTag === tag
                                            ? "bg-blue-600 text-white"
                                            : "bg-white text-gray-700 hover:bg-gray-100"
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
                            <div key={card.id} className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow p-4">
                                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${card.color} mb-3`}>
                                    <i className={`${card.icon} text-xl ${card.iconColor}`}></i>
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-1">{card.title}</h3>
                                <p className="text-sm text-gray-600">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Homepage;