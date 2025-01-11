import React from 'react'
import Link from 'next/link'
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
  <Link href="/products">find a store |</Link>
  <Link href="/help">help |</Link>
  <Link href="/joinus">join us | </Link>
  <Link href="/signin">signin | </Link>
</div>
</div>
    </div>
  )
}

export default TopHeader
