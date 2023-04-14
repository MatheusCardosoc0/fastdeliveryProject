'use client'

import { useCallback } from "react"
import { CldUploadWidget } from 'next-cloudinary'
import { TbPhotoPlus } from "react-icons/tb"
import Image from "next/image"

declare global {
  var cloudnary: any
}

interface ImageUploadProps {
  onChange: (value: string) => void
  value: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  value
}) => {

  const handleUpload = useCallback((result: any) => {
    onChange(result.info.secure_url)
  }, [onChange])

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="bnqoarms"
      options={{
        maxFiles: 1
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
            relative
            cursor-pointer
            hover:opacity-70
            transition
            border-dashed
            border-2
            p-20
            border-neutral-200
            flex
            flex-col
            justify-center
            items-center
            gap-4
            text-neutral-600
          ">
            <TbPhotoPlus size={50} />
            <div className="font-semibold text-lg">
              Clique para enviar
            </div>
            {value && (
              <div
                className="absolute instet-0 w-full h-full"
              >
                <Image
                  alt="Upload"
                  fill
                  style={{objectFit: 'cover'}}
                  src={value}
                />
              </div>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImageUpload