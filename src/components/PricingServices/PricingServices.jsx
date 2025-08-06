import { CheckIcon } from '@heroicons/react/16/solid'
import React from 'react'

const PricingServices = ({name,sale,price,bg_color}) => {
  return (
    <div className='w-[100%] h-[440px] rounded-tl-lg rounded-tr-lg lg:w-[100%] md:w-[100%] sm:w-[100%]'>
        <div className='w-[100%] h-[200px] p-6 rounded-tl-lg rounded-tr-lg' style={{backgroundColor:`${bg_color}`}}>
            <h2 className='text-white text-[28px] font-semibold font-[100]'>{name}</h2>
            <p className='flex text-white text-[15px] gap-1'>{`Try out ${name} Plan Save`}<span className='text-yellow-400 font-[400]'>{`${sale}%`}</span></p>
            <div className='flex justify-center items-center mt-4'>
               <p className='text-yellow-400 text-[40px] font-bold pb-6'>{`${price}$`}</p>
               <p className='text-white text-[20px]'>/hour</p>
            </div>
        </div>
        <div className='flex flex-col bg-gray-900 p-6 h-[180px]'>
            <ul className='flex flex-col gap-2'>
                <li className='flex items-center gap-2'><CheckIcon className='text-yellow-400 w-[20px] h-[20px]'/> <p className='text-white'>React JS Website</p></li>
                <li className='flex gap-2'><CheckIcon className='text-yellow-400 w-[20px] h-[20px]'/> <p className='text-white'>Next JS Website</p></li>
                <li className='flex gap-2'><CheckIcon className='text-yellow-400 w-[20px] h-[20px]'/> <p className='text-white'>Java Script Website</p></li>
                <li className='flex gap-2'><CheckIcon className='text-yellow-400 w-[20px] h-[20px]'/> <p className='text-white'>Authentication</p></li>
            </ul>
        </div>
        <a className='flex justify-center items-center w-[100%] h-[50px] bg-blue-600 text-white cursor-pointer'>Get Started</a>
    </div>
  )
}

export default PricingServices
