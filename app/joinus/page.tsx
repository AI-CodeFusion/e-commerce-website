import React from 'react'
import Link from 'next/link'
import { FaAngleDown } from "react-icons/fa6";
const page = () => {
  return (
    <div className=' w-[380px] h-830 ml-[500px] mt-20'>
    <h1 className='font-bold text-2xl ml-6 text-[#8D8D8D]'>BECOME A NIKE MEMBER</h1>
    <p className='text-[#8D8D8D]'>Creat your Nike member profile and get first access to the very best of Nike  products, inspiration & community</p>
    <input className='w-[360px] h-10 bg-[#ffffff]  mt-6 text-[#8D8D8D] border border-black-4 ' placeholder='Email Address'/>
    <input className='w-[360px] h-10 bg-[#ffffff] mt-6 text-[#8D8D8D] border border-black-4' placeholder='Password'/>
    <input className='w-[360px] h-10 bg-[#ffffff] mt-6 text-[#8D8D8D] border border-black-4' placeholder='First Name'/> 
    <input className='w-[360px] h-10 bg-[#ffffff] mt-6 text-[#8D8D8D] border border-black-4 ' placeholder='Last Name'/>  
    <input className='w-[360px] h-10 bg-[#ffffff] mt-6 text-[#8D8D8D] border border-black-4 ' placeholder='Birthday'/> 
    <p className='text-[#8D8D8D] font-'>Get Nike Member Reward every year on your Birthday</p>
    <select className='w-[360px] h-10 bg-[#ffffff] mt-6 text-[#8D8D8D] flex justify-between'>
      <option value="Pakistan" > Pakistan</option> 
      <option value="India">India</option>
      <option value="UAE">UAE</option> </select> 
    <input className='w-[360px] h-10 bg-[#ffffff] mt-6 text-[#8D8D8D] ' placeholder='Email Adress'/>  
    <div className='flex justify-between text-[#8D8D8D] text-center'>
    <input className='w-[150px] h-10 ' placeholder='Male'/>
    <input className='w-[150px] h-10' placeholder='Female'/>
    </div>
    <div className='w-[380px] h-12 flex mt-7 mb-7 text-[#8d8d8d] '>
    <div className='w-10 h-7 bg-white m-3 border border-[#8d8d8d] rounded-md'></div>
      <p>signup for emails to get updates from Nike on products,offers and your Member benefits  </p>
     
    </div>

    <div className='mt-7  mb-7 text-[#8d8d8d] text-center'> 
        <p>By creating an account,you agree to Nike's <u>Privacy Policy</u> and <u>Terms of Use </u></p>
      </div>

      <div className='mt-7 justify-items-center mb-7'>
      <Link href="/signin"> <button className='bg-black min-w-72  h-10 text-white ml-8'>JOIN US</button>|</Link>
      </div>

      <div className=' w-380 mt-7 mb-7 flex justify-center'>
        <p className='text-[#8d8d8d]'>Already a member</p>
        <p className='text-black'><u>Sign In.</u></p>
      </div>
      
    </div>
  )
}

export default page