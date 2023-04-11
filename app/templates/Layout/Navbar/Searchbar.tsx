'use client'

import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

const Searchbar = () => {

  const [search, setSearch] = useState('')

  return (
    <div
      className='
        p-1
        bg-primary-graient
        rounded-xl
        w-full
        max-w-[50%]
      '>
      <div
        className='
        flex
        items-center
        bg-[#ffffff]
        rounded-xl
        overflow-hidden
        text-base
        px-3
        py-2
        md:text-xl
      '>
        <BiSearch />
        <input
          className='
          bg-transparent
          outline-none
          px-1
          w-full
        '
          placeholder='Buscar...'
        />
      </div>
    </div>
  )
}

export default Searchbar