import React from 'react';
import './homepage.css';
import 'remixicon/fonts/remixicon.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const SetYourGoal = () => {
    // Categories data with images, names, and college counts
    const categories = [
        {
            id: 1,
            name: "Engineering",
            image: "../../src/assets/images/campuses/amity-campus-1.jpg",
            colleges: 2500,
            subcategories: "BE/B.TECH, DIPLOMA, M.TECH"
        },
        {
            id: 2,
            name: "Management",
            image: "../../src/assets/images/campuses/amity-campus-1.jpg",
            colleges: 1800,
            subcategories: "MBA, BBA, PGDM"
        },
        {
            id: 3,
            name: "Commerce",
            image: "../../src/assets/images/campuses/amity-campus-1.jpg",
            colleges: 1200,
            subcategories: "B.COM, M.COM, CA"
        },
        {
            id: 4,
            name: "Arts",
            image: "../../src/assets/images/campuses/amity-campus-1.jpg",
            colleges: 950,
            subcategories: "BA, MA, Fine Arts"
        },
        {
            id: 5,
            name: "Medical",
            image: "../../src/assets/images/campuses/amity-campus-1.jpg",
            colleges: 750,
            subcategories: "MBBS, BDS, BHMS"
        },
        {
            id: 6,
            name: "Science",
            image: "../../src/assets/images/campuses/amity-campus-1.jpg",
            colleges: 1050,
            subcategories: "B.SC, M.SC, Research"
        }
    ];

    return (
        // Study Goal Section with Category Cards
        <section className=" goal-section">
            <div className="max-w-screen-xl mx-auto px-0 border-b border-gray-200 py-15">
                <div className="flex justify-between items-center mb-6 items-top">
                    <div className='flex flex-col'>
                        <h2 className="text-2xl md:text-3xl text-gray-800 font-bold">
                            Select Your Study Goal
                        </h2>
                        <p className='text-gray-500'>Choose what you'd like to achieve with your studies.</p>
                    </div>

                    <button className="text-blue-600 font-medium hover:underline hidden md:block">
                        View All Categories →
                    </button>
                </div>

                <div className='relative'>

                    <Swiper
                        spaceBetween={30}
                        modules={[Navigation]} // ✅ use Navigation
                        navigation={{
                            nextEl: ".custom-swiper-next",
                            prevEl: ".custom-swiper-prev",
                        }}
                        className="mySwiper"
                        breakpoints={{
                            320: { slidesPerView: 1.3 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4.2 },
                        }}
                    >

                        {categories.map((category) => (
                            <SwiperSlide key={category.id}>
                                <div className="category-card my-2 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                                    <div className="relative h-36">
                                        <img
                                            className="h-full w-full object-cover"
                                            src={category.image}
                                            alt={category.name}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = `https://via.placeholder.com/300x200/f3f4f6/888888?text=${category.name}`;
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <h3 className="absolute bottom-3 left-3 text-white font-semibold">{category.name}</h3>
                                    </div>
                                    <div className="p-3">
                                        <p className="text-sm text-gray-600">{category.subcategories}</p>
                                        <p className="text-sm font-semibold text-blue-600 mt-1">
                                            {category.colleges.toLocaleString()} Colleges
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>


                    {/* ✅ Custom Navigation Arrows */}
                    <button className="custom-swiper-prev absolute top-1/2 -left-6 z-10 -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full p-3 hover:bg-gray-100 w-10 h-10 flex items-center justify-center">
                        <i className="ri-arrow-left-s-line text-2xl text-gray-700"></i>
                    </button>

                    <button className="custom-swiper-next absolute top-1/2 -right-6 z-10 -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full p-3 hover:bg-gray-100 w-10 h-10  flex items-center justify-center">
                        <i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>
                    </button>

                </div>

                <div className="mt-4 text-center md:hidden">
                    <button className="text-blue-600 font-medium">
                        View All Categories →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SetYourGoal;
