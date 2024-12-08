import React from 'react'
import Image from 'next/image'
import image from '../images/logo.png.png'

const TopHeader = () => {
  return (
    <div className='w-full h-38 bg-[#F5F5F5]'>
<div className='pl-7 pt-2'>
  <Image
  src={image}
  alt='image'/>
</div>
<div className='pb-3 -mt-2'><div className='flex justify-end  gap-5 mr-10 -mt-3 font-semibold'>
  <h2>find a store |</h2>
  <h2>help |</h2>
  <h2>join us | </h2>
  <h2>signin | </h2>
</div>
</div>
    </div>
  )
}

export default TopHeader
