'use client'

import axios from "axios";
import Container from "../../../components/containers/Container";
import { useEffect, useState } from "react";
import { TbMilkshake } from 'react-icons/tb'
import { MdFastfood, MdFoodBank } from 'react-icons/md'
import { CategoriesIconProps, CategoriesProps } from "../../../types/CategoriesType";
import CategoriesContainer from "../../../components/containers/CategoriesContainer";
import { usePathname, useSearchParams } from "next/navigation";



const categoriesIcons: CategoriesIconProps[] = [
  {
    icon: TbMilkshake
  },
  {
    icon: MdFastfood
  },
  {
    icon: MdFoodBank
  }
]

export default function Categories() {

  const [categories, setCategories] = useState<CategoriesProps[]>([])

  const params = useSearchParams()
  const currentCategory = params?.get('category')
  const pathname = usePathname()

  const isMainPage = pathname === '/'

  async function getCategories() {
    await axios.get('/api/categories')
      .then(response => setCategories(response.data))
  }

  useEffect(() => {
    getCategories()
  }, [])

  if(!isMainPage){
    return null
  }

  return (
    <Container>
      <div
        className="
          flex
          justify-between
          items-center
          py-4
        ">
        {categories.map((category, i) => (
          <CategoriesContainer key={category.id}
            icon={categoriesIcons[i].icon}
            name={category.name || 'e'}
            selected={currentCategory == category.name}
          />
        ))}
      </div>
    </Container>
  )
}