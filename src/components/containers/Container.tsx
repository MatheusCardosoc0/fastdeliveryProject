'use client'

import React, { ReactNode } from 'react'

interface ContainerProps{
  children: ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className='
      max-w-[2528px]
      mx-auto
      xl:px-20
      md:px-10
      px-4
    '>
      {children}
    </div>
  )
}

export default Container