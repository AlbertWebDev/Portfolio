import React from 'react'
import ServiceCard from '../helper/ServiceCart'



const Services = () => {
  return (
    <div  id="services" className='pt-[80px] pb-[80px] bg-[#0b0c13]'>
        <div className='text-center'>
            <p className='heading_mini'>Popular Services</p>
            <h1 className='heading_primary'>
                My Special <span className='text-yellow-400'>Services</span> For You
            </h1>
        </div>
        <div className='pt-[80px] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] items-center'>
            <div data-aos="fade-up" data-aous-anchor-placement="top-center" data-delay="200">
                <ServiceCard title="React Website" num="01" />
            </div>

            <div data-aos="fade-up" data-aous-anchor-placement="top-center" data-delay="400">
                <ServiceCard title="Next JS Website" num="02"/>
            </div>

            <div data-aos="fade-up" data-aous-anchor-placement="top-center" data-delay="600">
                <ServiceCard title="JavaScript Website" num="03"/>
            </div>
        </div>
    </div>
  )
}

export default Services