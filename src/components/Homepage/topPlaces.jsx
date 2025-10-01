import React, { useState } from 'react';
import "remixicon/fonts/remixicon.css";
import "./homepage.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const topPlaces = () => {

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);



  return (
    <section className='topCity py5 px-8'>
      <div className="max-w-screen-xl mx-auto py-16 border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl text-gray-900 font-bold mb-8">
         Top Study Places
        </h2>


        <div className="relative">
          {/* Swiper */}
          <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-swiper-next-topplaces",
              prevEl: ".custom-swiper-prev-topplaces",
            }}
            slidesPerGroup={1}         
            roundLengths={true}        
            centerInsufficientSlides={true} 
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
              320: { slidesPerView: 2.1 },
              640: { slidesPerView: 2 },
              1024: {
                slidesPerView:6.5,
                slidesPerGroup: 2,

              }, // ✅ remove fractional "3.2"
            }}
          >

            <SwiperSlide >
              <div className='city-card py-5'>
                <a href='#' className='city-box border border-gray-200 rounded-xl flex flex-col p-3 items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                  <img className='w-20 h-20' src='../../src/assets/images/delhi-city.webp' alt='city Name' />
                  <p className='text-base  mt-3 text-gray-800'>Delhi</p>
                </a>
              </div>           

            </SwiperSlide>


     <SwiperSlide >
              <div className='city-card py-5'>
                <a href='#' className='city-box border border-gray-200 rounded-xl flex flex-col p-3 items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                  <img className='w-20 h-20' src='../../src/assets/images/bangalore-city.webp' alt='city Name' />
                  <p className='text-base  mt-3 text-gray-800'>Bangalore</p>
                </a>
              </div>           

            </SwiperSlide>


                 <SwiperSlide >
              <div className='city-card py-5'>
                <a href='#' className='city-box border border-gray-200 rounded-xl flex flex-col p-3 items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                  <img className='w-20 h-20' src='../../src/assets/images/hyderabad-city.webp' alt='city Name' />
                  <p className='text-base  mt-3 text-gray-800'>Hyderabad</p>
                </a>
              </div>           

            </SwiperSlide>


                 <SwiperSlide >
              <div className='city-card py-5'>
                <a href='#' className='city-box border border-gray-200 rounded-xl flex flex-col p-3 items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                  <img className='w-20 h-20' src='../../src/assets/images/mumbai-city.webp' alt='city Name' />
                  <p className='text-base  mt-3 text-gray-800'>Mumbai</p>
                </a>
              </div>           

            </SwiperSlide>


                 <SwiperSlide >
              <div className='city-card py-5'>
                <a href='#' className='city-box border border-gray-200 rounded-xl flex flex-col p-3 items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                  <img className='w-20 h-20' src='../../src/assets/images/pune-city.webp' alt='city Name' />
                  <p className='text-base  mt-3 text-gray-800'>Pune</p>
                </a>
              </div>           

            </SwiperSlide>

                 <SwiperSlide >
              <div className='city-card py-5'>
                <a href='#' className='city-box border border-gray-200 rounded-xl flex flex-col p-3 items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                  <img className='w-20 h-20' src='../../src/assets/images/chandigarh-city.webp' alt='city Name' />
                  <p className='text-base  mt-3 text-gray-800'>Chandigarh</p>
                </a>
              </div>           

            </SwiperSlide>

                 <SwiperSlide >
              <div className='city-card py-5'>
                <a href='#' className='city-box border border-gray-200 rounded-xl flex flex-col p-3 items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                  <img className='w-20 h-20' src='../../src/assets/images/kolkata-city.webp' alt='city Name' />
                  <p className='text-base  mt-3 text-gray-800'>Kolkata</p>
                </a>
              </div>           

            </SwiperSlide>


                 <SwiperSlide >
              <div className='city-card py-5'>
                <a href='#' className='city-box border border-gray-200 rounded-xl flex flex-col p-3 items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                  <img className='w-20 h-20' src='../../src/assets/images/chennai-city.webp' alt='city Name' />
                  <p className='text-base  mt-3 text-gray-800'>Chennai</p>
                </a>
              </div>           

            </SwiperSlide>



            
                 <SwiperSlide >
              <div className='city-card py-5'>
                <a href='#' className='city-box border border-gray-200 rounded-xl flex flex-col p-3 items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                  <img className='w-20 h-20' src='../../src/assets/images/chennai-city.webp' alt='city Name' />
                  <p className='text-base  mt-3 text-gray-800'>Chennai</p>
                </a>
              </div>           

            </SwiperSlide>




           


          </Swiper>

          {/* ✅ Always render arrows, just toggle visibility */}
          <button
            className={`custom-swiper-prev-topplaces absolute top-1/2 -left-6 z-10 -translate-y-1/2 
              bg-white border border-gray-300 shadow-md rounded-full p-3 hover:bg-gray-100 
              w-10 h-10 flex items-center justify-center transition-opacity duration-300 cursor-pointer
              ${isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <i className="ri-arrow-left-s-line text-2xl text-gray-700"></i>
          </button>

          <button
            className={`custom-swiper-next-topplaces absolute top-1/2 -right-6 z-10 -translate-y-1/2 
              bg-white border border-gray-300 shadow-md rounded-full p-3 hover:bg-gray-100 
              w-10 h-10 flex items-center justify-center transition-opacity duration-300  cursor-pointer
              ${isEnd ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>
          </button>
        </div>


      </div>
    </section>




  )
}

export default topPlaces