'use client'

import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Modal from '@/components/modals/Modal'
import RegisterModal from '@/components/modals/RegisterModal'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='
      w-full
      flex
      flex-col
    '>
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