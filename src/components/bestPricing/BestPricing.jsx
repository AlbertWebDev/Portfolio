import React from 'react'
import PricingServices from '../PricingServices/PricingServices'

const BestPricing = () => {
  return (
    <div id='price_list' className='flex flex-col items-center w-[100%] bg-black py-[30px] gap-20'>
      <div className='flex flex-col w-[80%] items-center'>
            <p className='font-semibold heading_mini sm:text-[16px]'>Popular Services</p>
            <h2 className='flex heading_primary gap-[0.8rem] lg:text-[50px] md:text-[35px] sm:text-[35px]'>
            Best <span className='text-yellow-400'>Pricing</span> For Your Project</h2>
      </div>
      <div className='grid justify-between w-[80%] gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        <PricingServices name="Basic" sale="25" price="8" bg_color="rgba(197, 38, 38, 0.665)"/>
        <PricingServices name="Popular" sale="35" price="12" bg_color="rgba(34, 149, 43, 0.745)"/>
        <PricingServices name="Premium" sale="45" price="15" bg_color="rgba(45, 93, 214, 0.665)"/>
      </div>
    </div>
  )
}

export default BestPricing
