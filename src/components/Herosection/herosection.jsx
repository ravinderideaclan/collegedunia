import React, { useState } from 'react'
import "./Herosection.css";
// Import placeholder images directly (you'll need to create these files)
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

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div id="animation-carousel" className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden  coustom-height">
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

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
          <span className="sr-only">Next</span>
        </span>
      </button>


      {/*Search Section */}

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="absolute top-0 bg-gray-800/70 rounded p-8 mt-10 max-w-170 box-gray">
          <div className="">
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

            <div className='keywords-tags relative overflow-x-auto whitespace-nowrap py-3 max-w-full'>
              <a href='#' className='px-3 bg-red-600  text-white p-2 rounded-4xl mr-2 hover:bg-white hover:text-gray-800'> All Courses </a>
              <a href='#' className='px-3 bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'>B.Tech </a>
              <a href='#' className='px-3 bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'> MBA </a>
              <a href='#' className='px-3 bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'> M.Tech </a>
              <a href='#' className='px-3 bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'>MBBS </a>
              <a href='#' className='px-3 bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'> B.Com </a>
              <a href='#' className='px-3 bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'> B.Sc </a>
              <a href='#' className='px-3 bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'> B.Sc (Nursing) </a>
               <a href='#' className='px-3 bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'> BA </a>
                             <a href='#' className='px-3 bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'> BBA </a>
                                           <a href='#' className='px-3 bg-white p-2 rounded-4xl mr-2 hover:bg-red-600 hover:text-white'> BCA </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Herosection;