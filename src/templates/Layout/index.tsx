'use client'

import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Modal from '@/components/modals/Modal'
import RegisterModal from '@/components/modals/RegisterModal'
import ToasterProvider from '@/providers/ToasterProvider'
import { Toaster } from 'react-hot-toast'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='
      w-full
      flex
      flex-col
    '>
      <Toaster />
      <RegisterModal />
      <Navbar />
      <div className='mt-20'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout