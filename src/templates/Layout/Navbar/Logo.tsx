'use client'

import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='
      flex 
      items-center
    '>
      <Image
        alt='Logotipo'
        src={"/images/Logo.png"}
        className='w-[80px]'
        width={1000}
        height={1000}
      />
      <h1
        className="
          hidden
          md:block
          text-3xl
          underline
          font-black
          text-[#000000]
        ">
        FastDelivery
      </h1>
    </div>
  )
}

export default Logo