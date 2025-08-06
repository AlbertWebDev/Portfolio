import { Postpone } from 'next/dist/server/app-render/dynamic-rendering'
import React from 'react'

const Footer = () => {
    return (
        <footer className='flex justify-center bg-black py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3 w-[80%] gap-10 lg:grid-cols-3 md:grid-cols-2 sm:gap-10'>
                <div className='flex flex-col gap-4 items-center lg:items-start md:items-start sm:items-center'>
                    <div className='flex items-end'>
                        <h2 className='flex text-yellow-400
                        text-[35px] font-[400] gap-2 font-logo lg:text-[35px] md:text-[35px] sm:text-[30px]'>Albert</h2>
                        <p className='text-white text-[18px] mb-2 font-logo sm:text-[16px]'>Sahakyan</p>
                    </div>
                    <p className='heading_mini text-[15px] text-center space-y-4 lg:text-start  md:text-start md:text-[15px] sm:text-center sm:text-[13px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    A voluptates consequuntur atque aspernatur.
                    Eveniet neque voluptatibus excepturi voluptate exercitationem veniam vitae voluptas tempora, 
                    amet ipsa repudiandae repellat cum omnis tempore possimus velit expedita soluta hic placeat. Minima,
                    ipsam!</p>
                    <p className='text-yellow-400 underline text-[22px] font-semibold mt-4 md:text-[22px] sm:text-[18px]'>albert.sahakyan567@gmail.com</p>
                </div>
                <div className='flex items-center flex-col'>
                    <div className='flex flex-col gap-4 md:items-start sm:items-center items-center'>
                        <p className='text-white font-[700] text-[18px]'>Quick Links</p>
                        <ul className='flex flex-col gap-3 heading_mini md:items-start sm:items-center items-center'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center flex-col'>
                    <div className='flex flex-col gap-4 md:items-start sm:items-center items-center'>
                        <p className='text-white font-[700] text-[18px]'>Address</p>
                        <ul className='flex flex-col gap-3 heading_mini md:items-start sm:items-center items-center'>
                            <li><p className='text-white/90 font-[500]'>Yerevan,Armenia</p></li>
                            <li><p className='text-white/90 font-[500]'>albert.sahakyan567@gmail.com</p></li>
                            <li><p className='text-white/90 font-[500]'>+(374)99 34 78 45</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
