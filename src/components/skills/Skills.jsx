import React from 'react';
import SkillCard from '../helper/SkillCart';


const Skils = () => {
  return (
    <div id="skils" className='pt-[80px] pb-[50px] bg-black'>
      <div className='grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[30px] items-center'>
        <div className='col-span-3'>
          <p className='heading_mini'>My Skills</p>
          <h1 className='heading_primary'>Let&apos;s Explore Popular <span className='text-yellow-400'>Skills</span>{" "} & Experience</h1>
          <p className='text-[15px] mb-[30px] text-white opacity-70 mt-[10px]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum illum sed eum placeat dolorum saepe quaerat recusandae sapiente expedita! Est quasi voluptatibus consequuntur aspernatur saepe corrupti quam inventore fugit sed.
          </p>
          <button className='custom-btn_2'>
            <span className='relative z-10'>Learn More</span>
          </button>
        </div>
        <div className='col-span-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] items-center'>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center">
              <SkillCard title="HTML" image='./images/html.svg' percent="100%" />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
              <SkillCard title="CSS" image='./images/css.svg' percent="97%" />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
              <SkillCard title="Tailwind" image='./images/tailwind.svg' percent="80%" />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="600">
              <SkillCard title="JavaScript" image='./images/js.svg' percent="80%" />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="800">
              <SkillCard title="React" image='./images/react.svg' percent="90%" />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1000">
              <SkillCard title="Next JS" image='./images/nextjs.svg' percent="70%" />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1000">
              <SkillCard title="Redux" image='./images/redux.svg' percent="85%" />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1200">
              <SkillCard title="TypeScript" image='./images/ts.svg' percent="70%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;