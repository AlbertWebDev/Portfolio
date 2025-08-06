"use client"
import React, { useState } from 'react'
import { ArrowUpLeftIcon } from '@heroicons/react/16/solid';
import TypeWriter from '../helper/TypeWriter'

const Hero = () => {
    const [showText, setShowText] = useState(false)
    return (
        <div className='w-[100vw] pt-[7vh] md:pt-[12vh] h-[1030px] lg:h-[100vh] custom-bg' style={{ backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.836),rgba(0, 0, 0, 0.811)),url('/images/bg.jpg')` }} id='home'>
            <div className='flex flex-col justify-center w-[80%] h-[100%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                    <div>
                        <h1 className='text-[#c4cfde] mb-4' data-aos="fade-right">WELCOME TO MY WORLD</h1>
                        <div data-aos="fade-left">
                            <h2 className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-8 text-white'>
                                Hi, I&apos;m
                                <span className='text-yellow-400'>Albert</span>
                            </h2>
                            <TypeWriter />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="800">
                            <p className='mt-[30px] text-[13px] md:text-[15px] text-[#c4cfde]'>
                                Motivated Frontend Developer with a strong foundation in HTML, CSS, and JavaScript. Skilled in creating responsive and user-friendly web interfaces, with a passion for delivering high-quality code and seamless user experiences.
                            </p>
                            {
                            showText ? (
                                <>
                                    <p className='text-[13px] md:text-[15px] text-[#c4cfde]'>
                                        Adept at collaborating with cross-functional teams to implement design specifications and improve website functionality. Continuously learning and staying current with emerging technologies and best practices in web development.
                                    </p>
                                    <ArrowUpLeftIcon onClick={() => setShowText(false)} className='w-[20px] text-yellow-400 cursor-pointer' />
                                </>
                            ) : (
                                <span className='text-[13px] md:text-[15px] text-yellow-400 cursor-pointer' onClick={() => setShowText(true)}>
                                    Read More...
                                </span>   
                            )
                            }
                        </div>
                        <div className='mt-[30px] flex items-center space-x-6'>
                            <button data-aos="zoom-in" data-aos-delay="1200" className='custom-btn'>
                                <a href='/pdf/resume-sample.pdf' download  className=' relative z-10'>Download CV</a>
                            </button>
                        </div>
                    </div>

                    {/* for img */}
                    <div>
                          
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
