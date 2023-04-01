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
        height={100}
        width={100}
      />
      <h1
        className="
          text-2xl
          md:text-3xl
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