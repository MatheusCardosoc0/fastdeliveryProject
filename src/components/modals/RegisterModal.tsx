'use client'

import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import useRegisterModal from '@/hooks/useRegisterModal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Modal from './Modal'

const RegisterModal = () => {

  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios.post('api/register', data)
      .then(() => {
        registerModal.onClose()
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const bodyContent = (
    <div className='fex flex-col gap-4'>
      aa
    </div>
  )

  return (
    <Modal
      isOpen={registerModal.isOpen}
      disabled={isLoading}
      title='Cadastre-se'
      actionLabel='Continuar'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  )
}

export default RegisterModal