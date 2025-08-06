import Image from 'next/image'
import React from 'react'


const SkillCard = ({image, title, percent}) => {
  return (
    <div className=' flex flex-col justify-between p-6  hover:bg-red-700 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900 h-[230px]'>
      <div className='flex flex-col justify-between h-[120px]'>
         <Image src={image} alt={title} width={80} height={80} className='object-cover mx-auto' />
        <h1 className='text-white text-[18px] mt-[10px] font-600'>{title}</h1>
      </div>
      <div className='bg-black mt-[10px] p-2 rounded-lg text-white opacity-40'>{percent}</div>
    </div>
  )
}

export default SkillCard