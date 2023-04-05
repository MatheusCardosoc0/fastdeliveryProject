'use client'

import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Modal from '../../components/modals/Modal'
import ToasterProvider from '../../providers/ToasterProvider'
import { Toaster } from 'react-hot-toast'
import RegisterModal from '../../components/modals/RegisterModal'
import LoginModal from '../../components/modals/LoginModal'
import { User } from '@prisma/client'
import { SafeUser } from '../../types'

interface LayoutProps{
  children: ReactNode
  currentUser: SafeUser | null
}

const Layout = ({children, currentUser}: LayoutProps) => {
  return (
    <div className='
      w-full
      flex
      flex-col
    '>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <Navbar currentUser={currentUser} />
      <div className='mt-28'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout