'use client'

import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import useRegisterModal from '@/hooks/useRegisterModal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Modal from './Modal'
import Heading from '../containers/Heading'
import Input from '../globalElements/Input'

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
    <div className='flex flex-col gap-4'>
      <Heading
        title='Bem vindo a fast delivery'
        subtitle='Crie sua conta!'
      />
      <Input
        label='Nome'
        id='name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required />
      <Input
        label='Email'
        id='name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required />
      <Input
        label='Senha'
        id='name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required />
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