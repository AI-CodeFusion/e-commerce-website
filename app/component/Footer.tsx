import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-black'>
    <div className='flex text-white justify-between pr-4 pl-6 pt-12'>

<div className='font-semibold '>
    <h1>Find a store</h1>
    <h1>Become a member</h1>
    <h1>Signup for Email</h1>
    <h1>Send us feedback</h1>
    <h1>Students Discount</h1>
</div>

<div>
<h1 className='font-semibold '>Get help</h1>
<h3 className='text-[#7e7e7e]'>Order status</h3>
<h3 className='text-[#7e7e7e]'>Delivery</h3>
<h3 className='text-[#7e7e7e]'>Returns</h3>
<h3 className='text-[#7e7e7e]'>Payment options</h3>
<h3 className='text-[#7e7e7e]'>Contact us on Nike.com Inquiries</h3>
<h3 className='text-[#7e7e7e]'>Contact us on all other Inquiries</h3>
</div>

<div>
    <h1 className='font-semibold '>About Nike</h1>
    <h3 className='text-[#7e7e7e]'>News</h3>
    <h3 className='text-[#7e7e7e]'>Careers</h3>
    <h3 className='text-[#7e7e7e]'>Investors</h3>
    <h3 className='text-[#7e7e7e]'>Sustainability</h3>
</div>

<div className='flex gap-3 text-[#7e7e7e]'>
<FaTwitter />
<FaFacebook />
<TiSocialYoutubeCircular />
<TiSocialInstagram />
</div>

    </div>

<div className='flex  mt-16 pb-10 text-[#f5f5f5] '>
<IoLocationSharp className='ml-10' />
<h1 className='ml-3'>India</h1>
<FaRegCopyright className='ml-12 text-[#7e7e7e]' />
<h1 className='text-[#7e7e7e]'>2023 Nike.Inc. All Rights Reserved </h1>
<div className='flex ml-96 gap-12 text-[#7e7e7e]'>
<h1>Guides</h1>
<h1>Terms of sale</h1>
<h1>Term of use</h1>
<h1>Nike Privacy Policy</h1>
</div>

</div>

</div>


  )
}

export default Footer