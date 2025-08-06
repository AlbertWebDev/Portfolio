"use client"
import { Bars3CenterLeftIcon} from '@heroicons/react/16/solid'
import React, { useEffect, useState } from 'react'
import NavMenuMobile from '../navMenuMobile/NavMenuMobile'

const Nav = () => {
    const [navSticky,setNavSticky] = useState(false)
    const [showNavMobile,setShowNavMobile] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY >= 100){
                setNavSticky(true)
            }
            if(window.scrollY <= 100){
                setNavSticky(false)
            }
        })
    },[])
    const stickyStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : ""
    const navigateFunc = (section) => {
        const element = document.getElementById(section)
        if(element){
            window.scrollTo({
            top:element.offsetTop,
            behavior:"smooth"
            })
        }
    }
  return (
    <div className={`${stickyStyle} fixed w-[100%] z-[1000] transition-all duration-300`}>
        <div className='flex w-[80%] items-center justify-between h-[80px] mx-auto'>
            <div className='font-logo text-white text-[18px]'>
                <span className='text-[30px] md:text-[40px] text-yellow-400'>Albert</span>
                Sahakyan
            </div>
            <ul className='lg:flex md:flex  hidden items-center space-x-10 sm:none'>
                <li onClick={() => navigateFunc('home')}>
                    <a className='nav_link cursor-pointer lg:text-xl md:text-[15px]'>Home</a>
                </li>
                 <li onClick={() => navigateFunc('about')}>
                    <a className='nav_link cursor-pointer lg:text-xl md:text-[15px]'>About</a>
                </li>
                 <li onClick={() => navigateFunc('services')}>
                    <a className='nav_link cursor-pointer lg:text-xl md:text-[15px]'>Services</a>
                </li>
                 <li onClick={() => navigateFunc('price_list')}>
                    <a className='nav_link cursor-pointer lg:text-xl md:text-[15px]'>Price List</a>
                </li>
                 <li onClick={() => navigateFunc('contact')}>
                    <a className='nav_link cursor-pointer lg:text-xl md:text-[15px]'>Contact</a>
                </li>
            </ul>
            <button onClick={() => setShowNavMobile(!showNavMobile)} 
            className='lg:hidden md:hidden xs:flex w-[30px] h-[30px] text-white rotate-[180deg]'>
                <Bars3CenterLeftIcon/>
            </button>
        </div>
        {showNavMobile ? <NavMenuMobile showNavMobile={showNavMobile} setShowNavMobile={setShowNavMobile}/> : ""}
    </div>
  )
}

export default Nav
