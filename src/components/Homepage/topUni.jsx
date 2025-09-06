import React from 'react';
import "remixicon/fonts/remixicon.css";
import "./homepage.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const TopUni = () => {
    return (
        <section className="top-uni-list relative bg-gray-900">
            <div className="max-w-screen-xl mx-auto border-b border-gray-200 py-16">
                <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
                    Top Universities/Colleges
                </h2>

                <div className="relative">
                    {/* Swiper */}
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
                            1024: { slidesPerView: 3.2 },
                        }}
                    >
                        <SwiperSlide>
                            <div className="bg-white border border-gray-300 hover:shadow-md transition-shadow p-4 h-60 w-full flex flex-col rounded-lg">


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

                                <div className='footer-btn gird grid-col-1 '>





                                    
                                </div>





                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-green-500 h-60 w-full flex items-center justify-center text-white font-bold">
                                Slide 2
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-yellow-500 h-60 w-full flex items-center justify-center text-white font-bold">
                                Slide 3
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-purple-500 h-60 w-full flex items-center justify-center text-white font-bold">
                                Slide 4
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* ✅ Custom Navigation Arrows */}
                    <button className="custom-swiper-prev absolute top-1/2 -left-6 z-10 -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full p-3 hover:bg-gray-100 w-10 h-10 flex items-center justify-center">
                        <i className="ri-arrow-left-s-line text-2xl text-gray-700"></i>
                    </button>

                    <button className="custom-swiper-next absolute top-1/2 -right-6 z-10 -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full p-3 hover:bg-gray-100 w-10 h-10  flex items-center justify-center">
                        <i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopUni;
