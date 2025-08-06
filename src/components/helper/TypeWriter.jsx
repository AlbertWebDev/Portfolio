import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypeWriter = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'a JavaScript Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'a React Developer',
        1000,
        'a Next JS Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      // style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
      className='text-white xl:text-[40px] lg:text-[40px]  sm:text-[20px] text-[20px] font-bold'
    />
  )
}

export default TypeWriter