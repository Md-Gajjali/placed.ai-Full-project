import React from 'react'
import logo from '../assets/Logo (4).png'
import { NavLink } from "react-router";




const NavBer = () => {
    return (
        <>
            <nav class="hidden lg:block max-w-[1260px] mt-[31px] w-full mx-auto bg-white/95 backdrop-blur-md border border-[#F2F4F7] rounded-full px-4 py-3 shadow-[inset_0px_2px_4px_0px_rgba(184,196,243,0.14),0px_3px_10px_0px_rgba(16,24,40,0.1)]">
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <ul className=' flex gap-10 text-[16px]'>
                            <li>
                                <NavLink to="/" end>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" end>
                                    AI Tools
                                </NavLink></li>
                            <li>
                                <NavLink to="/" end>
                                    Pricing
                                </NavLink></li>
                            <li>
                                <NavLink to="/" end>
                                    Blogs
                                </NavLink></li>
                        </ul>
                    </div>
                    <div className='flex gap-4 items-center '>
                        <a href="#">
                            <NavLink to="/Login" end>
                                <button className='px-[24px] py-2.5 bg-[#F5F7FA] w-[91px] h-[44px] rounded-3xl shadow-[inset_0px_2px_4px_0px_rgba(184,196,243,0.14),0px_3px_10px_0px_rgba(16,24,40,0.1)] '>Login</button>
                            </NavLink>
                        </a>
                        <a href="#">
                            <button className='w-[157px] h-[44px] bg-[#1C2330] text-white  rounded-3xl'>Sign up for free</button>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBer
