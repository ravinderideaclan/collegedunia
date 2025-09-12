import React, { useState } from 'react';
import "remixicon/fonts/remixicon.css";
import "./homepage.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const TopUni = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <section className="top-uni-list relative bg-gray-100 px-8">
            <div className="max-w-screen-xl mx-auto py-16">
                <h2 className="text-2xl md:text-3xl text-gray-900 font-bold mb-8">
                    Top Universities/Colleges
                </h2>
                <div className="relative">
                    {/* Swiper */}
                    <Swiper
                        spaceBetween={20}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".custom-swiper-next",
                            prevEl: ".custom-swiper-prev",
                        }}
                        slidesPerGroup={1}          // ✅ move 1 slide at a time
                        roundLengths={true}         // ✅ prevent fractional pixel issues
                        centerInsufficientSlides={true} // ✅ show last slide properly
                        onInit={(swiper) => {
                            swiper.update();
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        onSlideChange={(swiper) => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        watchOverflow={true}
                        className="mySwiper py-4"
                        breakpoints={{
                            320: { slidesPerView: 1.1 },
                            640: { slidesPerView: 2 },
                            1024: {
                                slidesPerView: 3.2,
                                slidesPerGroup: 2,

                            }, // ✅ remove fractional "3.2"
                        }}
                    >

                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SwiperSlide className='py-2' key={num}>
                                <div className=" bg-white border border-gray-300 hover:shadow-md transition-shadow p-4  w-full flex flex-col rounded-xlg">
                                    <div className='flex flex-row justify-between w-full border-b border-gray-200 pb-3'>
                                        <div className='flex flex-col'>
                                            <a href='#' className='text-base font-bold line-clamp-2 hover:text-red-600 mb-2'>
                                                Chandigarh University (CU)  Chandigarh University (CU)  Chandigarh University (CU)
                                            </a>
                                            <p className='text-gray-500 text-sm'>
                                                <i className="ri-map-pin-line"></i> Chandigarh
                                            </p>
                                        </div>
                                        <div className='college-logo-b shrink-0'>
                                            <img
                                                className='w-16 h-16 rounded-full p-1 border border-gray-300'
                                                src="../../src/assets/images/logo/college-logo.png"
                                                alt="College logo"
                                            />
                                        </div>
                                    </div>

                                    <div className=' flex flex-col w-full mt-3'>
                                        <div className='flex flex-row justify-between'>   <p className='text-base font-medium'>ME/M.Tech</p>
                                            <p><i class="ri-star-fill text-yellow-400"></i> 5/5 </p> </div>
                                        <div className='flex flex-row justify-between'>
                                            <p className='text-gray-500 text-sm'><span className='text-red-600 font-semibold'> 1.70 Lacs</span> First Year Fees</p>
                                            <p className='text-gray-500 text-sm'>Review 286</p> </div>
                                    </div>
                                    <div className='w-full bg-gray-200 px-2 text-nowrap mt-2'>
                                        <p className='text-xs overflow-hidden text-gray-600 py-1 rounded'>Ranked 9 out of 150 IIRF, Ranked 9 out of 500 Collegedunia</p>

                                    </div>
                                    <div className="footer-btn grid grid-cols-1 sm:grid-cols-4 gap-3 mt-3 border-t border-gray-300 pt-4 mt-4">
                                        <button className="col-span-2 bg-red-600 text-white text-xs font-medium px-3 py-2 rounded-md w-full cursor-pointer">
                                            Apply Now
                                        </button>
                                        <button className="border border-gray-300 px-3 py-2 bg-white text-xs hover:bg-gray-300 text-gray-800 rounded-md cursor-pointer">
                                            Brochure
                                        </button>

                                        <button className="border border-gray-300 px-3 py-2 bg-white text-xs hover:bg-gray-300 text-gray-800 rounded-md cursor-pointer">
                                            Compare
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* ✅ Always render arrows, just toggle visibility */}
                    <button
                        className={`custom-swiper-prev absolute top-1/2 -left-6 z-10 -translate-y-1/2 
              bg-white border border-gray-300 shadow-md rounded-full p-3 hover:bg-gray-100 
              w-10 h-10 flex items-center justify-center transition-opacity duration-300 cursor-pointer
              ${isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                    >
                        <i className="ri-arrow-left-s-line text-2xl text-gray-700"></i>
                    </button>

                    <button
                        className={`custom-swiper-next absolute top-1/2 -right-6 z-10 -translate-y-1/2 
              bg-white border border-gray-300 shadow-md rounded-full p-3 hover:bg-gray-100 
              w-10 h-10 flex items-center justify-center transition-opacity duration-300  cursor-pointer
              ${isEnd ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                    >
                        <i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopUni;
