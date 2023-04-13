'use client'

import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import useLoginModal from '../../hooks/useLoginModal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Modal from './Modal'
import Heading from '../containers/Heading'
import Input from '../inputs/Input'
import { toast } from 'react-hot-toast'
import Button from '../Button'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import useRegisterModal from '../../hooks/useRegisterModal'

const LoginModal = () => {

  const LoginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false
    })
      .then((callback) => {
        setIsLoading(false)

        if (callback?.ok) {
          toast.success("Login concluido")
          window.location.reload()
          LoginModal.onClose()
        }

        if (callback?.error) {
          toast.error(callback.error)
        }
      })
  }

  const toggle = useCallback(() => {
    LoginModal.onClose()
    registerModal.onOpen()
  }, [LoginModal, registerModal])

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading
        title='Bem vindo de volta'
        subtitle='Entre com sua conta!'
      />
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
        onClick={() => { }}
      />
      <Button
        outline
        label='Continue com o github'
        icon={AiFillGithub}
        onClick={() => { }}
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
            Não possui uma conta?
          </div>
          <div
            onClick={toggle}
            className='
              text-neutral-800
              cursor-pointer
              hover:underline
          '>
            Criar conta
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      isOpen={LoginModal.isOpen}
      disabled={isLoading}
      title='Faça o login'
      actionLabel='Continuar'
      onClose={LoginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal