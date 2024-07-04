// src/components/AboutUs.jsx
import React from 'react';


const About = () => {
    return (<>
        <div className='pt-24  flex justify-center p-6 gap-x-10'>
            <div className='flex w-1/2 gap-x-10 '>
                <div className='flex flex-col gap-y-4 pt-10 '>
                    <div>
                        <img className='rounded-3xl' src="/images/women.jpg" alt="" />
                    </div>
                    <div>
                        <div

                            className="rounded-2xl bg-red-900 px-7 py-4 text-xl font-normal text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Mitigate Teacher Shortages in Your District
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <div>
                        <img className='rounded-3xl' src="/images/women3.jpg" alt="" />
                    </div>
                    <div >
                        <img className='rounded-3xl' src="/images/group.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='flex  w-1/2 gap-x-10 '>
                <div className=' flex flex-col gap-y-4'>
                    <div className='flex flex-col gap-y-6 p-3'>
                        <p className='text-base font-medium text-rose-900'>About Us</p>
                        <h1 className='text-5xl font-semibold' >Turnkey Teacher
                            <br />
                            Recruitment
                        </h1>
                        <p className='text-lg font-normal'>Our mission is to help school districts
                            recruit and retain the best teachers for their students Our mission is to help school districts
                            recruit and retain the best teachers for their students Our mission is to help school districts
                            recruit and retain the best teachers for their students</p>
                        <div>

                            <a
                                href="#"
                                className="rounded-full bg-red-900 px-12 py-4 text-font-thin text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Learn More


                            </a>
                        </div>
                    </div>
                    <div >
                        <video className='rounded-3xl' controls width="100%">
                            <source src="/video-example.webm" type="video/webm" />
                            <source src="/video-example.mp4" type="video/mp4"
                            />
                            Sorry, your browser doesn't support videos.
                        </video>

                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default About;
