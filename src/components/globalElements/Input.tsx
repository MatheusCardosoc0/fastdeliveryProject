'use client'

import React, { ChangeEvent } from 'react'
import {
  FieldErrors,
  FieldValues,
  UseFormRegister
} from 'react-hook-form'
import { BiDollar } from 'react-icons/bi'

interface InputProps {
  id: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  label: string
  type?: 'password' | 'text' | 'number' | 'search'
  disabled?: boolean
  formatPrice?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
  onChange,
  type = 'text',
  errors,
  id,
  register,
  disabled,
  formatPrice,
  required,
  label
}) => {
  return (
    <div
      className='w-full relative'>
      {formatPrice && (
        <BiDollar
          size={24}
          className='
              text-neutral-700
              absolute
              top-5
              left-2
            '
        />
      )}
      <input
        id={id}
        disabled={disabled}
        required={required}
        onChange={onChange}
        type={type}
        className={`
        px-2
        pb-2
        pt-8
        peer
        rounded-xl
        w-full
        max-w-[400px]
        outline-none
        border-2
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        bg-neutral-100
        ${formatPrice ? 'pl-9' : 'pl-4'}
        ${errors[id] ? 'border-rose-500' : 'border-sky-200'}
        ${errors[id] ? 'focus:border-rose-500' : 'focus:border-sky-400'}
      `}
      />
      <label className={`
        absolute
        text-xl
        duration-150
        transform
        -translate-y-3
        top-5
        z-10
        origin-[0]
        ${formatPrice? 'left-7' : 'left-4'}
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${formatPrice? 'text-rose-500': 'text-sky-500'}
      `}>
        {label}
      </label>
    </div>
  )
}

export default Input