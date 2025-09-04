import React, { useState, useEffect } from 'react'
import "./Herosection.css";

import carousel1 from '../../assets/images/campuses/amity-campus-1.jpg';
import carousel2 from '../../assets/images/campuses/cu-campus.jpg';
import carousel3 from '../../assets/images/campuses/iit-mumbai.jpg';

const slides = [
  {
    id: 1,
    image: carousel1,
    title: "First Slide",
    description: "This is the first slide description"
  },
  {
    id: 2,
    image: carousel2,
    title: "Second Slide",
    description: "This is the second slide description"
  },
  {
    id: 3,
    image: carousel3,
    title: "Third Slide",
    description: "This is the third slide description"
  },
];

function Herosection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // ✅ Auto Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // change slide every 4 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <div id="animation-carousel" className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden coustom-height">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out transform
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.image}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={slide.title}
            />
          </div>
        ))}
      </div>

      {/* (Optional) Prev/Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        ›
      </button>

      {/* Search Section */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="custom-search absolute top-0 bg-gray-800/70 rounded p-8 mt-10 md:max-w-170  w-full box-gray">
          <div>
            <h1 className="text-4xl font-extrabold text-white mb-4">
              Find Your Perfect College & Build Your Future
            </h1>
            <p className="text-white mb-6">
              Discover top colleges, explore courses, and get expert guidance for your educational journey
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <div className="relative">
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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Colleges, Exams, Courses..."
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg bg-white"
                  />
                </div>
              </div>
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-blue-600 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 whitespace-nowrap shadow-lg"
              >
                Search Now
              </button>
            </div>

            <p className='text-white text-base'>Popular Courses</p>
            <div className='keywords-tags relative overflow-x-auto whitespace-nowrap py-3 max-w-full'>
              <a href='#' className='px-3 text-xs bg-red-600 text-white p-2 rounded-4xl mr-2 hover:bg-white hover:text-gray-800'>All Courses</a>
              <a href='#' className='px-3 text-xs bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'>B.Tech</a>
              <a href='#' className='px-3 text-xs bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'>MBA</a>
              <a href='#' className='px-3 text-xs bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'>M.Tech</a>
              <a href='#' className='px-3 text-xs bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'>MBBS</a>
              <a href='#' className='px-3 text-xs bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'>B.Com</a>
              <a href='#' className='px-3 text-xs bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'>B.Sc</a>
              <a href='#' className='px-3 text-xs bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'>B.Sc (Nursing)</a>
              <a href='#' className='px-3 text-xs bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'>BA</a>
              <a href='#' className='px-3 text-xs bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'>BBA</a>
              <a href='#' className='px-3 text-xs bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'>BCA</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Herosection;
