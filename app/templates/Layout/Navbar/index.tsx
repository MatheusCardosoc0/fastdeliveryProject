'use client'

import Container from '../../../components/containers/Container'
import React, { useState } from 'react'
import Logo from './Logo'
import { Input } from '../../../components'
import Searchbar from './Searchbar'
import Avatar from './Avatar'
import { User } from '@prisma/client'
import { SafeUser } from '../../../types'

interface navBarProps{
  currentUser: SafeUser | null
}

const Navbar: React.FC<navBarProps> = ({
  currentUser
}) => {

  console.log({currentUser})

  return (
    <nav className='fixed top-0 w-full bg-[#f7f7f7] z-10 shadow-sm'>
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
            <Avatar currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </nav>
  )
}

export default Navbar