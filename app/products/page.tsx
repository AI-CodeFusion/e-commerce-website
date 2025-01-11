import React from 'react'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Image from 'next/image';
import image from '../images/Rectangle.png'
import image1 from '../images/Rectangle (1).png'
import image2 from '../images/Rectangle (2).png'
import image3 from '../images/Rectangle (3).png'
import image4 from '../images/Rectangle (4).png'
import image5 from '../images/Rectangle (5).png'
import image6 from '../images/Rectangle (6).png'
import image7 from '../images/Rectangle (7).png'
import image8 from '../images/Rectangle (8).png'
import image9 from '../images/Rectangle (9).png'
import image10 from '../images/Rectangle (10).png'
import image11 from '../images/Rectangle (11).png'
import image12 from '../images/Rectangle (12).png'
import image13 from '../images/Rectangle (13).png'
import image14 from '../images/Rectangle (14).png'
import image15 from '../images/Rectangle (15).png'
import image16 from '../images/Rectangle (16).png'
import image17 from '../images/Rectangle (17).png'
import image18 from '../images/Rectangle (18).png'
import image19 from '../images/Rectangle (19).png'
import image20 from '../images/Rectangle (20).png'
import image21 from '../images/Rectangle (21).png'
import image22 from '../images/Rectangle (22).png'
import image23 from '../images/Rectangle (23).png'
import image24 from '../images/Rectangle (24).png'
import image25 from '../images/Rectangle (25).png'
import image26 from '../images/Rectangle (26).png'
import image27 from '../images/Rectangle (27).png'
import image28 from '../images/Rectangle (28).png'
import image29 from '../images/Rectangle (29).png'
import image30 from '../images/Rectangle (30).png'




