import React from 'react';
import doctors1 from '../../assets/doctor-1.jpg';
import doctors2 from '../../assets/doctor-2.jpg';
import doctors3 from '../../assets/doctor-3.jpg';
import doctors4 from '../../assets/doctor-4.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Helmet } from 'react-helmet';
import { FaArrowRight } from 'react-icons/fa';
import { Navigation } from 'swiper/modules';

// Animate.css
import 'animate.css';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='w-full'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className="w-full relative">
                            <div className="w-full h-full">
                                <img src={doctors1} alt="" className="w-full h-full object-top object-cover" />
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-gradient-to-tr form-neutral-900/60 to-neutral-900/30 z-30">
                                <div className="bg-blue-300/40 border-blue-200/50 backdrop-blur px-5 py-10 rounded-xl border md:w-2/6 w-ful">
                                    <div className="space-y-4">
                                        <h1
                                            className="md:-text-2xl text-3xl text-blue-50 font-bold leading-[1.3] animate__animated animate__jackInTheBox"
                                        >
                                            We Take of Your Healthy Health
                                        </h1>
                                        <p
                                            className="text-base text-neutral-300 font-normal line-clamp-3 animate__animated animate__bounceInRight"
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores soluta, non veritatis praesentium culpa in?
                                        </p>
                                    </div>
                                    <button className="w-fit px-8 py-3 mt-2 text-base text-neutral-700 font-medium rounded-xl border-2 border-neutral-50 bg-neutral-50 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                                        <Link to="/services">Our Services</Link>
                                        <FaArrowRight className='text-xl pt-0.5' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full relative">
                            <div className="w-full h-full">
                                <img src={doctors2} alt="" className="w-full h-full object-top object-cover" />
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-gradient-to-tr form-neutral-900/60 to-neutral-900/30 z-30">
                                <div className="bg-blue-300/40 border-blue-200/50 backdrop-blur px-5 py-10 rounded-xl border md:w-2/6 w-ful">
                                    <div className="space-y-4">
                                        <h1 className="md:-text-2xl text-3xl text-blue-50 font-bold leading-[1.3]">
                                            We Take of Your Healthy Health
                                        </h1>
                                        <p className="text-base text-neutral-300 font-normal line-clamp-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores soluta, non veritatis praesentium culpa in?
                                        </p>
                                    </div>
                                    <button className="w-fit px-8 py-3 mt-2 text-base text-neutral-700 font-medium rounded-xl border-2 border-neutral-50 bg-neutral-50 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                                        Our Services
                                        <FaArrowRight className='text-xl pt-0.5' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full relative">
                            <div className="w-full h-full">
                                <img src={doctors3} alt="" className="w-full h-full object-top object-cover" />
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-gradient-to-tr form-neutral-900/60 to-neutral-900/30 z-30">
                                <div className="bg-blue-300/40 border-blue-200/50 backdrop-blur px-5 py-10 rounded-xl border md:w-2/6 w-ful">
                                    <div className="space-y-4">
                                        <h1 className="md:-text-2xl text-3xl text-blue-50 font-bold leading-[1.3]">
                                            We Take of Your Healthy Health
                                        </h1>
                                        <p className="text-base text-neutral-300 font-normal line-clamp-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores soluta, non veritatis praesentium culpa in?
                                        </p>
                                    </div>
                                    <button className="w-fit px-8 py-3 mt-2 text-base text-neutral-700 font-medium rounded-xl border-2 border-neutral-50 bg-neutral-50 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                                        Our Services
                                        <FaArrowRight className='text-xl pt-0.5' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full relative">
                            <div className="w-full h-full">
                                <img src={doctors4} alt="" className="w-full h-full object-top object-cover" />
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-gradient-to-tr form-neutral-900/60 to-neutral-900/30 z-30">
                                <div className="bg-blue-300/40 border-blue-200/50 backdrop-blur px-5 py-10 rounded-xl border md:w-2/6 w-ful">
                                    <div className="space-y-4">
                                        <h1 className="md:-text-2xl text-3xl text-blue-50 font-bold leading-[1.3]">
                                            We Take of Your Healthy Health
                                        </h1>
                                        <p className="text-base text-neutral-300 font-normal line-clamp-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores soluta, non veritatis praesentium culpa in?
                                        </p>
                                    </div>
                                    <button className="w-fit px-8 py-3 mt-2 text-base text-neutral-700 font-medium rounded-xl border-2 border-neutral-50 bg-neutral-50 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                                        Our Services
                                        <FaArrowRight className='text-xl pt-0.5' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}
// 
export default Hero
