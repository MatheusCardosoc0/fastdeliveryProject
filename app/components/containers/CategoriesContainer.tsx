'use client'

import { useRouter } from "next/navigation"
import { CategoriesIconProps, CategoriesProps } from "../../types/CategoriesType"
import { useSearchParams } from "next/navigation"
import { useCallback } from "react"
import queryString from "query-string"
import { IconType } from "react-icons"

type CategoryContainerProps = {
  icon: IconType
  name: string
  selected?: boolean
}

export default function CategoriesContainer({
  icon: Icon,
  name,
  selected
}: CategoryContainerProps) {

  const router = useRouter()
  const params = useSearchParams()

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = queryString.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: name
    }

    if (params?.get('category') === name) {
      delete updatedQuery.category
    }

    const url = queryString.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true })

    router.push(url)
  }, [name, params, router])

  return (
    <div
      onClick={handleClick}
      className="
        font-semibold
        text-xl
        group
        cursor-pointer
        flex
        flex-col
        items-center
      ">
      <Icon
        className={`
          text-2xl
          group-hover:text-pink-500
          ${selected && 'text-pink-500'}
        `}/>
      <span
        className={`
          bg-primary-graient
          bg-clip-text
          group-hover:text-transparent
          ${selected && 'text-transparent'}
        `}>
        {name}
      </span>
    </div>
  )
}