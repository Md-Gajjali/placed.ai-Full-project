import React, { useState } from 'react'
import img from '../assets/login-side-img.webp'
import { BsEyeFill } from "react-icons/bs";
import { PiEyeClosedBold } from "react-icons/pi";




const Login = () => {

  // const [email,setEmail] = useState("")
  
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);    
  // }


  // const handleClick = (e) => {
  //   e.preventDefault()
  //   console.log(email);
  // }`

  const[email,setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[cng,setCng]=useState(false)


  const handleClick = (e) => {
    e.preventDefault()
    console.log(email);
    console.log(password);
    
  }


  return (
    <>
    
      

      <div className="flex justify-between relative">
        <div
          className="w-[1080px] h-[700px] absolute top-0 left-0 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${img})` }}/>
          
        <div>
            <form className="top-45 right-31 absolute max-w-sm mx-auto mt-10 bg-white border-[#F2F4F7] rounded-2xl w-[900px] h-[400px] px-10 py-10 shadow-[inset_0px_2px_4px_0px_rgba(184,196,243,0.14),0px_3px_10px_0px_rgba(16,24,40,0.1)]">
              <div className="mb-5">
                <label htmlFor="email-alternative" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                <input type="email" id="email-alternative" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body" placeholder="name@flowbite.com"   onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              <div className="mb-5">
                <label htmlFor="password-alternative" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
                {
                  cng ?
                    <>
                      <input type="text" 
                      id="password-alternative"
                      className="bg-neutral-secondary-medium border relative border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}  /> 

                      <BsEyeFill onClick={()=> setCng(!cng)} className='absolute top-[175px] left-[314px]' />

                    </> 
                    :
                    <> 
                      <input type="password" 
                      id="password-alternative"
                      className="bg-neutral-secondary-medium border relative border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)} />
                      <PiEyeClosedBold onClick={()=> setCng(!cng)} className='absolute top-[175px] left-[314px]' />

                    </>
                }
              </div>

              <div className="flex items-start mb-5" >
                <label htmlFor="remember-alternative" className="flex items-center h-5">
                  <input id="remember-alternative" type="checkbox" defaultChecked className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"  />
                  <p className="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a></p>
                </label>
              </div>

              <div>
                <button type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={handleClick}>Submit</button>
              </div>
            </form>
          </div>
      </div>
       <div className='absolute top-10 right-40'>
        <span className='flex justify-between gap-1 text-blue-600 text-8xl font-bold '>
          <span className='animate-swing-drop-in animate-heartbeat'>p</span>
          <span className='animate-heartbeat'>l</span>
          <span className='animate-slide-out-bottom'>a</span>
          <span className='animate-pop animate-pulse-fade-in'>c</span>
          <span className='animate-slide-out-top animate-pulse-fade-in'>e</span>
          <span className='animate-pulse-fade-in'>d</span>
        </span>
       </div>
    </>
  )
}

export default Login
