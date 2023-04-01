'use client'

import React, { ChangeEvent } from 'react'

interface InputProps{
  className?: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  type?: 'password' | 'text' | 'number' | 'search'
}

const Input = ({
  className,
  onChange,
  placeholder,
  type = 'text'
}: InputProps) => {
  return (
    <input
      className={`
        p-2
        rounded-xl
        w-full
        max-w-[300px]
        outline-none
        hover:drop-shadow-[1px_1px_2px_black]
        ${className}
      `}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
  )
}

export default Input