import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosThumbsUp } from "react-icons/io";
import { IoIosThumbsDown } from "react-icons/io";
import Image from 'next/image';
import image from '../images/Image (12).png'
import image1 from '../images/Image (13).png'
import image2 from '../images/Image (14).png'
import image3 from '../images/Image (15).png'


const page = () => {
  return (
    <div className='h-full mt-10 '>

<div className='text-center'>
<h1 className='font-semibold mx-auto text-2xl'>GET HELP</h1>
<button className=" w-[500px] h-[50px] border border-black flex mx-auto p-4 justify-between">
 What can we help you with?
<IoSearchOutline className="" />
</button>
</div>   


<div className='flex justify-between w-280 m-10 '>
  

<div  className=''>
<h1 className='font-bold text-2xl mb-4'>WHAT PAYMENT OPTION CAN I USE ON NIKE ORDERS</h1>
<p className='mb-4'>We want to make buying your favourite Nike shoes and gear online fast and easy,and we accept the following payment options:</p>
<p className='mb-4'>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
<p className='mb-4'>If you enter your PAN information at checkout, you'll be able to pay for your order with payTM or a local debit or credit card.  </p>
<p className='mb-4'>Apple pay</p>
<p className='mb-4'><u>Nike Members</u> can store multiple debit or credit card in their profile for faster checkout. If you're not already a Member, <u>join us</u> today. </p>

<div>
<button className='bg-black text-white font-semibold rounded-2xl w-[100px]  h-10'> JOIN US</button>
<button className='bg-black text-white font-semibold rounded-2xl w-[200px]  h-10 ml-4'> SHOP NIKE</button>
</div>

<h1 className='mt-4 font-semibold'>FAQs</h1>
<h1 className='mt-4 font-semibold'>Does my card need international purchases enabled ?</h1>
<p> Yes,we recommend asking your bank to enable international purchases on your card.you will be notified at checkout if international purchases need to be enabled</p>
<p className='mt-10 mb-10 '> please note,some banks may charge <u>a small transaction fee</u> for international orders.</p>
<h1 className='font-semibold '>Can I pay for my order with multiple method ?</h1>
<p>No, payment for Nike order can't be split between multiples payment method</p>
<h1 className='mt-10  font-semibold'>What payment method is accepted fo SNKRS orders ?</h1>
<p>You can use any accepted credit card to pay for your SNKRS orders.</p>
<h1 className='mt-10 font-semibold'>Why don't I see Apple Pay as an option ? </h1>
<p>To see Apple Pay as an option in the Nike app or on Nike.com , you 'll need to use compatible Apple device running the latest  OS, be signed in to your iCloud account and have a supported card in your wallet.Additionally you 'll need to use Safari to use Apple Pay on Nike.com.</p>
<p className='mt-10'>Was this answer helpful ?</p>
<div className='flex gap-2'> <IoIosThumbsUp /> <IoIosThumbsDown /> </div>
<h1 className='text-[#8c8c8c] mt-5'>RELATED</h1>
<h1 className='ml-10 mt-5 underline'>WHAT ARE NIKE'S DELIVERY OPTIONS?</h1>
<h1 className='ml-10 mt-5 underline'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</h1>
</div>






        <div className='w-[600px]  justify-items-center'>

          <h1 className='font-semibold text-2xl'>CONTACT US</h1>
        <Image src={image} alt='image'  className=' mt-5'/>
        
        <p className='font-semibold text-center mt-5'>000 800 919 0566</p>
        <p>Products & Orders:24 hours a day</p>
        <p>7 days a week</p>
      <p className='text-center'>Company info & Enquiries: 7:30 - 16:30 Monday - Friday</p>
      <Image src={image1} alt='image' className='m-8' />
      <p className='mt-10 '>24 hours a day</p>
      <p>7 days a week</p>
      <Image src={image2} alt='image' className='m-8' />
      <p className=' font-semibold'> We'll reply within </p>
        <p> five business days</p>
        <Image src={image3} alt='image' className='m-8' />
        <p className='font-semibold'>STORE LOCATER</p>
        <p>Find Nike retail stores near you</p>
        
         </div>

      

        </div>
    </div>
  )
}

export default page