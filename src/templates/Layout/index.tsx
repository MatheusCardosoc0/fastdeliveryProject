'use client'

import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Modal from '@/components/modal/Modal'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='
      w-full
      flex
      flex-col
    '>
      <Modal isOpen
        title='Teste'
        actionLabel='Enviar'
      />
      <Navbar />
      <div className='mt-20'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout