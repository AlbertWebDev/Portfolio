import { BugAntIcon, CodeBracketIcon, CommandLineIcon, CursorArrowRaysIcon, RocketLaunchIcon, ServerIcon } from '@heroicons/react/16/solid'
import React, { ReactElement } from 'react'


const iconMaping = {
    "01": CommandLineIcon,
    "02": ServerIcon,
    "03": CodeBracketIcon,
    "04": CursorArrowRaysIcon,
    "05": RocketLaunchIcon,
    "06": BugAntIcon
}


const ServiceCard = ({title, num}) => {

    const IconComponent = (iconMaping)[num] || CommandLineIcon
  return (
    <div className='bg-black  custom_servise z-[100] relative transform rounded-2xl text-center p-6 shadow-md'>
        <IconComponent className='w-[50px] h-[50px]  relative z[1] mx-auto text-yellow-400 '/>
        <h1 className='text-[25px] text-white relative z-[1] mt[20px]'>{title}</h1>
        <p className='text-white opacity-60 mt-[10px] text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quaerat animi ab aliquam, libero quam deleniti quibusdam ea magni temporibus adipisci error inventore laborum praesentium unde, magnam fugiat nisi id.</p>
        <p className='text-white  text-[25px] font-bold absolute top-3 right-3'>{num}</p>
    </div>
  )
}

export default ServiceCard