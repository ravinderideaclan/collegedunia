import React from 'react'

const TopExam = () => {
    return (
        <section className='topCity py5 px-8'>
            <div className="max-w-screen-xl mx-auto py-16">

                <div className='flex flex-col mb-8'>
                    <h2 className="text-2xl md:text-3xl text-gray-800 font-bold mb-3">
                        Top Entrance Exams
                    </h2>
                    <p className='text-gray-500'>Prepare for major competitive examinations</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>

                    <div className='exam-p-box rounded-xl border border-gray-200 p-3'>
                        <div className='flex flex-row'>
                            <div className='uni-logo w-20 he-20 border border-gray-200 p-1 rounded-full overflow-hidden'>
                                <img className='w-full' src='../../src/assets/images/logo/cuet.webp' alt='Exam Name' />
                            </div>
                            <div className='exam-title ms-3 flex justify-center flex-col'>
                                <h3 className='text-2xl font-semibold'>CUTE</h3>
                                <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">Online</span>
                            </div>
                        </div>
                        <div className='partcipate-c flex justify-between py-2 border-b border-gray-200'>
                            <div className='p-c flex'>
                                <p className='text-gray-500 text-sm'><i className="ri-school-line me-1/1   "></i> Participating Colleges</p>
                            </div>
                            <div className='nocollege'>
                                <p className='text-gray-900 text-base font-semibold'>92</p>
                            </div>
                        </div>

                        <div className='ex-d py-3 flex justify-between border-b border-gray-200'>
                            <div className='exam-di border-r border-gray-200 w-50 pe-3'>
                                <div className=''>
                                    <p className='text-gray-500 text-sm'><i class="ri-calendar-2-line"></i> Exam Date </p>
                                </div>
                                <p className='text-semibold text-base font-semibold'>May 13, 2025</p>
                            </div>


                            <div className='exam-di w-50 pl-3'>
                                <div className=''>
                                    <p className='text-gray-500 text-sm'><i class="ri-file-list-3-line"></i> Exam Level </p>
                                </div>
                                <p className='text-semibold text-base font-semibold'>National</p>
                            </div>
                        </div>
                        <div className="footer-btn grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 ">
                            <button class="col-span-2 bg-gray-800 hover:bg-red-900 text-white text-xs font-medium px-3 py-2 rounded-full w-full cursor-pointer">Application Process</button>
                            <button class="border border-gray-300 px-3 py-2 bg-white text-xs hover:bg-gray-300 text-gray-800 rounded-full cursor-pointer">Exam Info</button>
                        </div>
                    </div>


                    <div className='exam-p-box rounded-xl border border-gray-200 p-3'>
                        <div className='flex flex-row'>
                            <div className='uni-logo w-20 he-20 border border-gray-200 p-1 rounded-full overflow-hidden'>
                                <img className='w-full' src='../../src/assets/images/logo/jee-advance.webp' alt='Exam Name' />
                            </div>
                            <div className='exam-title ms-3 flex justify-center flex-col'>
                                <h3 className='text-2xl font-semibold'>JEE Advance</h3>
                                <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">Online</span>
                            </div>
                        </div>
                        <div className='partcipate-c flex justify-between py-2 border-b border-gray-200'>
                            <div className='p-c flex'>
                                <p className='text-gray-500 text-sm'><i className="ri-school-line me-1/1   "></i> Participating Colleges</p>
                            </div>
                            <div className='nocollege'>
                                <p className='text-gray-900 text-base font-semibold'>92</p>
                            </div>
                        </div>

                        <div className='ex-d py-3 flex justify-between border-b border-gray-200'>
                            <div className='exam-di border-r border-gray-200 w-50 pe-3'>
                                <div className=''>
                                    <p className='text-gray-500 text-sm'><i class="ri-calendar-2-line"></i> Exam Date </p>
                                </div>
                                <p className='text-semibold text-base font-semibold'>May 13, 2025</p>
                            </div>


                            <div className='exam-di w-50 pl-3'>
                                <div className=''>
                                    <p className='text-gray-500 text-sm'><i class="ri-file-list-3-line"></i> Exam Level </p>
                                </div>
                                <p className='text-semibold text-base font-semibold'>National</p>
                            </div>
                        </div>
                        <div className="footer-btn grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 ">
                            <button class="col-span-2 bg-red-600 text-white text-xs font-medium px-3 py-2 rounded-md w-full cursor-pointer">Application Process</button>
                            <button class="border border-gray-300 px-3 py-2 bg-white text-xs hover:bg-gray-300 text-gray-800 rounded-md cursor-pointer">Exam Info</button>
                        </div>
                    </div>

                    <div className='exam-p-box rounded-xl border border-gray-200 p-3'>
                        <div className='flex flex-row'>
                            <div className='uni-logo w-20 he-20 border border-gray-200 p-1 rounded-full overflow-hidden'>
                                <img className='w-full' src='../../src/assets/images/logo/neet-logo.webp' alt='Exam Name' />
                            </div>
                            <div className='exam-title ms-3 flex justify-center flex-col'>
                                <h3 className='text-2xl font-semibold'>NEET</h3>
                                <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">Online</span>
                            </div>
                        </div>
                        <div className='partcipate-c flex justify-between py-2 border-b border-gray-200'>
                            <div className='p-c flex'>
                                <p className='text-gray-500 text-sm'><i className="ri-school-line me-1/1   "></i> Participating Colleges</p>
                            </div>
                            <div className='nocollege'>
                                <p className='text-gray-900 text-base font-semibold'>92</p>
                            </div>
                        </div>

                        <div className='ex-d py-3 flex justify-between border-b border-gray-200'>
                            <div className='exam-di border-r border-gray-200 w-50 pe-3'>
                                <div className=''>
                                    <p className='text-gray-500 text-sm'><i class="ri-calendar-2-line"></i> Exam Date </p>
                                </div>
                                <p className='text-semibold text-base font-semibold'>May 13, 2025</p>
                            </div>


                            <div className='exam-di w-50 pl-3'>
                                <div className=''>
                                    <p className='text-gray-500 text-sm'><i class="ri-file-list-3-line"></i> Exam Level </p>
                                </div>
                                <p className='text-semibold text-base font-semibold'>National</p>
                            </div>
                        </div>
                        <div className="footer-btn grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 ">
                            <button class="col-span-2 bg-red-600 text-white text-xs font-medium px-3 py-2 rounded-md w-full cursor-pointer">Application Process</button>
                            <button class="border border-gray-300 px-3 py-2 bg-white text-xs hover:bg-gray-300 text-gray-800 rounded-md cursor-pointer">Exam Info</button>
                        </div>
                    </div>


                    <div className='exam-p-box rounded-xl border border-gray-200 p-3'>
                        <div className='flex flex-row'>
                            <div className='uni-logo w-20 he-20 border border-gray-200 p-1 rounded-full overflow-hidden'>
                                <img className='w-full' src='../../src/assets/images/logo/jee-advance.webp' alt='Exam Name' />
                            </div>
                            <div className='exam-title ms-3 flex justify-center flex-col'>
                                <h3 className='text-2xl font-semibold'>JEE Mains</h3>
                                <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">Online</span>
                            </div>
                        </div>
                        <div className='partcipate-c flex justify-between py-2 border-b border-gray-200'>
                            <div className='p-c flex'>
                                <p className='text-gray-500 text-sm'><i className="ri-school-line me-1/1   "></i> Participating Colleges</p>
                            </div>
                            <div className='nocollege'>
                                <p className='text-gray-900 text-base font-semibold'>92</p>
                            </div>
                        </div>

                        <div className='ex-d py-3 flex justify-between border-b border-gray-200'>
                            <div className='exam-di border-r border-gray-200 w-50 pe-3'>
                                <div className=''>
                                    <p className='text-gray-500 text-sm'><i class="ri-calendar-2-line"></i> Exam Date </p>
                                </div>
                                <p className='text-semibold text-base font-semibold'>May 13, 2025</p>
                            </div>


                            <div className='exam-di w-50 pl-3'>
                                <div className=''>
                                    <p className='text-gray-500 text-sm'><i class="ri-file-list-3-line"></i> Exam Level </p>
                                </div>
                                <p className='text-semibold text-base font-semibold'>National</p>
                            </div>
                        </div>
                        <div className="footer-btn grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 ">
                            <button class="col-span-2 bg-red-600 text-white text-xs font-medium px-3 py-2 rounded-md w-full cursor-pointer">Application Process</button>
                            <button class="border border-gray-300 px-3 py-2 bg-white text-xs hover:bg-gray-300 text-gray-800 rounded-md cursor-pointer">Exam Info</button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default TopExam