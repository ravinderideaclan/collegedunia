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
        <section className=" goal-section px-8">
            <div className="max-w-screen-xl mx-auto px-0  py-15 border-b border-gray-200 ">
                <div className="flex justify-between items-center mb-6 items-top">
                    <div className='flex flex-col'>
                        <h2 className="text-2xl md:text-3xl text-gray-800 font-bold mb-2">
                            Select Your Study Goal
                        </h2>
                        <p className='text-gray-500'>Choose what you'd like to achieve with your studies.</p>
                    </div>

                    <button className="text-blue-600 font-medium hover:underline hidden md:block">
                        View All Categories →
                    </button>
                </div>

                <div className='relative pt-4'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>

                        <div className='flex flex-col bg-gray-100 rounded-xl p-4'>
                            <div className='upper-area flex justify-between w-full'>
                                <div className='flex flex-col'>
                                    <h3 className='text-2xl font-semibold mb-2 text-gray-800'>Engineering</h3>
                                    <p className='text-gray-500'>6344 Colleges</p>
                                </div>
                                <div className='w-20 h-20 flex'>
                                    <img className='w-full' src='../../src/assets/images/engineering1.svg' />
                                </div>
                            </div>
                            <div className='bottom-tags flex gap-1 pt-3'>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    MBA/PGDM
                                </a>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    BBA/BMS
                                </a>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    Executive MBA
                                </a>
                            </div>
                        </div>


                        <div className='flex flex-col bg-gray-100 rounded-xl p-4'>
                            <div className='upper-area flex justify-between w-full'>
                                <div className='flex flex-col'>
                                    <h3 className='text-2xl font-semibold mb-2 text-gray-800'>Medical</h3>
                                    <p className='text-gray-500'>1444 Colleges</p>
                                </div>
                                <div className='w-20 h-20 flex'>
                                    <img className='w-full' src='../../src/assets/images/medical.svg' />
                                </div>
                            </div>
                            <div className='bottom-tags flex gap-1 pt-3 flex-wrap'>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    BE/B.Tech
                                </a>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    Diploma in Engineering
                                </a>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    ME/M.Tech
                                </a>
                            </div>
                        </div>

                        <div className='flex flex-col bg-gray-100 rounded-xl p-4'>
                            <div className='upper-area flex justify-between w-full'>
                                <div className='flex flex-col'>
                                    <h3 className='text-2xl font-semibold mb-2 text-gray-800'>Management</h3>
                                    <p className='text-gray-500'>2644 Colleges</p>
                                </div>
                                <div className='w-20 h-20 flex'>
                                    <img className='w-full' src='../../src/assets/images/management.svg' />
                                </div>
                            </div>
                            <div className='bottom-tags flex gap-1 pt-3 flex-wrap'>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    BE/B.Tech
                                </a>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    Diploma in Engineering
                                </a>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    ME/M.Tech
                                </a>
                            </div>
                        </div>



                        <div className='flex flex-col bg-gray-100 rounded-xl p-4'>
                            <div className='upper-area flex justify-between w-full'>
                                <div className='flex flex-col'>
                                    <h3 className='text-2xl font-semibold mb-2 text-gray-800'>Law</h3>
                                    <p className='text-gray-500'>5444 Colleges</p>
                                </div>
                                <div className='w-20 h-20 flex'>
                                    <img className='w-full' src='../../src/assets/images/law.svg' />
                                </div>
                            </div>
                            <div className='bottom-tags flex gap-1 pt-3 flex-wrap'>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    BE/B.Tech
                                </a>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    Diploma in Engineering
                                </a>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    ME/M.Tech
                                </a>
                            </div>
                        </div>

                        <div className='flex flex-col bg-gray-100 rounded-xl p-4'>
                            <div className='upper-area flex justify-between w-full'>
                                <div className='flex flex-col'>
                                    <h3 className='text-2xl font-semibold mb-2 text-gray-800'>Medical</h3>
                                    <p className='text-gray-500'>35444 Colleges</p>
                                </div>
                                <div className='w-20 h-20 flex'>
                                    <img className='w-full' src='../../src/assets/images/science.svg' />
                                </div>
                            </div>
                            <div className='bottom-tags flex gap-1 pt-3 flex-wrap'>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    BE/B.Tech
                                </a>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    Diploma in Engineering
                                </a>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    ME/M.Tech
                                </a>
                            </div>
                        </div>



                        <div className='flex flex-col bg-gray-100 rounded-xl p-4'>
                            <div className='upper-area flex justify-between w-full'>
                                <div className='flex flex-col'>
                                    <h3 className='text-2xl font-semibold mb-2 text-gray-800'>Arts</h3>
                                    <p className='text-gray-500'>6444 Colleges</p>
                                </div>
                                <div className='w-20 h-20 flex'>
                                    <img className='w-full' src='../../src/assets/images/arts.svg' />
                                </div>
                            </div>
                            <div className='bottom-tags flex gap-1 pt-3 flex-wrap'>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    BE/B.Tech
                                </a>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    Diploma in Engineering
                                </a>
                                <a href='#' className='px-3 text-xs bg-none border border-gray-400 p-2 rounded-4xl mr-2 hover:bg-white '>
                                    ME/M.Tech
                                </a>
                            </div>
                        </div>






                    </div>









                    {/* <Swiper
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

                    </Swiper> */}


                    {/* ✅ Custom Navigation Arrows */}
                    {/* <button className="custom-swiper-prev absolute top-1/2 -left-6 z-10 -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full p-3 hover:bg-gray-100 w-10 h-10 flex items-center justify-center">
                        <i className="ri-arrow-left-s-line text-2xl text-gray-700"></i>
                    </button>

                    <button className="custom-swiper-next absolute top-1/2 -right-6 z-10 -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full p-3 hover:bg-gray-100 w-10 h-10  flex items-center justify-center">
                        <i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>
                    </button> */}

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
