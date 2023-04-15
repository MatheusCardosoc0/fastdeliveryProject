'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Funct = () => {

  const router = useRouter()

  return (
    <div>
      <button onClick={() => router.push('/')} className='mt-40'>
        Vai se Logar!!!!!!!!!!!!!
      </button>
    </div>
  )
}

export default Funct