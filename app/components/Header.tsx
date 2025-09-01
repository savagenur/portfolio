import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
      </div>
      <h3 className='flex gap-2'>
        Hi! I&apos;m Nurbolot Muratbek uulu <Image alt='' src={assets.hand_icon} className='w-6' />
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
        frontend web developer based in Portland.
      </h1>
      <p className='max-w-2xl mx-auto font-ovo'>
        I am a frontend developer from Portland, USA with 4 years of experience in web design and development. I
        create modern and responsive websites that provide a great user experience.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>

        <a href="/cv.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume<Image src={assets.download_icon} alt='' className='w-4' /></a>
        
      </div>
    </div>
  )
}

export default Header
// 40