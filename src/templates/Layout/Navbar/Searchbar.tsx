'use client'

import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

const Searchbar = () => {

  const [search, setSearch] = useState('')

  return (
    <div
      className='
        flex
        items-center
        bg-[#ffffff]
        rounded-xl
        overflow-hidden
        px-3
        py-2
        group
        hover:drop-shadow-[1px_1px_1px_black]
      '>
      <BiSearch />
      <input
        className='
          bg-transparent
          outline-none
        '
        placeholder='Buscar...'
      />
    </div>
  )
}

export default Searchbar