const page = () => {
  return (
    <div className='m-10   '>
    <div className=' flex justify-between'>
        <div> <h1 className='font-bold '>New(500)</h1> </div>
        <div className='flex gap-4'> <p>Hide filter </p> <HiOutlineAdjustmentsHorizontal /> <select ><option value="sort by">sort by</option> </select> </div>   
    </div>

<div className='w-380 flex '>
    <div className='w-80 h-full  '>
    <ul>
        <li>Shoes</li>
        <li>Sports Bras</li>
        <li>Tops & Shirts</li>
        <li>Hoodies & Sweatshirts</li>
        <li>Jackets </li>
        <li>Trousers & Tights</li>
        <li>Shorts</li>
        <li>Tracksuits</li>
        <li>Jumpsuits & rompers</li>
        <li>Skirts & Dresses</li>
        <li>Socks</li>
        <li>Assessories & Equipments</li>
        <li></li>  
    </ul>
    <div className='mt-16  flex justify-between'>
        <h1 className='font-semibold'>Gender</h1> 
        <select ></select>    
    </div>
    <div className='mt-6 flex flex-col'> 
   <div className='flex gap-2'> <input type="checkbox" /><h1>Men</h1></div>
   <div className='flex gap-2'> <input type="checkbox" /><h1>Women</h1></div>
   <div className='flex gap-2'> <input type="checkbox" /><h1>Unisex</h1></div>
    </div>
    

    <div className='mt-16  flex justify-between'>
        <h1 className='font-semibold'>Kids</h1> 
        <select ></select>    
    </div>
    <div className='mt-6 flex flex-col'> 
   <div className='flex gap-2'> <input type="checkbox" /><h1>Boys</h1></div>
   <div className='flex gap-2'> <input type="checkbox" /><h1>Girls</h1></div>
    </div>

    <div className='mt-16  flex justify-between'>
        <h1 className='font-semibold'>Shop by Price</h1> 
        <select ></select>    
    </div>
    <div className='mt-6 flex flex-col'> 
   <div className='flex gap-2'> <input type="checkbox" /><p>Under &#8377; 2500.00</p></div>
   <div className='flex gap-2'> <input type="checkbox" /><p> &#8377; 2501.00 - &#8377;</p></div>
    </div>
   
</div>


<div className='grid grid-cols-3 gap-y-10 gap-x-6 ml-12 '>

<div className='w-100 h-200 flex flex-col '> <Image src={image} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 Mid '07</p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 10 795.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image1} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Court Vision Low Next Nature </p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 4 995.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image2} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 PLT.AF.ORM</p> <p className='text-[#757575]'>Women's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 8 695.00</p></div>



<div className='w-100 h-200 flex flex-col '> <Image src={image3} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 Mid '07</p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 10 795.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image4} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Court Vision Low Next Nature </p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 4 995.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image5} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 PLT.AF.ORM</p> <p className='text-[#757575]'>Women's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 8 695.00</p></div>


<div className='w-100 h-200 flex flex-col '> <Image src={image6} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 Mid '07</p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 10 795.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image7} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Court Vision Low Next Nature </p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 4 995.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image8} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 PLT.AF.ORM</p> <p className='text-[#757575]'>Women's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 8 695.00</p></div>


<div className='w-100 h-200 flex flex-col '> <Image src={image9} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 Mid '07</p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 10 795.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image10} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Court Vision Low Next Nature </p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 4 995.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image11} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 PLT.AF.ORM</p> <p className='text-[#757575]'>Women's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 8 695.00</p></div>


<div className='w-100 h-200 flex flex-col '> <Image src={image12} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 Mid '07</p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 10 795.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image13} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Court Vision Low Next Nature </p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 4 995.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image14} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 PLT.AF.ORM</p> <p className='text-[#757575]'>Women's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 8 695.00</p></div>


<div className='w-100 h-200 flex flex-col '> <Image src={image15} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 Mid '07</p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 10 795.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image16} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Court Vision Low Next Nature </p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 4 995.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image17} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 PLT.AF.ORM</p> <p className='text-[#757575]'>Women's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 8 695.00</p></div>


<div className='w-100 h-200 flex flex-col '> <Image src={image18} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 Mid '07</p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 10 795.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image19} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Court Vision Low Next Nature </p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 4 995.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image20} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 PLT.AF.ORM</p> <p className='text-[#757575]'>Women's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 8 695.00</p></div>


<div className='w-100 h-200 flex flex-col '> <Image src={image21} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 Mid '07</p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 10 795.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image22} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Court Vision Low Next Nature </p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 4 995.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image23} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 PLT.AF.ORM</p> <p className='text-[#757575]'>Women's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 8 695.00</p></div>


<div className='w-100 h-200 flex flex-col '> <Image src={image24} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 Mid '07</p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 10 795.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image25} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Court Vision Low Next Nature </p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 4 995.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image26} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 PLT.AF.ORM</p> <p className='text-[#757575]'>Women's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 8 695.00</p></div>


<div className='w-100 h-200 flex flex-col '> <Image src={image28} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 Mid '07</p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 10 795.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image29} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Court Vision Low Next Nature </p> <p className='text-[#757575]'>Men's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 4 995.00</p></div>
<div className='w-100 h-200 flex flex-col '> <Image src={image30} alt='image' width={400} height={400} /> <p className='text-red-500'>Just In</p> <p className='font-bold'>Nike Air Force 1 PLT.AF.ORM</p> <p className='text-[#757575]'>Women's Shoes</p> <p className='text-[#757575]'>1 colour</p> <p className='font-semibold'>MRP : &#8377; 8 695.00</p></div>

<div>
<h1 className='font-semibold mb-10'>Related Categories</h1>
<div className='flex gap-4  '>
<input className='w-[150px] h-8 border border-black-4 rounded-2xl' placeholder='Best Selling Products'/>
<input className='w-[120px] h-8 border border-black-4 rounded-2xl' placeholder='Best Shoes'/>
<input className='w-[150px] h-8 border border-black-4 rounded-2xl' placeholder='New Basketball Shoes'/>
<input className='w-[150px] h-8 border border-black-4 rounded-2xl' placeholder='New Football Shoes'/>
<input className='w-[150px] h-8 border border-black-4 rounded-2xl' placeholder='New Men Shoes'/>
<input className='w-[150px] h-8 border border-black-4 rounded-2xl' placeholder='New running Shoes'/>
<input className='w-[150px] h-8 border border-black-4 rounded-2xl' placeholder='Best Mens shoes'/>

</div>

<input className=' mt-6 w-[150px] h-8 border border-black-4 rounded-2xl' placeholder='New Jordon Shoes'/>
<input className='w-[150px] h-8 border border-black-4 rounded-2xl ml-5' placeholder='Best Training & Gym'/>


</div>


</div>


</div>

    </div>



  )
}

export default page