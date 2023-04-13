'use client'

import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import useRegisterModal from '../../hooks/useRegisterModal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Modal from './Modal'
import Heading from '../containers/Heading'
import Input from '../inputs/Input'
import { toast } from 'react-hot-toast'
import Button from '../Button'
import { signIn } from 'next-auth/react'
import useLoginModal from '../../hooks/useLoginModal'

const RegisterModal = () => {

  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
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

  const toggle = useCallback(() => {
    loginModal.onOpen()
    registerModal.onClose()
  }, [loginModal, registerModal])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios.post('api/register', data)
      .then(() => {
        registerModal.onClose()
      })
      .catch((error) => {
        toast.error('Erro ao fazer o cadastro')
      })
      .finally(() => {
        setIsLoading(false)
        toggle()
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
        id='email'
        type='email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required />
      <Input
        label='Senha'
        id='password'
        type='password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required />
    </div>
  )

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />

      <Button
        outline
        label='Continue com o google'
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button
        outline
        label='Continue com o github'
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div
        className='
        text-neutral-500
        text-center
        mt-4
        font-light
      '>
        <div className='
          justify-center flex flex-row items-center gap-2'>
          <div>
            Já possui uma conta?
          </div>
          <div
            onClick={toggle}
            className='
              text-neutral-800
              cursor-pointer
              hover:underline
          '>
            Logar
          </div>
        </div>
      </div>
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
      footer={footerContent}
    />
  )
}

export default RegisterModal