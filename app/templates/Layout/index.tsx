'use client'

import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Modal from '../../components/modals/Modal'
import ToasterProvider from '../../providers/ToasterProvider'
import { Toaster } from 'react-hot-toast'
import RegisterModal from '../../components/modals/RegisterModal'
import LoginModal from '../../components/modals/LoginModal'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='
      w-full
      flex
      flex-col
    '>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <Navbar />
      <div className='mt-20'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout