import React from 'react'
import Image from 'next/image'
import image from '../images/Image.png'
import image1 from '../images/Image (1).png'
import image2 from '../images/Image (1).png'
import image3 from '../images/Image (2).png'
import image4 from '../images/Image (3).png'
import image5 from '../images/Image (4).png'
import image6 from '../images/Image (5).png'
import image7 from '../images/Image (6).png'
import image8 from '../images/Image (7).png'


import { GrFormPrevious } from "react-icons/gr";
import { IoChevronForwardOutline } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Hero = () => {
  return (
 <div className='h-full w-full container mx-auto mt-6 '>

<div className='w-full h-58 bg-[#F5F5F5] '>
<h1 className='text-center font-extrabold'>Hello Nike App</h1>
<p className='font-medium text-center'>Download the app to access everything Nike</p>
</div>

<div>
<Image
src={image}
alt="image"
width={1344} 
height={500} className='w-[1344] h-[500]'/>
</div>


<div className='w-full h- mt-10'>
    <p  className='text-center'>First Look</p>
    <h1 className='font-bold text-center text-4xl  '>NIKE AIR MAX PULSE</h1>
    <p className='text-center font-semibold mt-5'>Extreme comfort.Hyper durable.Max volume.Introducing the Air Max Pulse</p>
    <p className='text-center font-semibold '>-design to push you past your limits and help you go to the max</p>
</div>

 
<div className='w- h-[45]  flex justify-items-center pl-[500px] gap-5 pt-[50px]'>
  <button className='w-[110px] h-[39px] bg-black rounded-full text-white font-semibold '>Netify</button>
  <button className='bg-black w-[138px] h-[39px] rounded-full text-white '>Shop All Max</button>
</div>


<div className='w-full h-[20px]  mt-24 flex '>
  <h2 className='w-full font-semibold text'>Best Of Air Max</h2>
  <h3 className='font-semibold pl-[1000px] mr-7'>Shop</h3>
<div className='w-[40px] h-[40px] bg-[#f5f5f56c] '><GrFormPrevious className='m-3' /></div>
<div className='w-[40px] h-[40px] bg-[#f5f5f5] ml-3'><IoChevronForwardOutline  className='m-3 mr-9'/></div>

</div>



<div className='w-full mt-12 flex gap-10'>
  <div className='w-[1000] h-[1000] '><Image src={image1} alt='image' width={1000} height={1000}/></div>
  <div className='w-[1000] h-[1000] '><Image src={image2} alt='image' width={1000} height={1000}/></div>
  <div className='w-[1000] h-[1000] '><Image src={image3} alt='image' width={1000} height={1000}/></div>
</div>


<div className='w-full mt-2 flex  '>
<div className='w-[1000]  flex gap-40  pl-8 '><h2>Nike Air Max Pulse</h2> <h3 className='flex'><FaIndianRupeeSign />13,995 </h3></div>


<div className='w-[1000]  flex gap-40  pl-14 '><h2>Nike Air Max Pulse</h2> <h3 className='flex'><FaIndianRupeeSign />13,995 </h3></div>

<div className='w-[1000]  flex gap-40  pl-24 '><h2>Nike Air Max Pulse</h2> <h3 className='flex'><FaIndianRupeeSign />13,995 </h3></div>
 
</div>



<div className='w-full    mt-12'>
<h1 className='w-full font-semibold' >Features</h1>
<Image
src={image4}
alt='image'
width={1344}
height={500} className='w-[1344px] h-[500px]' />

<h1 className='font-semibold text-4xl text-center mt-8'>STEP INTO WHAT FEELS GOOD</h1>
<h2 className=' text-xl text-center mt-8'>Cause everyone should know the feeling of  running in that perfect pair</h2>
<button className='bg-black rounded-full text-white mt-8 ml-[600px] w-[150px] h-[40px]'>Find your shoe</button>
</div>


<div className='font-semibold mt-12'>Gear Up</div>

<div className='w-full flex gap-72'>

<div className='flex w-80 ml-36'>
<h3 className=' font-semibold mt-2 mr-2 '>ShopMen</h3>
<div className='w-[40px] h-[40px] bg-[#f5f5f56c] '><GrFormPrevious className='m-3' /></div>
<div className='w-[40px] h-[40px] bg-[#f5f5f5] ml-3'><IoChevronForwardOutline  className='m-3 mr-9'/></div>
<div className='flex gap-10'>
<div className='mt-14 '><Image src={image5} alt='image' width={700} height={700}/></div>
<div className='mt-14'><Image src={image6} alt='image' width={700} height={700}/></div>
</div>
</div>

<div className='flex w-80 ml-28'>
<h3 className='font-semibold mt-2 mr-2'>ShopWomen</h3>
<div className='w-[40px] h-[40px] bg-[#f5f5f56c] '><GrFormPrevious className='m-3' /></div>
<div className='w-[40px] h-[40px] bg-[#f5f5f5] ml-3'><IoChevronForwardOutline  className='m-3 mr-9'/></div>
<div className='flex gap-10'>
<div className='mt-14 '><Image src={image7} alt='image' width={700} height={700}/></div>
<div className='mt-14 '><Image src={image8} alt='image' width={700} height={700}   /></div>
</div>
</div>


</div>


</div>



  )
}

export default Hero