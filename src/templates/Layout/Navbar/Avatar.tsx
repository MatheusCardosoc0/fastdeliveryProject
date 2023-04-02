'use client'

import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import unknownUser from '../../../assets/unknown.png'

const Avatar = () => {

  const [isVisibleOptions, setIsVisibleOptions] = useState(false)

  const ToggleOptions = useCallback(() => {
    setIsVisibleOptions(prev => !prev)
  },[])

  return (
    <div className='relative'>
      <Image src={unknownUser}
        className='
        w-[60px]
        md:w-[80px]
        cursor-pointer
      '
        alt='Imagem do usuário'
        onClick={ToggleOptions}
      />

      {isVisibleOptions && (
        <ul
          className='
            absolute
            bg-[#fffefe]
            right-0
            mt-[10px]
            rounded-xl
            drop-shadow-[1px_1px_3px_black]
            flex
            flex-col
            justify-center
            items-center
            gap-4
            text-xl
            p-4
          '>
          <li className='cursor cursor-pointer'>Conta</li>
          <li className='border-y-2 py-4 cursor-pointer'>Carrinho</li>
          <li className='cursor-pointer'>Favoritos</li>
        </ul>
      )}
    </div>
  )
}

export default Avatar