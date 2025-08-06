import { CheckIcon } from '@heroicons/react/16/solid'
import React from 'react'

const AboutMe = () => {
  return (
    <div id='about' className='mt-[4rem] bg-black pb-[3rem]'>
      <div className='w-[80%] pt-[5rem] mx-auto sm:pt-[7rem] md:pt-[10rem] grid items-center grid-cols-1 lg:grid-cols-2 gap-[30px]'>
            <div>
                <p className='heading_mini'>About Me</p>
                <h1 className='heading_primary'>
                    Proffessional
                    <span className='text-yellow-400'>
                        Website
                    </span>
                    for Your business
                </h1>
                <p className='text-white opacity-75 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatibus esse? Error, delectus. Ullam, sunt reprehenderit iste doloremqu</p>
                <div className='mt-[30px] space-y-3'>
                    <div className='flex items-center space-x-4'>
                        <CheckIcon className='w-[20px] text-yellow-400'/>
                        <p className='text-white opacity-75'>Frontend Development</p>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <CheckIcon className='w-[20px] text-yellow-400'/>
                        <p className='text-white opacity-75'>Web Development</p>
                    </div>
                </div>
            </div>
            <div className=' mt-[50px] lg:ml-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
                    <div  data-aos="zoom-in" data-aos-anchor-placement="top-center" className='p-6 text-center bg-yellow-500'>
                        <p className='text-black text-[50px] font-bold'>1</p>
                        <p className='text-black text-[20px] font-600'>Years Experience</p>
                    </div>

                    <div  data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay='100' className='p-6 text-center bg-yellow-500'>
                        <p className='text-black text-[50px] font-bold'>10+</p>
                        <p className='text-black text-[20px] font-600'>Projects Done</p>
                    </div>

                    <div  data-aos="zoom-in" data-aos-anchor-placement="top-center" className='p-6 text-center bg-yellow-500'>
                        <p className='text-black text-[50px] font-bold'>3+</p>
                        <p className='text-black text-[20px] font-600'>Certificate</p>
                    </div>

                    <div  data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay='100' className='p-6 text-center bg-yellow-500'>
                        <p className='text-black text-[50px] font-bold'>10+</p>
                        <p className='text-black text-[20px] font-600'>Happy Clients</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default AboutMe
