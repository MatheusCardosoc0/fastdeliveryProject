'use client'

import { useMemo, useState } from "react";
import useRentModal from "../../hooks/useRentModal";
import Modal from "./Modal";
import Heading from "../containers/Heading";
import { categories } from "../../constants/categories";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, useForm } from "react-hook-form";
import CountrySelected from "../inputs/CountrySelected";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

export default function RentModal() {

  const rentModal = useRentModal()

  const [step, setStep] = useState(STEPS.CATEGORY)


  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors
    },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      bathroomCount: 1,
      roomCount: 1,
      ImageSrc: '',
      price: 1,
      description: '',
      title: ''
    }
  })

  const category = watch('category')

  const setCustoomValue = (id: string, value: string) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
  }

  const onBack = () => {
    setStep((value) => value - 1)
  }

  const onNext = () => {
    setStep((value) => value + 1)
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Criar'
    }

    return 'Avançar'
  }, [step])

  const secondActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined
    }

    return 'Voltar'
  }, [step])


  

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="O que melhor descreve seu lugar?"
        subtitle="Clieque em uma categoria"
      />

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-3
          max-h-[50vh]
          overflow-auto
        ">

        {categories.map((item) => (
          <CategoryInput
            key={item.label}
            icon={item.icon}
            label={item.label}
            onClick={(category) =>
              setCustoomValue('category', category)}
            selected={category === item.label}
          />
        ))}

      </div>
    </div>
  )

  if(step === STEPS.LOCATION){
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading 
          title="Onde fica o seu lugar?"
          subtitle="Ajude os viajantes a encontrar você"
        />
        <CountrySelected />
      </div>
    )
  }

  return (
    <Modal
      title="Inicio"
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      secondaryLabel={secondActionLabel}
      body={bodyContent}
    />
  )
}