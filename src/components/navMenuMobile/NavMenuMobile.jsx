import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

const NavMenuMobile = ({ showNavMobile, setShowNavMobile }) => {

    return (
        <div data-aos={showNavMobile ? "fade-right" : "fade-left"} data-aos-delay="300"
            className='flex flex-col justify-center items-center w-[100%] h-[100vh] bg-red-600 absolute top-0'>
            <div className='flex w-[100%] absolute top-0 justify-end items-center p-4'>
                <button className='text-white font-[10px] w-[35px] h-[35px]'
                    onClick={() => setShowNavMobile(!showNavMobile)}>
                    <XMarkIcon />
                </button>
            </div>
            <ul className='flex flex-col w-[100%] items-center text-white text-[32px] gap-6'>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Services</a></li>
                <li><a>Project</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    )
}

export default NavMenuMobile
