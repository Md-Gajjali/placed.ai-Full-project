import React from 'react'
import star from '../assets/Star.png'
import star1 from '../assets/Star 1.png'


const HeroSection = () => {
  return (
    <>
    <section className="menupart">
          <div className="containerr items-center py-[40px]">
            <div className="w-fit bg-[#FFFFFF33] justify-between gap-1 m-auto px-[18px] py-[10px] rounded-[33px] border  border-[#F2F4F7B2] backdrop-blur-[40px] flex items-center  gap-[6.33px] ">
              <ul className="flex items-center m-auto font-medium ">
                <li><img src={star} alt /></li>
                <li>Trustpilot</li>
                <li>
                  <ul className="flex">
                    <li><img src={star1} alt /></li>
                    <li><img src={star1} alt /></li>
                    <li><img src={star1} alt /></li>
                    <li><img src={star1} alt /></li>
                  </ul>
                </li>
                <li>4.8</li>
                <li>(220 reviews)</li>
              </ul>
            </div>
            <div className="py-[12px] w-[1046px] m-auto h-[184px] text-center">
              <h1 className="text-[90px] font-bold px-[120px] text-3xl">
                <span className='text-[90px]'>
                  AI Career 
                </span>
                
                <span class="relative inline-block">
                    <span class="absolute text-[90px] inset-0 rounded-md bg-gradient-to-r from-[#4928FE] to-[#5340FE]/0 -rotate-180 opacity-30 p-2 md:p-6 -z-10"></span>
                    <span className='mr-3 px-3 text-[90px]'>Platform </span>
                </span>
              </h1>
              <h1 className='text-[90px] font-bold mt-[-25px] ml-[-25 px]'>For Job Seekers</h1>
              <p className="w-[665px] h-[55px] m-auto py-7 font-medium text-[20px] text-[#6B7280]">
                Find your ideal job faster with AI-driven matching and personalized
                recommendations based on your skills and preferences.
              </p>
              <div className="flex items-center justify-center py-[48px] gap-6">
                <div className="flex items-center gap-2">
                  <img src="assets/clock.png" alt />
                  <p className="text-[14px] font-medium space-[0.5%]">Set up in minutes, not days</p>
                </div>
                <div className="flex item-center gap-2">
                  <img src="assets/idea.png" alt />
                  <p className="text-[14px] font-medium space-[0.5%]">No training required</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="assets/link din.png" alt />
                  <p className="text-[14px] font-medium space-[0.5%]">Integrates with your LinkedIn Profile</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default HeroSection
