'use client'

import Container from '@/components/containers/Container'
import React, { useState } from 'react'
import Logo from './Logo'
import { Input } from '@/components'
import Searchbar from './Searchbar'
import Avatar from './Avatar'

const Navbar = () => {



  return (
    <nav className='fixed w-full bg-[#f7f7f7] z-10 shadow-sm'>
      <div
        className='
          py-4
          border-b-[1px]
        '>
        <Container>
          <div
            className='
              flex
              flex-row
              items-center
              justify-between
              gap-3
              md:gap-0 
            '
          >

            <Logo />
            <Searchbar />
            <Avatar />
          </div>
        </Container>
      </div>
    </nav>
  )
}

export default Navbar